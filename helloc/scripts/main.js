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
}//���������̨


// document.querySelector("html").addEventListener("click", () => {
//     alert("����ң�������");
// });//js�������±���convert to UTF-8


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
    myHeading.textContent = "Mozilla ����ˣ�" + storedName;
}
myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt("������������֡�");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla ����ˣ�" + myName;
    }
}
