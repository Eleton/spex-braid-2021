const rawData = [
  {
    index: 1,
    text: "BAPTIST",
    offset: 0,
    question: "Frikyrklig som gillar att bada"
  },
  { index: 2, text: "SPEX", offset: 2, question: "Ett sorts kul spektakel" },
  {
    index: 3,
    text: "OMSTART",
    offset: 5,
    question: "Verbal order om upprepning"
  },
  {
    index: 4,
    text: "NAPOLEON",
    offset: 0,
    question: "En komplex korsikan"
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
    question: "Potentiellt konjunktursaboterande hinder mellan USA och Kina"
  },
  {
    index: 8,
    text: "SCOUTER",
    offset: 4,
    question: "Samlar tyglappar men saknar ovvar"
  },
  { index: 9, text: "KONTRABAND", offset: 3, question: "Smuggelgods" },
  {
    index: 10,
    text: "ELIZABETH",
    offset: 0,
    question: "Namnet på en årsrik matriark"
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
const length = left + right + 1;

const mutatedData = rawData.map(word => {
  return [
    { node: "number", number: word.index, offset: word.offset },
    ...word.text.split("").map((letter, letterIndex) => ({
      node: "input",
      letter,
      main: letterIndex === word.offset,
      value: ""
    }))
  ];
});
const data = [[{ node: "number", number: 0, offset: -1 }], ...mutatedData]
  .flat()
  .map((d, key) => ({ ...d, key, column: left - d.offset }));

export { rawData, data, length };
