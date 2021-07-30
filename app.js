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
    getRandomCustomer: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
 hourlyCookies: function(){
      return this.getRandomCustomer() * this.avg 
  }, 

  }

  for(let i = 0; i < seattle.Hours.length; i++){
        let randCookies = Math.floor(seattle.hourlyCookies());
        seattle.avgCookiesSoldEachHourArray.push(randCookies);
        console.log (seattle.Hours[i], randCookies);}
    
// Push to dom 




// give content

// append to DOM

const bodyElem = document.getElementById('bodyElem')
let ulElem = document.createElement('ul');
bodyElem.appendChild(ulElem);
for( let i = 0; i < seattle.Hours.length; i++){
    let liElem = document.createElement('li')
    liElem.textContent = `${seattle.Hours[i]}: ${seattle.avgCookiesSoldEachHourArray[i]}`;
    ulElem.appendChild(liElem);
}





// let Seattle = document.createElement('li');
// seattle.textContent = 'test';
// unorderedList.appendChild(Seattle);

    