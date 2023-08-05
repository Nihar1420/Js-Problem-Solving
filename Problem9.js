// Billing section and customers problem given by NIRAJ WALIA as interview question asked to him -

import React from 'react';

const [billingSection , setBillingSection] = React.useState([3, 8, 5, 9, 4]);


const startBilling = () => {
    billingSection.forEach((el) => {
        updatedBillingSection.push(el - 1);
    });
}

// setTimeout(() => {
//    startBilling();
// },1000);
