const CHIP_VALUES = [1, 5, 10, 20, 50, 100, 500, 1000, 2000, 5000];

const MAX_BET = 1000000;

const NUMBERS = {
  0: ["n0", "sq0", "sq12", "ho0", "ho12", "ho24"],
  1: ["st0", "n1", "r", "s", "o", "z1", "x1", "ve12", "ho24", "ho25", "sq13"],
  2: [
    "st0",
    "n2",
    "b",
    "s",
    "e",
    "z1",
    "x2",
    "ve0",
    "ve12",
    "ho12",
    "ho13",
    "sq1",
    "sq13"
  ],
  3: ["st0", "n3", "r", "s", "o", "z1", "x3", "ve0", "ho0", "ho1", "sq1"],
  4: [
    "st1",
    "n4",
    "b",
    "s",
    "e",
    "z1",
    "x1",
    "ve13",
    "ho25",
    "ho26",
    "sq13",
    "sq14"
  ],
  5: [
    "st1",
    "n5",
    "r",
    "s",
    "o",
    "z1",
    "x2",
    "ve1",
    "ve13",
    "ho14",
    "ho13",
    "sq1",
    "sq2",
    "sq13",
    "sq14"
  ],
  6: [
    "st1",
    "n6",
    "b",
    "s",
    "e",
    "z1",
    "x3",
    "ve1",
    "ho1",
    "ho2",
    "sq1",
    "sq2"
  ],
  7: [
    "st2",
    "n7",
    "r",
    "s",
    "o",
    "z1",
    "x1",
    "ve14",
    "ho26",
    "ho27",
    "sq14",
    "sq15"
  ],
  8: [
    "st2",
    "n8",
    "b",
    "s",
    "e",
    "z1",
    "x2",
    "ve2",
    "ve14",
    "ho14",
    "ho15",
    "sq2",
    "sq3",
    "sq14",
    "sq15"
  ],
  9: [
    "st2",
    "n9",
    "r",
    "s",
    "o",
    "z1",
    "x3",
    "ve2",
    "ho2",
    "ho3",
    "sq2",
    "sq3"
  ],
  10: [
    "st3",
    "n10",
    "b",
    "s",
    "e",
    "z1",
    "x1",
    "ve15",
    "ho17",
    "ho28",
    "sq15",
    "sq16"
  ],
  11: [
    "st3",
    "n11",
    "b",
    "s",
    "o",
    "z1",
    "x2",
    "ve3",
    "ve15",
    "ho15",
    "ho16",
    "sq3",
    "sq4",
    "sq15",
    "sq16"
  ],
  12: [
    "st3",
    "n12",
    "r",
    "s",
    "e",
    "z1",
    "x3",
    "ve3",
    "ho3",
    "ho4",
    "sq3",
    "sq4"
  ],
  13: [
    "st4",
    "n13",
    "b",
    "s",
    "o",
    "z2",
    "x1",
    "ve16",
    "ho28",
    "ho29",
    "sq16",
    "sq17"
  ],
  14: [
    "st4",
    "n14",
    "r",
    "s",
    "e",
    "z2",
    "x2",
    "ve4",
    "ve16",
    "ho16",
    "ho17",
    "sq4",
    "sq5",
    "sq16",
    "sq17"
  ],
  15: [
    "st4",
    "n15",
    "b",
    "s",
    "o",
    "z2",
    "x3",
    "ve4",
    "ho4",
    "ho5",
    "sq4",
    "sq5"
  ],
  16: [
    "st5",
    "n16",
    "r",
    "s",
    "e",
    "z2",
    "x1",
    "ve17",
    "ho29",
    "ho30",
    "sq17",
    "sq18"
  ],
  17: [
    "st5",
    "n17",
    "b",
    "s",
    "o",
    "z2",
    "x2",
    "ve17",
    "ve5",
    "ho17",
    "ho18",
    "sq5",
    "sq6",
    "sq17",
    "sq18"
  ],
  18: [
    "st5",
    "n18",
    "r",
    "s",
    "e",
    "z2",
    "x3",
    "ve5",
    "ho5",
    "ho6",
    "sq5",
    "sq6"
  ],
  19: [
    "st6",
    "n19",
    "r",
    "g",
    "o",
    "z2",
    "x1",
    "ve18",
    "ho30",
    "ho31",
    "sq18",
    "sq19"
  ],
  20: [
    "st6",
    "n20",
    "b",
    "g",
    "e",
    "z2",
    "x2",
    "ve6",
    "ve18",
    "ho18",
    "ho19",
    "sq6",
    "sq7",
    "sq18",
    "sq19"
  ],
  21: [
    "st6",
    "n21",
    "r",
    "g",
    "o",
    "z2",
    "x3",
    "ve6",
    "ho6",
    "ho7",
    "sq6",
    "sq7"
  ],
  22: [
    "st7",
    "n22",
    "b",
    "g",
    "e",
    "z2",
    "x1",
    "ve19",
    "ho31",
    "ho32",
    "sq19",
    "sq20"
  ],
  23: [
    "st7",
    "n23",
    "r",
    "g",
    "o",
    "z2",
    "x2",
    "ve7",
    "ve19",
    "ho19",
    "ho20",
    "sq7",
    "sq8",
    "sq19",
    "sq20"
  ],
  24: [
    "st7",
    "n24",
    "b",
    "g",
    "e",
    "z2",
    "x3",
    "ve7",
    "ho7",
    "ho8",
    "sq7",
    "sq8"
  ],
  25: [
    "st8",
    "n25",
    "r",
    "g",
    "o",
    "z3",
    "x1",
    "ve20",
    "ho32",
    "ho33",
    "sq20",
    "sq21"
  ],
  26: [
    "st8",
    "n26",
    "b",
    "g",
    "e",
    "z3",
    "x2",
    "ve8",
    "ve20",
    "ho20",
    "ho21",
    "sq8",
    "sq9",
    "sq20",
    "sq21"
  ],
  27: [
    "st8",
    "n27",
    "r",
    "g",
    "o",
    "z3",
    "x3",
    "ve8",
    "ho8",
    "ho9",
    "sq8",
    "sq9"
  ],
  28: [
    "st9",
    "n28",
    "b",
    "g",
    "e",
    "z3",
    "x1",
    "ve21",
    "ho33",
    "ho34",
    "sq21",
    "sq22"
  ],
  29: [
    "st9",
    "n29",
    "b",
    "g",
    "o",
    "z3",
    "x2",
    "ve9",
    "ve21",
    "ho21",
    "ho22",
    "sq9",
    "sq10",
    "sq21",
    "sq22"
  ],
  30: [
    "st9",
    "n30",
    "r",
    "g",
    "e",
    "z3",
    "x3",
    "ve9",
    "ho9",
    "ho10",
    "sq9",
    "sq10"
  ],
  31: [
    "st10",
    "n31",
    "b",
    "g",
    "o",
    "z3",
    "x1",
    "ve22",
    "ho34",
    "ho35",
    "sq22",
    "sq23"
  ],
  32: [
    "st10",
    "n32",
    "r",
    "g",
    "e",
    "z3",
    "x2",
    "ve10",
    "ve22",
    "ho22",
    "ho23",
    "sq10",
    "sq11",
    "sq22",
    "sq23"
  ],
  33: [
    "st10",
    "n33",
    "b",
    "g",
    "o",
    "z3",
    "x3",
    "ve10",
    "ho10",
    "ho11",
    "sq10",
    "sq11"
  ],
  34: ["st11", "n34", "r", "g", "e", "z3", "x1", "ve23", "ho35", "sq23"],
  35: [
    "st11",
    "n35",
    "b",
    "g",
    "o",
    "z3",
    "x2",
    "ve11",
    "ve23",
    "ho23",
    "sq11",
    "sq23"
  ],
  36: ["st11", "n36", "r", "g", "e", "z3", "x3", "ve11", "ho11", "sq11"]
};

