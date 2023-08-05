// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

const address = "1.1.1.1"

const jointAdd = address.split('.');

const jointString = jointAdd.join('[.]');

console.log(jointAdd);
console.log(jointString);
