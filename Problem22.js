// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let revArr1 = Number(l1.reverse().join().replaceAll(",","")) , revArr2 = Number(l2.reverse().join().replaceAll(",","")),sum;
    sum = revArr1 + revArr2;
    let arr3 = sum.toString().split('').reverse() , arr4 = [];
    for(let i = 0; i < arr3.length ; i++){
       arr4[i] = Number(arr3[i]);
    }
    return arr4;
};

console.log(addTwoNumbers([1,2,3],[4,5,6]));