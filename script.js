



const bill = document.querySelector('#bill');
const discount=document.querySelector('#discount');
const calculator =document.querySelector('#calculator');
const total =document.querySelector('#total');

calculator.addEventListener('click',()=>{ 
    //validation

  const billvalue = bill.value;
  const discountvalue= discount.value;
   const valid = isvalid( discountvalue);
  const  billvalid=isvalid(billvalue)
  if(valid){
  const discountAmount= billvalue-(billvalue*discountvalue)/100
  console.log(discountAmount);

  total.innerHTML=`Total amount to pay is: ${discountAmount}`;
}else{
    alert(` Enter Discount  is not correct:${discountvalue}`)
}
if (condition) {
    a
    
} else {
    
}
});


function isvalid(discount) {
    if (discount<0 || discount>100) {
        return false;
    }
    return true;
}function isvalid( bill){
    if( bill==0||bill<0 ){
        return false;
    }

    
}
