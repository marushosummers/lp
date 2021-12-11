import { Block } from "./Block";
import { Fragment } from "react";

const Blocks = ({blocks}) => {
  return (
      <div>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{Block(block)}</Fragment>
          ))}
        </section>
      </div>
  );
};


export default Blocks;
