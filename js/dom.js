//select all button;
const plusButtons = document.querySelectorAll('.btn-plus');
const minusButtons = document.querySelectorAll('.btn-minus');
const removeButtons = document.querySelectorAll('.remove-item');

//remove button for clear the data;
removeButtons.forEach(btn => btn.addEventListener('click',function(e){
    const curData = e.currentTarget.parentElement.children[0].children[1].getAttribute('id');
    const curAmount = e.currentTarget.previousElementSibling.children[0].getAttribute('id');
    removeData(curData,curAmount);
    //document.getElementById('sub-total').innerText = 0;
}))

//remove function for clear the data by remove button;
function removeData(removedata1,removedata2){
    document.getElementById(removedata1).value = 0;
    document.getElementById(removedata2).innerText = 0;
}


//plus button for add more product and it's price;
plusButtons.forEach(btn => btn.addEventListener('click',function(e){
   const previousElement = e.currentTarget.previousElementSibling.getAttribute('id');
   const parentNextElement = e.currentTarget.parentElement.nextElementSibling.children[0].getAttribute('id');
   addition(previousElement,parentNextElement);

   // for subtotal, tax and total ;
   const mobileAmount = multiply('mobile-amount');
   const coverAmount = multiply('cover-amount');
   subTotal(mobileAmount,coverAmount);
}));

//plus button for decrease product and it's price;
minusButtons.forEach(btn => btn.addEventListener('click',function(e){
    const nextElement = e.currentTarget.nextElementSibling.getAttribute('id');
    const parentNextElement = e.currentTarget.parentElement.nextElementSibling.children[0].getAttribute('id');
    subtraction(nextElement,parentNextElement);

    // for subtotal, tax and total ;
    const mobileAmount = multiply('mobile-amount');
    const coverAmount = multiply('cover-amount');
    subTotal(mobileAmount,coverAmount);
}));


// sub total function for selected product;
function subTotal(mobile,cover){
    //get subtotal amount 
    const sub_total = mobile + cover;
    document.getElementById('sub-total').innerText = sub_total;

    //get the tax amount 
    const tax = parseFloat((sub_total*0.05).toFixed(2));
    document.getElementById('tax').innerText = tax;

    //get the Total amount 
    const allTotal = sub_total + tax;
    document.getElementById('all-total').innerText = allTotal;
}


// addition function for adding product and it's price;
function addition(id,amountId){
     const getValue = getValues(id);
     const total = getValue + 1;
     document.getElementById(id).value = total;

    //specify which number will be multiply;
    if(amountId == 'mobile-amount'){
       document.getElementById(amountId).innerText = total*1219;
    }
    if(amountId == 'cover-amount'){
        document.getElementById(amountId).innerText = total*59;
    }
};


// subtraction function for decreasing product and it's price;
function subtraction(id,amountId){
    const getValue = getValues(id);
    const total = getValue - 1;
    
    //when number is less than one it return 0;
    if(total < 0){
        return 0;
    }

    document.getElementById(id).value = total;

    //specify which number will be multiply;
    if(amountId == 'mobile-amount'){
       document.getElementById(amountId).innerText = total*1219;
    }
    if(amountId == 'cover-amount'){
        document.getElementById(amountId).innerText = total*59;
    }
        
}

// get id's value by this function 
function multiply(amountId){
    const getValue = parseFloat(document.getElementById(amountId).innerText);
    return getValue;
}

// get id's innerText by this function
function getValues(id){
    const getId = document.getElementById(id);
    const getIdvalue = parseFloat(getId.value);
    return getIdvalue;
}