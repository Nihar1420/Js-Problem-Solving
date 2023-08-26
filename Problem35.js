// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function (accounts) {
    let balance = [], bal = 0;
    accounts.forEach((e) => {
        e.forEach((e) => {
            bal += e;
        });
        balance.push(bal);
        bal = 0;
    });
    return balance.sort((a,b) => a-b)[balance.length-1];
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));