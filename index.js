
let dogNumber = 0;
const dogPic = [];

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/'+ dogNumber)
      .then(response => response.json())
      .then(responseJson => letsLog(responseJson));
  };

function dogInput() {
    $('form').submit(event => {
        event.preventDefault();
        updateNumber();
        getDogImage();
})};

function updateNumber() {
   dogNumber = document.getElementById("dogNumber").value;
};

$(function() {
    console.log('Success. Waiting for submit');
    dogInput();
});


function letsLog(dogPics) 
{ 
    for (i=0; i < dogPics.message.length; i++) {
        console.log(dogPics.message[i]);
    };
};