import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Profile from '../components/profile'
import Career from '../components/carrer'
import Qualifications from '../components/qualifications'

import { getPage, getBlocks } from "../lib/notion";
import { NotionRenderBlock } from "../components/notionRenderBlock";
import { Fragment } from "react";

type Props = {
  page: any;
  blocks: any;
}

const Index = ({ page, blocks }: Props) => {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <>
      <Layout>
        <Head>
          <title>marusho.io</title>
        </Head>
        <Container>
          <Intro />
          <div>
            <section>
              {blocks.map((block: any) => (
                <Fragment key={block.id}>{NotionRenderBlock(block)}</Fragment>
              ))}
            </section>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async (context: any) => {
  const id = process.env.NOTION_PAGE_ID;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block: any) => block.has_children)
      .map(async (block: any) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block: any) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
