var myArr = ['Apple', 'Orange', 'Pineapple', 'Banana', 'Kiwi'];
var myNewArr = [];

for (var i = 0; i < myArr.length; i++) {
    myNewArr.push(myArr[i].toLowerCase());
}

for (var i = 0; i < myNewArr.length; i++) {
    console.log(myNewArr[i].charAt(0) + myNewArr[i].charAt(myNewArr[i].length - 1));
}

var name = 'Adrian';

for (var i = 0; i < name.length; i++) {
    name.split();
    console.log(name.charAt(i));
}

name = name.split('n').join('r');
console.log(name);

document.getElementsByTagName('button')[0].addEventListener('click', function() {
    var input = document.getElementsByTagName('input')[0];
    if (validateEmail(input.value)) {
        console.log('true');
    } else {
        console.log('false');
    }
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
