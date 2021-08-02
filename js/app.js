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
  aveCustPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersPerHour.push(custPerHour(this.minCustomers,this.maxCustomers));
    }
  }
};

function custPerHour(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
locationOne.aveCustPerHour();