const WHEEL_NUMBERS = [
  0,
  32,
  15,
  19,
  4,
  21,
  2,
  25,
  17,
  34,
  6,
  27,
  13,
  36,
  11,
  30,
  8,
  23,
  10,
  5,
  24,
  16,
  33,
  1,
  20,
  14,
  31,
  9,
  22,
  18,
  29,
  7,
  28,
  12,
  35,
  3,
  26
];

// return profit for a number based on a bet
const calculateProfit = (n, bet) => {
  const defs = NUMBERS[n] || [];
  const profit = {};
  for (let key in bet) {
    if (defs.includes(key)) {
      const amount = bet[key];
      if (key.match(/st\d{1,2}/)) {
        profit[key] = amount * 12;
      } else if (key.match(/ve\d{1,2}/) || key.match(/ho\d{1,2}/)) {
        profit[key] = amount * 18;
      } else if (key.match(/sq\d{1,2}/)) {
        if (key === "sq0" || key === "sq12") profit[key] = amount * 12;
        else profit[key] = amount * 9;
      } else if (key.match(/n\d{1,2}/)) {
        profit[key] = amount * 36;
      } else if (key.match(/[xz]\d/)) {
        profit[key] = amount * 3;
      } else if (key.match(/[rbsgeo]/)) {
        profit[key] = amount * 2;
      }
    }
  }
  return profit;
};

const black = n => NUMBERS[n].includes("b");

const sumBet = bet => {
  let sum = 0;
  for (let key in bet) {
    sum += bet[key].reduce ? bet[key].reduce((a, b) => a + b, 0) : bet[key];
  }
  return Math.round(sum);
};

const normalizeBet = bet => {
  let normBet = {};
  for (let key in bet) {
    normBet[key] = bet[key].reduce((a, b) => a + b, 0);
  }
  return normBet;
};

const checkBet = bet => {
  for (let key in bet) {
    if (Number(bet[key]) <= 0) {
      throw new Error("bet error");
    }
    if (isNaN(Number(bet[key]))) {
      throw new Error("bet error");
    }
  }
};

module.exports = {
  MAX_BET,
  CHIP_VALUES,
  NUMBERS,
  WHEEL_NUMBERS,
  black,
  sumBet,
  normalizeBet,
  calculateProfit,
  checkBet
};
