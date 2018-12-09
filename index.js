splitMoney = input => {
  let payers = [];
  let spenders = [];
  input.forEach(e => payers.push(e.Title, e.Payer));
  input.forEach(e => console.log(e["Title"], e["Payer"]));
  // [ 'Lunch', 'Tommen', 'Movie', 'Kelly' ]
  input.map(x => Object.keys(x.Spend));
  // [ [ 'Kelly', 'Sam', 'Ola', 'Tommen', 'Sandy' ],
  //   [ 'Kelly', 'Sam', 'Ola', 'Tommen', 'Sandy' ] ]
  input.map(x => Object.values(x.Spend));
  //   [ [ 5.5, 10, 15, 10, 5 ], [ 10, 10, 10, 10, 10 ] ]
  input.map(x => Object.keys(x.Spend).map(y => spenders.push(y)));
  //   [
  //     "Kelly",
  //     "Sam",
  //     "Ola",
  //     "Tommen",
  //     "Sandy",
  //     "Kelly",
  //     "Sam",
  //     "Ola",
  //     "Tommen",
  //     "Sandy"
  //   ];
  spenders.filter((v, i) => spenders.indexOf(v) === i);
  // [ 'Kelly', 'Sam', 'Ola', 'Tommen', 'Sandy' ]
  let headcounts = spenders.filter((v, i) => spenders.indexOf(v) === i).length;
};
const input = [
  {
    Title: "Lunch",
    Spend: { Kelly: 5.5, Sam: 10, Ola: 15, Tommen: 10, Sandy: 5 },
    Total: 45.5,
    Payer: "Tommen"
  },
  {
    Title: "Movie",
    Spend: { Kelly: 10, Sam: 10, Ola: 10, Tommen: 10, Sandy: 10 },
    Total: 50,
    Payer: "Kelly"
  }
];
