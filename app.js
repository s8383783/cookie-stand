'use strict'

console.log('Hi world');

// Store Object

// make Store CONSTRUCTOR to be used for each store, include all information that will be on all store objects
// What to expect when arugments are put in
let storeArray= [];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'];
  this.dailyTotal = 0;
  this.hourlyCookies = [];
  storeArray.push(this)
};

  
  // Add functions that were in the prior object by the format lines 25-28

  // getRandomCustomer: function() {
  //   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  // };

  Store.prototype.getHourlycookies = function() {
  for (let i=0; i < this.hours.length; i++) {
    let Randcookies = (Math.round(Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
    Randcookies = (Math.round(Randcookies));
    console.log(Randcookies)
    this.hourlyCookies.push(Randcookies);
}
}
Store.prototype.getDailytotal = function() {
  for (let i=0; i < this.hours.length; i++) {
    this.dailyTotal += this.hourlyCookies[i] 
  }
    };

      // adding stores and their specific information to the constructor

let seattle = new Store('Seattle', 23, 65, 6.5);
let tokyo = new Store('Tokyo', 3, 24, 1.2 );
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

console.log(seattle)
console.log(tokyo)
console.log(dubai)
console.log(paris)
console.log(lima)

Store.prototype.render = function() {

  const salesContainer = document.getElementById('Sales');
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  salesContainer.appendChild(h2);
  let ul = document.createElement('ul');
  salesContainer.appendChild(ul);
  for( let i = 0; i < this.hours.length; i++){
    let li = document.createElement('li')
    li.textContent = `${this.hours[i]}: ${this.hourlyCookies[i]} cookies sold`;
    ul.appendChild(li);
  };
}
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const salesTable = document.querySelector('tbody');

Store.prototype.renderTable = function() {

  let tr = document.createElement('tr');
  salesTable.appendChild(tr);


  let tr2 = document.createElement('tr');
   salesTable.appendChild(tr2);
   let td = document.createElement('td')
   this.textContent = this.name;
   tr.appendChild(td);

  for(let i=0; i < this.hours.length; i++) {
    let tdCookies = document.createElement('td');
    tdCookies.textContent = this.hourlyCookies[i];
    tr2.appendChild(tdCookies);

  }
}

  Store.prototype.renderHours = function() {
    let tr = document.createElement('tr');
  salesTable.appendChild(tr);
  for(let i=0; i < this.hours.length; i++) {
      let tdHours = document.createElement('td');
      tdHours.textContent = this.hours[i];
      tr.appendChild(tdHours);
    }

  }


seattle.renderHours(); 
  seattle.renderTable();
  tokyo.renderTable();

  // for (let i = 0; i < this.like.length; i++) {
  //   let td = document.createElement('td');
  //   td.textContent = this.like[i];
  //   tr.appendChild(td);



// let seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     avgCookiesSoldEachHourArray: [],
//     Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
//     dailyTotal: 0,
//     // Get a random number 
//     getRandomCustomer: function() {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     // Calculate cookies for each hour of the day by multiplying randomcustomer by the avg. 
//  hourlyCookies: function(){
//       return this.getRandomCustomer() * this.avg 
//   }, 
// }

// // Loop through hours array, push answers from hourlyCookies function to the avgCookiesSoldEachHour array
//   for(let i = 0; i < seattle.Hours.length; i++){
//         let randCookies = Math.floor(seattle.hourlyCookies());
//         seattle.avgCookiesSoldEachHourArray.push(randCookies);
//         console.log (seattle.Hours[i], randCookies);
//         // add total
//       this.dailyTotal = this.dailyTotal + randCookies}
  

//         // renders list to the page 

// const bodyElem = document.getElementById('bodyElem')
// let ulElem = document.createElement('ul');
// bodyElem.appendChild(ulElem);
// for( let i = 0; i < seattle.Hours.length; i++){
//     let liElem = document.createElement('li')
//     liElem.textContent = `${seattle.Hours[i]}: ${seattle.avgCookiesSoldEachHourArray[i]}`;
//     ulElem.appendChild(liElem);
// }
// //append total to the unordered list 
// div1.appendChild(ulElem)


// // let tokyo = {
// //   name: 'Tokyo',
// //   min: 3,
// //   max: 24,
// //   avg: 1.2,
// //   avgCookiesSoldEachHourArray: [],
// //   Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
// //   dailyTotal: 0,
// //   getRandomCustomer: function() {
// //     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// //   },
// // hourlyCookies: function(){
// //     return this.getRandomCustomer() * this.avg 
// // }, 

// // }

// // for(let i = 0; i < tokyo.Hours.length; i++){
// //       let randCookies2 = Math.floor(tokyo.hourlyCookies());
// //       tokyo.avgCookiesSoldEachHourArray.push(randCookies2);
// //       console.log (tokyo.Hours[i], randCookies2);}

// // // const bodyElem = document.getElementById('bodyElem')
// // let ulElemTokyo = document.createElement('ul');
// // bodyElem.appendChild(ulElemTokyo);
// // for( let i = 0; i < tokyo.Hours.length; i++){
// //   let liElemTokyo = document.createElement('li')
// //   liElemTokyo.textContent = `${tokyo.Hours[i]}: ${tokyo.avgCookiesSoldEachHourArray[i]}`;
// //   ulElemTokyo.appendChild(liElemTokyo);
// // }
// // div2.appendChild(ulElemTokyo)

// // let dubai = {
// //   name: 'Dubai',
// //   min: 11,
// //   max: 38,
// //   avg: 3.7,
// //   avgCookiesSoldEachHourArray: [],
// //   Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
// //   dailyTotal: 0,
// //   getRandomCustomer: function() {
// //     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// //   },
// // hourlyCookies: function(){
// //     return this.getRandomCustomer() * this.avg 
// // }, 

// // }

// for(let i = 0; i < dubai.Hours.length; i++){
//       let randCookies3 = Math.floor(dubai.hourlyCookies());
//       dubai.avgCookiesSoldEachHourArray.push(randCookies3);
//       console.log (dubai.Hours[i], randCookies3);}

// // const bodyElem = document.getElementById('bodyElem')
// let ulElemDubai = document.createElement('ul');
// bodyElem.appendChild(ulElemDubai);
// for( let i = 0; i < dubai.Hours.length; i++){
//   let liElemDubai = document.createElement('li')
//   liElemDubai.textContent = `${dubai.Hours[i]}: ${dubai.avgCookiesSoldEachHourArray[i]}`;
//   ulElemDubai.appendChild(liElemDubai);
// }
// div3.appendChild(ulElemDubai)

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   avgCookiesSoldEachHourArray: [],
//   Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
//   dailyTotal: 0,
//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
// hourlyCookies: function(){
//     return this.getRandomCustomer() * this.avg 
// }, 

// }

// for(let i = 0; i < paris.Hours.length; i++){
//       let randCookies4 = Math.floor(paris.hourlyCookies());
//       paris.avgCookiesSoldEachHourArray.push(randCookies4);
//       console.log (paris.Hours[i], randCookies4);}

// // const bodyElem = document.getElementById('bodyElem')
// let ulElemParis = document.createElement('ul');
// bodyElem.appendChild(ulElemParis);

// for( let i = 0; i < paris.Hours.length; i++){
//   let liElemParis = document.createElement('li')
//   liElemParis.textContent = `${paris.Hours[i]}: ${paris.avgCookiesSoldEachHourArray[i]}`;
//   ulElemParis.appendChild(liElemParis);
// }

// div4.appendChild(ulElemParis)

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   avgCookiesSoldEachHourArray: [],
//   Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
//   dailyTotal: 0,
//   getRandomCustomer: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
// hourlyCookies: function(){
//     return this.getRandomCustomer() * this.avg 
// }, 

// }

// for(let i = 0; i < lima.Hours.length; i++){
//       let randCookies5 = Math.floor(lima.hourlyCookies());
//       lima.avgCookiesSoldEachHourArray.push(randCookies5);
//       console.log (lima.Hours[i], randCookies5);}

// // const bodyElem = document.getElementById('bodyElem')
// let ulElemLima = document.createElement('ul');
// bodyElem.appendChild(ulElemLima);
// for( let i = 0; i < lima.Hours.length; i++){
//   let liElemLima = document.createElement('li')
//   liElemLima.textContent = `${lima.Hours[i]}: ${lima.avgCookiesSoldEachHourArray[i]}`;
//   ulElemLima.appendChild(liElemLima);
// }
// div5.appendChild(ulElemLima)






    