const rawData = [
  {
    index: 1,
    text: "BAPTIST",
    offset: 0,
    question: "Protestant som gillar att bada"
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
    question: "En liten kruka som man hänger blommor i från taket"
  },
  {
    index: 6,
    text: "DESIRE",
    offset: 0,
    question: "Du skriver en låttext på engelska och vill rimma på eld"
  },
  {
    index: 7,
    text: "BLOCKAD",
    offset: 2,
    question: "Konjunktursaboterande filter mellan USA och Kina"
  },
  {
    index: 8,
    text: "SCOUTER",
    offset: 4,
    question: "Samlar lappar men saknar ovvar"
  },
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
const length = 2 + left + right;

const mutatedData = rawData.map(word => {
  return [
    ...new Array(left - word.offset).fill({
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
});
const data = [
  [
    ...new Array(left + 1).fill({
      node: "empty"
    }),
    { node: "number", number: 0 },
    ...new Array(right).fill({
      node: "empty"
    })
  ],
  ...mutatedData
]
  .flat()
  .map((d, key) => ({ ...d, key }));

export { rawData, data, length };
