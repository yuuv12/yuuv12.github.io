// let myValue = "hsd";
// myHeading.textContent = myValue;
//
// let myArray = [1, "sda", true]
// myHeading.textContent = myArray[1]
//
// myHeading.textContent = "hello world";
// alert("iou")

function multiply(num1, num2) {
    let result = num1 * num2;
    // alert(result)
    return result;
}//浏览器控制台


// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼");
// });//js编码右下编码convert to UTF-8


let myImage = document.querySelector("#img1");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "img/image1.png") {
        myImage.setAttribute("src", "img/image2.png");
    } else {
        myImage.setAttribute("src", "img/image1.png");
    }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}
