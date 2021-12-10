import { NotionText as Text} from "./notionText";
import ContentsRow from "./contentsRow";

export const NotionRenderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight mt-16">
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight mt-8">
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight mt-8">
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      const textArray = value.text.map(item => item.text.content.split('|'))[0];
      if (textArray.length === 2) {
          return (<ContentsRow content={{ key: textArray[0], value: textArray[1]}} />)
      }
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          {caption === "avatar" && <img src={src} className="inline-block w-12 h-12 rounded-full" alt={"avatar"} />}
          {caption !== "avatar" && <img src={src} alt={caption}  />}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    case "table_of_contents":
        console.log(value);
      return <p></p>;
    default:
      return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
        })`;
  }
};
