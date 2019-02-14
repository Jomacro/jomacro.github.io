//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/josip.marcelic/Desktop/web-projects/test-site/images/Now_logo_RGB_600dpi_GG+A.png'){
        myImage.setAttribute('src', '/Users/josip.marcelic/Desktop/web-projects/test-site/images/Now_logo_RGB_600dpi_BL.png');
    }else {
        myImage.setAttribute ('src', '/Users/josip.marcelic/Desktop/web-projects/test-site/images/Now_logo_RGB_600dpi_GG+A.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Works For ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Works For , ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}