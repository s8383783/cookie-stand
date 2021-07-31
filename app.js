'use strict'

console.log('Hi world');

// Store Object

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    avgCookiesSoldEachHourArray: [],
    Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
    dailyTotal: 0,
    // Get a random number 
    getRandomCustomer: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // Calculate cookies for each hour of the day by multiplying randomcustomer by the avg. 
 hourlyCookies: function(){
      return this.getRandomCustomer() * this.avg 
  }, 
}

// Loop through hours array, push answers from hourlyCookies function to the avgCookiesSoldEachHour array
  for(let i = 0; i < seattle.Hours.length; i++){
        let randCookies = Math.floor(seattle.hourlyCookies());
        seattle.avgCookiesSoldEachHourArray.push(randCookies);
        console.log (seattle.Hours[i], randCookies);
        // add total
      this.dailyTotal = this.dailyTotal + randCookies}
  

        // renders list to the page

const bodyElem = document.getElementById('bodyElem')
let ulElem = document.createElement('ul');
bodyElem.appendChild(ulElem);
for( let i = 0; i < seattle.Hours.length; i++){
    let liElem = document.createElement('li')
    liElem.textContent = `${seattle.Hours[i]}: ${seattle.avgCookiesSoldEachHourArray[i]}`;
    ulElem.appendChild(liElem);
}
//append total to the unordered list 
div1.appendChild(ulElem)


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  avgCookiesSoldEachHourArray: [],
  Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
hourlyCookies: function(){
    return this.getRandomCustomer() * this.avg 
}, 

}

for(let i = 0; i < tokyo.Hours.length; i++){
      let randCookies2 = Math.floor(tokyo.hourlyCookies());
      tokyo.avgCookiesSoldEachHourArray.push(randCookies2);
      console.log (tokyo.Hours[i], randCookies2);}

// const bodyElem = document.getElementById('bodyElem')
let ulElemTokyo = document.createElement('ul');
bodyElem.appendChild(ulElemTokyo);
for( let i = 0; i < tokyo.Hours.length; i++){
  let liElemTokyo = document.createElement('li')
  liElemTokyo.textContent = `${tokyo.Hours[i]}: ${tokyo.avgCookiesSoldEachHourArray[i]}`;
  ulElemTokyo.appendChild(liElemTokyo);
}
div2.appendChild(ulElemTokyo)

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  avgCookiesSoldEachHourArray: [],
  Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
hourlyCookies: function(){
    return this.getRandomCustomer() * this.avg 
}, 

}

for(let i = 0; i < dubai.Hours.length; i++){
      let randCookies3 = Math.floor(dubai.hourlyCookies());
      dubai.avgCookiesSoldEachHourArray.push(randCookies3);
      console.log (dubai.Hours[i], randCookies3);}

// const bodyElem = document.getElementById('bodyElem')
let ulElemDubai = document.createElement('ul');
bodyElem.appendChild(ulElemDubai);
for( let i = 0; i < dubai.Hours.length; i++){
  let liElemDubai = document.createElement('li')
  liElemDubai.textContent = `${dubai.Hours[i]}: ${dubai.avgCookiesSoldEachHourArray[i]}`;
  ulElemDubai.appendChild(liElemDubai);
}
div3.appendChild(ulElemDubai)

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  avgCookiesSoldEachHourArray: [],
  Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
hourlyCookies: function(){
    return this.getRandomCustomer() * this.avg 
}, 

}

for(let i = 0; i < paris.Hours.length; i++){
      let randCookies4 = Math.floor(paris.hourlyCookies());
      paris.avgCookiesSoldEachHourArray.push(randCookies4);
      console.log (paris.Hours[i], randCookies4);}

// const bodyElem = document.getElementById('bodyElem')
let ulElemParis = document.createElement('ul');
bodyElem.appendChild(ulElemParis);

for( let i = 0; i < paris.Hours.length; i++){
  let liElemParis = document.createElement('li')
  liElemParis.textContent = `${paris.Hours[i]}: ${paris.avgCookiesSoldEachHourArray[i]}`;
  ulElemParis.appendChild(liElemParis);
}

div4.appendChild(ulElemParis)

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  avgCookiesSoldEachHourArray: [],
  Hours: ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm'],
  dailyTotal: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
hourlyCookies: function(){
    return this.getRandomCustomer() * this.avg 
}, 

}

for(let i = 0; i < lima.Hours.length; i++){
      let randCookies5 = Math.floor(lima.hourlyCookies());
      lima.avgCookiesSoldEachHourArray.push(randCookies5);
      console.log (lima.Hours[i], randCookies5);}

// const bodyElem = document.getElementById('bodyElem')
let ulElemLima = document.createElement('ul');
bodyElem.appendChild(ulElemLima);
for( let i = 0; i < lima.Hours.length; i++){
  let liElemLima = document.createElement('li')
  liElemLima.textContent = `${lima.Hours[i]}: ${lima.avgCookiesSoldEachHourArray[i]}`;
  ulElemLima.appendChild(liElemLima);
}
div5.appendChild(ulElemLima)






    