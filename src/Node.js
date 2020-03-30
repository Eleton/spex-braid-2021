import React, { forwardRef } from "react";

const Node = forwardRef(
  ({ data, length, onChange, onBackspace, finished }, ref) => {
    if (data.node === "number") {
      return (
        <div
          className={classes(["text-gold", finished && "fadeNode"])}
          style={{
            gridColumn: data.column + 1,
            verticalAlign: "bottom",
          }}
        >
          <span className="rowNumber">{data.number}.</span>
        </div>
      );
    }

    return (
      <input
        className={classes(["node", finished && !data.main && "fadeNode"])}
        ref={ref}
        type="text"
        style={{
          width: `calc(90vw / ${length}`,
          height: `calc(90vw / ${length}`,
          backgroundColor: data.main ? "#fd0" : "ivory",
        }}
        value={data.value}
        onChange={onChange}
        onKeyDown={onBackspace}
      />
    );
  },
);

function classes(classList) {
  return classList.filter(Boolean).join(" ");
}

export default Node;
