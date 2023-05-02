const dataTypesList = [
  {
    id: 1,
    type: 'INTEGERS',
    description: `Integers are whole numbers.`,
    examples: [1, -45, 13579],
  },
  {
    id: 2,
    type: 'FLOATS',
    description: `Floats are decimal numbers.`,
    examples: [2.987, 5.0, -34.1],
  },
  {
    id: 3,
    type: 'STRINGS',
    description: `Strings are characters (letters, numbers and symbols) that are put in single ('), double (") or triple quotes (''' or """). For example,`,
    examples: [
      `'hello world'`,
      `"awesome!"`,
      `"""15 June 2020"""`,
      `'''Python is life '''`,
    ],
  },
  {
    id: 4,
    type: 'BOOLEANS',
    description: `Boolean data type has 2 values, True and False. Take note that the T and F are uppercase letters.`,
    examples: [`True, False`],
  },
];

export default dataTypesList;
