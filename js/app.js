/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
'use strict';
console.log('Pats Salmon Cookies is online');

function Location(storeName, minCustomers, maxCustomers, aveCookies, customersPerHour, cookiesPerHour, totalDailyCookies) {
  this.storeName = storeName;
  this.minCustomers = parseInt(minCustomers);
  this.maxCustomers = parseInt(maxCustomers);
  this.aveCookies = parseInt(aveCookies);
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalDailyCookies = totalDailyCookies;
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Location.prototype.aveCustPerHour = function () {
  for (let j = 0; j < hours.length; j++) {
    this.customersPerHour.push(custPerHour(this.minCustomers, this.maxCustomers));
  }
};

Location.prototype.aveCookiesPerHour = function () {
  for (let j = 0; j < hours.length; j++) {
    let oneHour = Math.floor(this.customersPerHour[j] * this.aveCookies);
    console.log('one hour',oneHour);
    this.totalDailyCookies += oneHour;
    this.cookiesPerHour.push(oneHour);
  }
  console.log('Total daily cookies ' + this.storeName, this.totalDailyCookies);
};

 function makeFooterRow () {
  let tfooter = document.getElementById('tfooter');
  let totalRow = document.createElement('tr');
  let totalRowHeader = document.createElement('th');
  totalRowHeader.textContent = 'Totals';
  totalRow.appendChild(totalRowHeader);
  tfooter.appendChild(totalRow);
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

  for (let j = 0; j < locations.length; j++) {
    finalTotal += this.totalDailyCookies;
  }

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

//////////FORM STUFF////////////

function handleFormSubmitted(event){
  event.preventDefault();
  console.log('this is the event', event);
  
  let storeLocationInput = document.getElementById('storeLocation');
  let storeLocationValue = storeLocationInput['value'];
  console.log('Store Location ', storeLocationValue);

  let minCustInput = document.getElementById('minCustPerHour');
  let minCustValue = minCustInput['value'];
  console.log('Minimum Customers: ', minCustValue);

  let maxCustInput = document.getElementById('maxCustPerHour');
  let maxCustValue = maxCustInput['value'];
  console.log('Maximum Customers: ', maxCustValue);

  let cookiesPerSaleInput = document.getElementById('cookiesPerSale');
  let cookiesPerSaleValue = cookiesPerSaleInput['value'];
  console.log('Cookies per sale: ', cookiesPerSaleValue);

let locationform = document.getElementById('locationForm');
locationform.reset();

let newLocation = new Location(storeLocationValue, minCustValue, maxCustValue, cookiesPerSaleValue, [], [], 0);
console.log('this is the new store', newLocation);

newLocation.aveCustPerHour();
newLocation.aveCookiesPerHour();
newLocation.render();
}

let formElement = document.getElementById('locationForm');
formElement.addEventListener('submit', handleFormSubmitted);
