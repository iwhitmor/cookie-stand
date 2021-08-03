'use strict';
console.log('Salmon Cookies Company is online');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(storeName, minCustomers, maxCustomers, aveCookies, customersPerHour, cookiesPerHour, totalDailyCookies) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveCookies = aveCookies;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalDailyCookies = totalDailyCookies;
}

Location.prototype.aveCustPerHour = function () {
  for (let j = 0; j < hours.length; j++) {
    this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
  }
};

Location.prototype.aveCookiesPerHour = function () {
  for (let j = 0; j < hours.length; j++) {
    let oneHour = Math.floor(this.customersPerHour[j] * this.aveCookies);
    this.totalDailyCookies += oneHour;
    this.cookiesPerHour.push(oneHour);
  }
  console.log('Total daily cookies ' + this.storeName, this.totalDailyCookies);
};

function custPerHour(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let locationOne = new Location('Seattle', 23, 65, 6.3, [], [], 0);
locationOne.aveCustPerHour();
locationOne.aveCookiesPerHour();


