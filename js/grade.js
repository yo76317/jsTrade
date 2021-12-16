// 宣告
const form = document.getElementById('myForm');
const mandarin = document.getElementById('mandarin');
const english = document.getElementById('english');
const math = document.getElementById('math');

const mandarinErr = document.getElementById('mandarinErr');
const englishErr = document.getElementById('englishErr');
const mathErr = document.getElementById('mathErr');


// get form
form.addEventListener("submit",function(e){
    console.log(e);

    // 預防重整
    e.preventDefault();

    // 測試有無抓取到欄位值
    // console.log(mandarin.value);
    // console.log(english.value);
    // console.log(math.value);
    
    // 使用parseInt,把輸入的字串轉成整數
    // 國
    parseIntmandarin = parseInt(mandarin.value);
    console.log(parseIntmandarin);
    // 英
    parseIntenglish = parseInt(english.value);
    console.log(parseIntenglish);
    // 數
    parseIntmath = parseInt(math.value);
    console.log(parseIntmath);

    // 1.國英數三欄輸入分數,輸出ABCDE
    let all3 = parseIntmandarin + parseIntenglish + parseIntmath;

    console.log(typeof(all3));



    //2.A90↑ B80↑ C70↑ D60↑ E59↓

    //3.A綠success BCD灰色secondary E紅danger

});