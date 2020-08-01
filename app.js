let num = prompt("enter number");
let random = Math.floor(Math.random() * 10);

if (num === random){
  document.getElementById("result").innerHTML = "ยินดีด้วย คุณถูกรางวัล";
} else {
  document.getElementById("result").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัล";
}

document.getElementById("inputNum").innerHTML = num;

document.getElementById("random").innerHTML = random;
