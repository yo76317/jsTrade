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

// 宣告

// 先寫宣告
// 再去試看看抓不抓的到console.log
// 可以再接著寫

// 宣告
// get form

// form = id是(myForm)的值
const form = document.getElementById('myForm');
const cmInput = document.getElementById("centimeter");
const inchInput = document.getElementById("inch");
const cmErr = document.getElementById("cmErr");
const inchErr = document.getElementById("inchErr");


const m2Input = document.getElementById("m2");
const pingInput = document.getElementById("ping");
const m2Err = document.getElementById("m2Err");
const pingErr = document.getElementById("pingErr");

// get form change
// form = id(myForm)的值再用,返回指定的值
// addeventlistener 添加事件 (事件自己查再輸入)
form.addEventListener("change", function (e) {
    console.log("centimeter is changes")
    // 公分換算英吋
    const cm = parseFloat(cmInput.value);
    console.log(cm);
    let inch = cm / 2.54;
    console.log(inch);
    inch = Math.round(inch * 100) / 100;
    console.log(inch);
    inchInput.value = inch;
});

// 英吋換算公分
inchInput.addEventListener("change", function (e) {
    console.log("inch is changes")
    const inch = parseFloat(inchInput.value);
    console.log(inch);
    let cm = inch * 2.54;
    console.log(cm);
    cmInput.value = cm;
});

// 平方公尺換算坪
m2Input.addEventListener("change", function (e) {
    console.log("m2 is changes");
    const m2 = parseFloat(m2Input.value);
    console.log(m2);
    let ping = m2 / 3.306;
    console.log(ping);
    ping = Math.round(ping * 100) / 100;
    console.log(ping);
    pingInput.value = ping;
    if (isNaN(m2)) {
        m2Err.innerText = "請輸入數字";
    }
});

// 坪換算平方公尺
pingInput.addEventListener("change", function (e) {
    console.log("ping is changes");
    const ping = parseFloat(pingInput.value);
    console.log(ping);
    m2 = ping * 3.306; 
    m2 = Math.round(m2 * 100)  / 100
    console.log(m2);
    m2Input.value = m2;
    if(isNaN(ping)){
        pingErr.innerText = "請輸入數字";
    }
});