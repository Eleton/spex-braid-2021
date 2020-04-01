import React, { forwardRef } from "react";

const Node = forwardRef(
  ({ data, length, onChange, onBackspace, finished }, ref) => {
    if (data.node === "number") {
      return (
        <div
          className={classes(["text-gold", "rowNumberWrapper", finished && "fadeNode"])}
          style={{ gridColumn: data.column + 1 }}
        >
          <span className="rowNumber">{data.number}.</span>
        </div>
      );
    }

    return (
      <div
        style={{
          width: `calc(100vw / ${length} - 4px)`,
          height: `calc(100vw / ${length} - 4px)`,
        }}
      >
        <input
          className={classes(["node", finished && !data.main && "fadeNode"])}
          ref={ref}
          type="text"
          style={{ backgroundColor: data.main ? "#fd0" : "ivory" }}
          value={data.value}
          onChange={onChange}
          onKeyDown={onBackspace}
        />
      </div>
    );
  },
);

function classes(classList) {
  return classList.filter(Boolean).join(" ");
}

export default Node;
