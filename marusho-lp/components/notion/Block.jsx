import { Text} from "./Text";
import Table from "../table";

export const Block = (block) => {
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
        <div className="grid grid-cols-12 items-center mt-8 mb-6">
          <h1 className="col-start-2 col-span-10 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
            <Text text={value.text} />
          </h1>
        </div>
      );
    case "heading_2":
      return (
        <div className="grid grid-cols-12 items-center mt-6 mb-4">
          <h2 className="col-start-2 col-span-10 text-2xl md:text-2xl font-bold tracking-tighter leading-tight">
            <Text text={value.text} />
          </h2>
        </div>
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
          return (<Table content={{ key: textArray[0], value: textArray[1]}} />)
      }
      return (
        <div className="grid grid-cols-12 items-center">
          <li className="col-start-2 col-span-10 text-gray-700 px-4 py-1 text-sm tabular-nums">
            <Text text={value.text} />
          </li>
        </div>
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
            <Fragment key={block.id}>{Block(block)}</Fragment>
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
