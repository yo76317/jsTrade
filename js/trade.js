// alert('')

// form submit
    // myForm 的 submit click
// get form
// get num1
// get num2
// get option
    // option +
    // option -
    // option *
    // option /
    //switch

//宣告
const form = document.getElementById('myForm');
const originPrice = document.getElementById('originPrice');
const discount = document.getElementById('discount');
const cashDiscount = document.getElementById('cashDiscount');
const resultOutput = document.getElementById('resultOutput');

// get form
form.addEventListener("submit",function(e){
    console.log(e);
    
    //預防重新整理的預設行為
    e.preventDefault();
    
    console.log(originPrice.value);
    console.log(discount.value);
    console.log(cashDiscount.value);
 
    // 總價
    parseOriginPrice = parseInt(originPrice.value);
    console.log(parseOriginPrice);

    // 折價
    parseDiscount = parseFloat(discount.value / 100);
    console.log(parseDiscount);

    // 現金折扣
    cashDiscountPrice = parseInt(cashDiscount.value);
    console.log(cashDiscountPrice);

    // 省下 = 總價 - 折扣 - 現金折扣
    // 全部折扣 = 折扣+現金折扣
    let discountAll = 0;

    // >500 折扣88,79轉換為0.88,0.79
    if(parseOriginPrice >= 500){
        discountAll = parseOriginPrice * (1- parseDiscount);
    }
    
    // >上限200 現金折扣
    if(parseOriginPrice*parseDiscount >= 100){
        discountAll = discountAll + cashDiscountPrice;
    }
    
    // 付款 = 總價 - 省下
    total = parseOriginPrice - discountAll;

    console.log(discountAll);
    
    alert(discountAll);
    resultOutput.innerText = "原價:" + parseOriginPrice + "折扣:" + parseDiscount
    + "現金折扣:" + cashDiscountPrice + "省下:" + discountAll + "總付款:" + total;

    // resultOutput.innerText = "折扣: " + parseDiscount;
    // resultOutput.innerText = "現金折扣: " + cashDiscountPrice;
    
});
