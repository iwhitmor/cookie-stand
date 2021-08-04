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

Location.prototype.render = function () {
  let parentElement = document.getElementById('salesData');
  console.log(parentElement);
  let article = document.createElement('article');
  console.log('article');
  parentElement.appendChild(article);
  let h2 = document.createElement('h2');
  h2.setAttribute('class', 'storeName');
  h2.textContent = this.storeName;
  console.log(h2);
  article.appendChild(h2);
  let cookiesUl = document.createElement('ul');
  cookiesUl.setAttribute('class', 'cookiesPerHour');
  article.appendChild(cookiesUl);
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let cookiesLi = document.createElement('li');
    console.log(cookiesLi);
    cookiesLi.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`;
    cookiesUl.appendChild(cookiesLi);
  }
  let totalCookiesLi = document.createElement('li');
  totalCookiesLi.textContent = `Total: ${this.totalDailyCookies}`;
  cookiesUl.appendChild(totalCookiesLi);
};

let locationTable = document.getElementById('storeLocationTable');
let locationRow = document.createElement('tr');

let storeRow = document.createElement('td');
storeRow.textContent = this.storeName;
locationRow.appendChild(storeRow);

locationTable.appendChild(locationRow);

let locationOne = new Location('Seattle', 23, 65, 6.3, [], [], 0);
locationOne.aveCustPerHour();
locationOne.aveCookiesPerHour();

let locationTwo = new Location('Tokyo', 3, 24, 1.2, [], [], 0);
locationTwo.aveCustPerHour();
locationTwo.aveCookiesPerHour();

let locationThree = new Location('Dubai', 11, 38, 3.7, [], [], 0);
locationThree.aveCustPerHour();
locationThree.aveCookiesPerHour();

let locationFour = new Location('Paris', 20, 38, 2.3, [], [], 0);
locationFour.aveCustPerHour();
locationFour.aveCookiesPerHour();

let locationFive = new Location('Lima', 2, 16, 4.6, [], [], 0);
locationFive.aveCustPerHour();
locationFive.aveCookiesPerHour();

let locations = [locationOne, locationTwo, locationThree, locationFour, locationFive];

for (let i = 0; i < locations.length; i++) {
  locations[i].render();
}
