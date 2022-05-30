let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
        myImage.setAttribute('src', 'images/2.jpg');
    } else {
        myImage.setAttribute('src', 'images/1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function () {
    setUserName();
}
function setUserName() {
    // 弹出类似对话框，需要用户输入数据
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        // 将输入的数据保存到localStorage中
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }

}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}