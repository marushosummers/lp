import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Profile from '../components/profile'
import Career from '../components/carrer'
import Qualifications from '../components/qualifications'
import LT from '../components/LT'
import Articles from '../components/articles'
import Products from '../components/products'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>marusho.io</title>
        </Head>
        <Container>
          <Intro />
          <Profile />
          <Career />
          <Qualifications />
          <LT />
          <Articles />
          <Products />
        </Container>
      </Layout>
    </>
  )
}

export default Index
