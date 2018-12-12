splitMoney = () => {
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

  let spenders = [];
  let totals = [];
  let payers = [];

  input.forEach(e => spenders.push(Object.keys(e.Spend)));
  spenders = spenders.filter((v, i) => spenders.indexOf(v) === i).pop();
  // => [ 'Kelly', 'Sam', 'Ola', 'Tommen', 'Sandy' ]
  const headcounts = spenders.filter((v, i) => spenders.indexOf(v) === i)
    .length;
  // => 5

  input.forEach(e => totals.push(e.Total));
  // => [ 45.5, 50 ]
  const sum = totals.reduce((a, c) => a + c);
  // => 95.5

  for (var i = 0; i < input.length; i++) {
    payers.push(
      Object.assign({ payer: input[i].Payer, total: input[i].Total })
    );
  }
  // => [ { payer: 'Tommen', total: 45.5 },
  //      { payer: 'Kelly', total: 50 } ]

  const mean = sum / headcounts;
  // => 19.1
  let spend = [];
  input.filter(x => spend.push(x.Spend));
  // => [ { Kelly: 5.5, Sam: 10, Ola: 15, Tommen: 10, Sandy: 5 },
  //      { Kelly: 10, Sam: 10, Ola: 10, Tommen: 10, Sandy: 10 } ]

  var temp = {};
  var obj = null;
  var result = [];
  for (var i = 0; i < spend.length; i++) {
    obj = spend[i];
    if (!temp[obj.Kelly]) {
      temp[obj.Kelly] = obj;
      temp[obj.Sam] = obj;
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
  let spendPP = result.pop();
  // => { Kelly: 15.5, Sam: 20, Ola: 25, Tommen: 20, Sandy: 15 }
  let lenders = [];
  let loaners;
  payers.forEach(e => {
    if (e.payer === Object.values(e)[0]) {
      lenders.push(
        Object.assign({
          lender: Object.values(e)[0],
          total: Object.values(e)[1] - spendPP[Object.values(e)[0]]
        })
      );
    }
  });
  // [ { lender: 'Tommen', total: 25.5 },
  //   { lender: 'Kelly', total: 34.5 } ]

  spenders
    .filter(x => x !== "Kelly" && x !== "Tommen")
    .forEach(e => {
      loaners.push(Object.assign({ loaner: e, total: spendPP[e] }));
    });
  // [ { loaner: 'Sam', total: 20 },
  //   { loaner: 'Ola', total: 25 },
  //   { loaner: 'Sandy', total: 15 } ]
};
