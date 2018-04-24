let nrZero = document.getElementById("zero")
let nrOne = document.getElementById("one")
let nrTwo = document.getElementById("two")
let nrThree = document.getElementById("three")
let nrFour = document.getElementById("four")
let nrFive = document.getElementById("five")
let nrSix = document.getElementById("six")
let nrSeven = document.getElementById("seven")
let nrEight = document.getElementById("eight")
let nrNine = document.getElementById("nine")
let decimal = document.getElementById("decimal")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let clearOne = document.getElementById("clearOne")
let displayField = document.getElementById("display")
let taps = document.getElementById("taps")
let megverlek = document.getElementById("megverlek")
let audio = document.getElementById("myAudio")
let audio2 = document.getElementById("myAudio2")
let storeArr = []
let num = ""
let sign = ""
let answer
nrZero.addEventListener("click", function(){
    getNum(0)
})
nrOne.addEventListener("click",  function(){
    getNum(1)
})
nrTwo.addEventListener("click",  function(){
    getNum(2)
})
nrThree.addEventListener("click",  function(){
    getNum(3)
})
nrFour.addEventListener("click", function(){
    getNum(4)
})
nrFive.addEventListener("click",  function(){
    getNum(5)
})
nrSix.addEventListener("click", function(){
    getNum(6)
})
nrSeven.addEventListener("click", function(){
    getNum(7)
})
nrEight.addEventListener("click",  function(){
    getNum(8)
})
nrNine.addEventListener("click", function(){
    getNum(9)
})
decimal.addEventListener("click",  function(){
    getNum(".")
})
plus.addEventListener("click", add)
minus.addEventListener("click", subtract)
multiply.addEventListener("click", multiplyNum)
divide.addEventListener("click", divideNum)
equal.addEventListener("click", equalize)
clear.addEventListener("click", clearAll)
clearOne.addEventListener("click",clearOneNum)
taps.addEventListener("click", tapsGep)
megverlek.addEventListener("click", megverlekHang)
function getNum(val) {
    num += val
    displayField.innerHTML = num;
}
function add() {
operation("+")
}
function subtract() {
    operation("-")
}
function multiplyNum() {
    operation("X")
}
function divideNum(){
    operation("/")
}
function equalize() {
  operation("")
}
function clearAll() {
    displayField.innerHTML = ""
    sign = ""
    num = ""
    storeArr = []
}
function clearOneNum(){
if(num != ""){
    num = num.substring(0, num.length - 1)
    displayField.innerHTML = num
}
}
function tapsGep(){
    audio.play()
}
function megverlekHang(){
    audio2.play()
}
function operation(operator){
    if (num !== "") {
        if(storeArr.length ==0){
            displayField.innerHTML = operator
            sign = operator
            storeArr.push(num)
            num = ""
        }
       else if(storeArr.length == 1){
            storeArr.push(num)
            theSwitch(sign)
            displayField.innerHTML = num;
            storeArr = []
            storeArr.push(num)
            num = ""
            sign = operator
        }
        else if(storeArr.length>1){
            theSwitch(sign)
            displayField.innerHTML = num;
            storeArr = []
            storeArr.push(num)
            num = ""
            sign = operator
        }
    }
    else{
        displayField.innerHTML = operator
        sign = operator
        num = ""
    }
}
function theSwitch(sign){
    num = storeArr.reduce((a, b) => {
        a = parseFloat(a)
        b = parseFloat(b)
        switch (sign) {
            case "+":
                answer = a + b
                break;
            case "-":
                answer = a - b
                break;
            case "X":
                answer = a * b
                break;
            case "/":
                answer = a / b
                break;
        }
        return answer
    })
}


