// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "not James"


var upperCaseCustomerName = function() {   
    b = customerName.toUpperCase();
    customerName = b
    return customerName
}

var setBestCustomer = function() {
    bestCustomer = "not bob";
   return bestCustomer
}

var overwriteBestCustomer = function() {
    bestCustomer = "maybe bob"
}
var changeLeastFavoriteCustomer = function() {
    leastFavoriteCustomer = "james"
}




changeLeastFavoriteCustomer();
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();