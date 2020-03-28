import React, { forwardRef } from "react";

const Node = forwardRef(({ data, length, onChange, onBackspace }, ref) => {
  // console.log(data);
  if (data.node === "empty") {
    return (
      <div
        ref={ref}
        style={{
          width: `calc(90vw / ${length}`,
          height: `calc(90vw / ${length}`
        }}
      />
    );
  }

  if (data.node === "number") {
    return (
      <div
        style={{
          textAlign: "right",
          transform: "translateX(-3px)",
          color: "#fd0"
        }}
      >
        {data.number}.
      </div>
    );
  }

  return (
    <input
      ref={ref}
      type="text"
      className="node"
      style={{
        width: `calc(80vw / ${length}`,
        height: `calc(80vw / ${length}`,
        backgroundColor: data.main ? "#fd0" : "ivory"
      }}
      value={data.value}
      onChange={onChange}
      onKeyDown={onBackspace}
    />
  );
});

export default Node;
