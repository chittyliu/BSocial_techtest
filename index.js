splitMoney = input => {
  let payers = [];
  let spenders = [];
  let totals = [];
  input.forEach(e => payers.push(e.Title, e.Payer));
  // [ 'Lunch', 'Tommen', 'Movie', 'Kelly' ]

  input.forEach(e => totals.push(e.Total));
  //   [ 45.5, 50 ]

  let sum = totals.reduce((a, c) => a + c);
  // 95.5

  spenders.filter((v, i) => spenders.indexOf(v) === i);
  // [ 'Kelly', 'Sam', 'Ola', 'Tommen', 'Sandy' ]
  let headcounts = spenders.filter((v, i) => spenders.indexOf(v) === i).length;
  //   5
  let mean = sum / headcounts;
  let spend = [];
  input.filter(x => spend.push(x.Spend));
  //   [ { Kelly: 5.5, Sam: 10, Ola: 15, Tommen: 10, Sandy: 5 },
  //     { Kelly: 10, Sam: 10, Ola: 10, Tommen: 10, Sandy: 10 } ]
  spend.map(e =>
    e.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwneProperty(k)) a[k] = (a[k] || 0) + b[k];
      }
      return a;
    })
  );
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
