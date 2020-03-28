const rawData = [
  {
    index: 1,
    text: "BERNADOTTE",
    offset: 0,
    question: "Temat på nästa års spex"
  },
  { index: 2, text: "SPEX", offset: 2, question: "Ett sorts kul spektakel" },
  {
    index: 3,
    text: "OMSTART",
    offset: 5,
    question: "Frekvent oral åhörarorder"
  },
  {
    index: 4,
    text: "NAPOLEON",
    offset: 0,
    question: "En småvuxen komplex korsikan"
  },
  {
    index: 5,
    text: "AMPEL",
    offset: 0,
    question: "En liten kruka som man hänger blommor i på balkongen"
  },
  { index: 6, text: "D", offset: 0, question: "Ett D" },
  {
    index: 7,
    text: "ÖREBRO",
    offset: 5,
    question: "Fredsbejakande svensk stad"
  },
  { index: 8, text: "T", offset: 0, question: "Ett T" },
  { index: 9, text: "T", offset: 0, question: "Ett T" },
  {
    index: 10,
    text: "ELISABETH",
    offset: 0,
    question: "Världens äldsta monark"
  }
];

const left = rawData.reduce(
  (acc, next) => (next.offset > acc ? next.offset : acc),
  0
);
const right = rawData.reduce(
  (acc, next) =>
    next.text.length - next.offset > acc ? next.text.length - next.offset : acc,
  0
);
const length = 3 + left + right;

const data = rawData
  .map(word => {
    return [
      ...new Array(left - word.offset + 1).fill({
        node: "empty"
      }),
      { node: "number", number: word.index },
      ...word.text.split("").map((letter, letterIndex) => ({
        node: "input",
        letter,
        main: letterIndex === word.offset,
        value: ""
      })),
      ...new Array(right - (word.text.length - word.offset) + 1).fill({
        node: "empty"
      })
    ];
  })
  .flat()
  .map((d, key) => ({ ...d, key }));

export { rawData, data, length };
