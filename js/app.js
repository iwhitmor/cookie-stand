/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
'use strict';
console.log('Pats Salmon Cookies is online');

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

 function makeFooterRow () {
  let parentElement = document.getElementById('storeLocationTable');
  let totalRow = document.createElement('tr');
  let totalRowHeader = document.createElement('th');
  totalRowHeader.textContent = 'Totals';
  totalRow.appendChild(totalRowHeader);
  parentElement.appendChild(totalRow);
  for(let i = 0; i < hours.length; i++){
    let hourlyTotals = 0;
    for(let j = 0; j < locations.length; j++){
      hourlyTotals += locations[j].cookiesPerHour[i];
    }
    totalRowHeader = document.createElement('th');
    totalRowHeader.textContent = hourlyTotals;
    totalRow.appendChild(totalRowHeader);
   
  }
  let totalOfTotals = document.createElement('th');
  totalOfTotals.textContent = finalTotal;
  totalRow.appendChild(totalOfTotals);
}
let finalTotal = 0;


function custPerHour(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Location.prototype.render = function () {
  let parentElement = document.getElementById('salesData');
  console.log(parentElement);

  let article = document.createElement('article');
  console.log('article');
  parentElement.appendChild(article);
  let locationTable = document.getElementById('storeLocationTable');

  let locationRow = document.createElement('tr');

  let storeNameCell = document.createElement('td');
  storeNameCell.textContent = this.storeName;
  locationRow.appendChild(storeNameCell);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let cookiesPerHourCell = document.createElement('td');
    cookiesPerHourCell.textContent = this.cookiesPerHour[i];
    locationRow.appendChild(cookiesPerHourCell);
  }

  let totalDailyCookiesCell = document.createElement('td');
  totalDailyCookiesCell.textContent = this.totalDailyCookies;
  locationRow.appendChild(totalDailyCookiesCell);

  locationTable.appendChild(locationRow);

};



let locationOne = new Location('Seattle', 23, 65, 6.3, [], [], 0);
locationOne.aveCustPerHour();
locationOne.aveCookiesPerHour();
console.log(locationOne);

let locationTwo = new Location('Tokyo', 3, 24, 1.2, [], [], 0);
locationTwo.aveCustPerHour();
locationTwo.aveCookiesPerHour();
console.log(locationTwo);

let locationThree = new Location('Dubai', 11, 38, 3.7, [], [], 0);
locationThree.aveCustPerHour();
locationThree.aveCookiesPerHour();
console.log(locationThree);

let locationFour = new Location('Paris', 20, 38, 2.3, [], [], 0);
locationFour.aveCustPerHour();
locationFour.aveCookiesPerHour();
console.log(locationFour);

let locationFive = new Location('Lima', 2, 16, 4.6, [], [], 0);
locationFive.aveCustPerHour();
locationFive.aveCookiesPerHour();
console.log(locationFive);

let locations = [locationOne, locationTwo, locationThree, locationFour, locationFive];

for (let i = 0; i < locations.length; i++) {
  locations[i].render();
}
makeFooterRow();
