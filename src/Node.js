import React, { forwardRef } from "react";

const Node = forwardRef(
  ({ data, length, onChange, onBackspace, finished }, ref) => {
    if (data.node === "number") {
      return (
        <div
          className={`text-gold ${finished && "fadeNode"}`}
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
        className={`node ${finished && !data.main && "fadeNode"}`}
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

export default Node;
