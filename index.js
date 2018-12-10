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

  let mean = sum / headcounts; // pp
  let spend = [];
  input.filter(x => spend.push(x.Spend));
  // [ { Kelly: 5.5, Sam: 10, Ola: 15, Tommen: 10, Sandy: 5 },
  //   { Kelly: 10, Sam: 10, Ola: 10, Tommen: 10, Sandy: 10 } ]

  var temp = {};
  var obj = null;
  var result = [];
  for (var i = 0; i < spend.length; i++) {
    obj = spend[i];
    if (!temp[obj.Kelly]) {
      temp[obj.Kelly] = obj;
    } else {
      temp[obj.Kelly].Kelly += obj.Kelly;
      temp[obj.Kelly].Sam += obj.Sam;
      temp[obj.Kelly].Ola += obj.Ola;
      temp[obj.Kelly].Tommen += obj.Tommen;
      temp[obj.Kelly].Sandy += obj.Sandy;
    }
  }
  for (var prop in temp) {
    result.push(temp[prop]);
  }
  const total = result.pop();

  const kelly = Number((mean - (mean - total.Kelly)).toFixed(2));
  const sam = Number((mean - (mean - total.Sam)).toFixed(2));
  const ola = Number((mean - (mean - total.Ola)).toFixed(2));
  const tommen = Number((mean - (mean - total.Tommen)).toFixed(2));
  const sandy = Number((mean - (mean - total.Sandy)).toFixed(2));

  const payment1 = totals[0];
  const payment2 = totals[1];
  const payer1 = payment1 - tommen;
  const payer2 = payment2 - kelly;
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
