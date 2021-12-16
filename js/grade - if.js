// 宣告
const form = document.getElementById('myForm');
const mandarin = document.getElementById('mandarin');
const english = document.getElementById('english');
const math = document.getElementById('math');

const resulta = document.getElementById('resulta');
const resulta2 = document.getElementById('resulta2');
const resulta3 = document.getElementById('resulta3');

const submit1 = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');

const mandarinErr = document.getElementById('mandarinErr');
const englishErr = document.getElementById('englishErr');
const mathErr = document.getElementById('mathErr');


// get form
form.addEventListener("submit",function(e){
    // console.log(e);

    // 預防重整
    e.preventDefault();
    // 確認窗
    // confirm("是否要送出表單?");

    // 測試有無抓取到欄位值
    // console.log(mandarin.value);
    // console.log(english.value);
    // console.log(math.value);
    
    // 使用parseInt,將輸入的字串轉成整數
    // 國
    const parseIntmandarin = parseInt(mandarin.value);
    console.log(parseIntmandarin);

    // 英
    const parseIntenglish = parseInt(english.value);
    console.log(parseIntenglish);
    // 數
    const parseIntmath = parseInt(math.value);
    console.log(parseIntmath);
    // 幫數學欄位加上防呆，判斷第一個值是否為數字
    if (isNaN(parseIntmath)) {
        mathErr.innerText = "請輸入數字";
    }

    // 1.國英數三欄輸入分數,分類ABCDE
    let all3 = parseIntmandarin + parseIntenglish + parseIntmath;
    let avg = Math.round(all3 / 3 *100)/100;
    console.log("avg",avg);

    //2.A90↑ B80↑ C70↑ D60↑ E59↓
    //3.A綠success BCD灰色secondary E紅danger
    let level
    let color = "secondary";
    if(avg >= 90){
        level= "A";
        color = "success";
    }else if(avg >= 80){
        level= "B";
        color = "secondary";
    }else if (avg >= 70){
        level= "C";
        color = "secondary";
    }else if (avg >= 60){
        level= "D";
        color = "secondary";
    }else if (avg < 60){
        level= "E";
        color = "danger";
    }

    console.log("level",level);
    console.log("color",color);

    // 輸出分數欄位1
    resulta1.innerText = "成績:" + avg + "判別:" + level;

    // 輸出分數欄位2
    const result2 =
    `<div class="alert alert-${color}" role="alert" id="result2">
    國文:${parseIntmandarin}<br> 
    英文:${parseIntenglish}<br> 
    數學:${parseIntmath}<br>   
    總分:${all3}<br>
    平均:${avg}<br> 
    成績判別:${level}<br>
    </div>`;

    // 指定顯示ID欄位innerHTML會把輸出分數2覆蓋過指定ID欄位
    result3.innerHTML = result2;
});