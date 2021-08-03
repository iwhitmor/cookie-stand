/* eslint-disable indent */
'use strict';
console.log('Salmon Cookies Company is online');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationOne = {
  storeName: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  aveCookies: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  aveCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
    }
  },
  aveCookiesPerHour: function () {
    for (let j = 0; j < hours.length; j++) {
      let oneHour = Math.floor(this.customersPerHour[j] * this.aveCookies);
      this.totalDailyCookies += oneHour;
      this.cookiesPerHour.push(oneHour);
    }
    console.log('Total daily cookies', this.totalDailyCookies);
  }
};

function custPerHour(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
locationOne.aveCustPerHour();
locationOne.aveCookiesPerHour();


let locationTwo = {
  storeName: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  aveCookies: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  aveCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
    }
  },
  aveCookiesPerHour: function () {
    for (let j = 0; j < hours.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[j] * this.aveCookies));
    }
  }
};
locationTwo.aveCustPerHour();
locationTwo.aveCookiesPerHour();

let locationThree = {
  storeName: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  aveCookies: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  aveCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
    }
  },
  aveCookiesPerHour: function () {
    for (let j = 0; j < hours.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[j] * this.aveCookies));
    }
  }
};
locationThree.aveCustPerHour();
locationThree.aveCookiesPerHour();

let locationFour = {
  storeName: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  aveCookies: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  aveCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
    }
  },
  aveCookiesPerHour: function () {
    for (let j = 0; j < hours.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[j] * this.aveCookies));
    }
  }
};
locationFour.aveCustPerHour();
locationFour.aveCookiesPerHour();

let locationFive = {
  storeName: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  aveCookies: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  aveCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
    }
  },
  aveCookiesPerHour: function () {
    for (let j = 0; j < hours.length; j++) {
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[j] * this.aveCookies));
    }
  }
};
locationFive.aveCustPerHour();
locationFive.aveCookiesPerHour();

let parentElement = document.getElementById('salesData');

let article = document.createElement('article');
console.log('article');
parentElement.appendChild(article);

let h2 = document.createElement('h2');
h2.setAttribute('class', 'storeName');
h2.textContent = locationOne.storeName;
console.log(h2);
article.appendChild(h2);

let cookiesUl = document.createElement('ul');
cookiesUl.setAttribute('class', 'cookiesPerHour');
article.appendChild(cookiesUl);

for (let i = 0; i < locationOne.cookiesPerHour.length; i++) {
  let cookiesLi = document.createElement('li');
  console.log(cookiesLi);
  cookiesLi.textContent = hours[i] + ':' + ' ' + locationOne.cookiesPerHour[i];
  cookiesUl.appendChild(cookiesLi);
}






// render(){;
//   this.calcCookiesPerHour();
//   const unorderedList = document.getElementById('Seattle');
//   for(let i = 0; i < hours.length; i++){
//     let listItem = document.createElement('li');
//     listItem.textContent = hours[i] + ':' + this.cookiesPerHour[i] + 'cookies';
//     unorderedList.appendChild(listItem);
//   }
//   let listItem = document.createElement('li');
//   listItem.textContent = 'Total:' + this.totalDailyCookies + ' cookies'
//   unorderedList.appendChild(listItem);
// }

// const allLocations = [locationOne]

// IFFE

// (function renderAllLocations(){
//   for(let i = 0; i < allLocations.length; i++){
//     allLocations[i].render();
//   }
// })();





