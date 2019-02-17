//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'fritule-s-jabukama-img.jpg'){
        myImage.setAttribute('src', 'fritule-s-jabukama-img2.jpeg');
    }else {
        myImage.setAttribute ('src', 'fritule-s-jabukama-img.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Fritule For ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Fritule , ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
