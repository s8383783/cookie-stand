'use strict'

let storeArray = [];
let grandTotal = 0;


function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm', '6 pm', '7 pm'];
  this.dailyTotal = 0;
  this.hourlyCookies = [];
  storeArray.push(this)

  this.grandTotal
};

Store.prototype.getHourlycookies = function () {
  for (let i = 0; i < this.hours.length; i++) {
    let Randcookies = (Math.round(Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
    Randcookies = (Math.round(Randcookies));
    this.hourlyCookies.push(Randcookies);
  }
}
Store.prototype.getDailytotal = function () {
  for (let i = 0; i < this.hours.length; i++) {
    this.dailyTotal += this.hourlyCookies[i]
  }
  grandTotal += this.dailyTotal;
  console.log(grandTotal);
};


let seattle = new Store('Seattle', 23, 65, 6.5);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


// Seattle
seattle.getHourlycookies();
seattle.getDailytotal();
// Tokyo
tokyo.getHourlycookies();
tokyo.getDailytotal();
// Dubai 
dubai.getHourlycookies();
dubai.getDailytotal();
// Paris
paris.getHourlycookies();
paris.getDailytotal();
// Lima
lima.getHourlycookies();
lima.getDailytotal();

const salesTable = document.getElementById('tableCookie')
let thead = document.createElement('thead');
const salesContent = document.createElement('tbody');
let tfoot = document.createElement('tfoot')

Store.prototype.renderTable = function () {
  salesTable.appendChild(salesContent)
  let trName = document.createElement('tr');
  salesContent.appendChild(trName);
  let tdName = document.createElement('td')
  tdName.textContent = this.name;
  trName.appendChild(tdName);

  for (let i = 0; i < this.hours.length; i++) {
    let tdCookies = document.createElement('td');
    tdCookies.textContent = this.hourlyCookies[i];
    trName.appendChild(tdCookies)
  }
  let tdCookiesTotals = document.createElement('td');
  tdCookiesTotals.textContent = this.dailyTotal;
  trName.appendChild(tdCookiesTotals);

};

Store.prototype.renderHours = function () {

  salesTable.appendChild(thead);
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  for (let i = -1; i < this.hours.length; i++) {
    let tdHours = document.createElement('td');
    tdHours.textContent = this.hours[i];
    tr.appendChild(tdHours);
  }
  let trTotal = document.createElement('td');
  trTotal.textContent = 'Total';
  tr.appendChild(trTotal);

};

function hourlygetTotal() {

  salesTable.appendChild(tfoot)
  let trTotal = document.createElement('tr');
  tfoot.appendChild(trTotal);
  let td = document.createElement('td');
  td.textContent = ' Hourly Total';
  trTotal.appendChild(td);
  for (let i = 0; i < seattle.hours.length; i++) {
    let total = 0;
    for (let j = 0; j < storeArray.length; j++) {
      total += storeArray[j].hourlyCookies[i];
    }

    let trTotaldata = document.createElement('td');
    trTotaldata.textContent = total;
    trTotal.appendChild(trTotaldata);

  }
  let tdGrandTotal = document.createElement('td')
  tdGrandTotal.textContent = grandTotal;
  trTotal.appendChild(tdGrandTotal);

}


seattle.renderHours();
seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
hourlygetTotal();

let myForm = document.querySelector('form')

function handleSubmit(event) {
  event.preventDefault();
  let storeName = event.target.name.value;
  let minimum = parseInt(event.target.minimum.value);
  let maximum = parseInt(event.target.maximum.value);
  let average = parseInt(event.target.average.value);

  let AddedShop = new Store(storeName, minimum, maximum, average);

  console.log(storeArray);

  tfoot.innerHTML = '';


  AddedShop.getHourlycookies();
  AddedShop.getDailytotal();
  AddedShop.renderTable();
  hourlygetTotal();

}

myForm.addEventListener('submit', handleSubmit);

































