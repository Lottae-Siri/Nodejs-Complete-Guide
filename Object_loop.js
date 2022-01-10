var myArray = [
  { "Emiten_ID": 'SMBR', "Lot": 500, "Price": 2500, "time": '2022-12-01' },
  { "Emiten_ID": 'SMBR', "Lot": 300, "Price": 2200, "time": '2022-12-02' },
  { "Emiten_ID": 'ELSA', "Lot": 500, "Price": 1000, "time": '2022-12-01' },
  { "Emiten_ID": 'SMBR', "Lot": 100, "Price": 3000, "time": '2022-12-02' },
  { "Emiten_ID": 'BI', "Lot": 300, "Price": 500, "time": '2022-12-01' },
  { "Emiten_ID": 'AAI', "Lot": 200, "Price": 1300, "time": '2022-12-01' },
  { "Emiten_ID": 'BTB', "Lot": 700, "Price": 2900, "time": '2022-12-01' },
  { "Emiten_ID": 'BI', "Lot": 150, "Price": 200, "time": '2022-12-02' },
  { "Emiten_ID": 'AAI', "Lot": 200, "Price": 600, "time": '2022-12-01' },
];

var myArray2 = [
  { "Emiten_ID": 'SMBR', "Lot": 500, "Price": 2500, "time": '2022-12-01' },
  { "Emiten_ID": 'SMBR', "Lot": 300, "Price": 2200, "time": '2022-12-02' },
  { "Emiten_ID": 'SMBR', "Lot": 100, "Price": 3000, "time": '2022-12-02' },
  { "Emiten_ID": 'SMBR', "Lot": 300, "Price": 2200, "time": '2022-12-03' },
];


var temp = new Map();
for (const item of myArray2) {
  var e = temp.get(item.Emiten_ID)
  var timeTemp
  console.log(e)
  if (e) {
    e.Lot = timeTemp === item.time ? e.Lot : e.Lot + item.Lot
    e.maxPrice = Math.max(e.Price, item.Price);
    e.time = item.time
    timeTemp = item.time

  } else {
    temp.set(item.Emiten_ID, { Emiten_ID: item.Emiten_ID, Lot: item.Lot, Price: item.Price })
    timeTemp = item.time
  }
}

// const result = Array.from(temp.values());

// console.log(result[0])