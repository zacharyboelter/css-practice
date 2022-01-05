console.log('hellow orld');

let value = prompt('What is the official name of JavaScript?', '');

if (value == "ECMAScript") {
    alert('Right!')
} else {
    alert('You dumb cunt, no!')
};


let num = prompt('Enter a number', '');

if (num >= 1) {
    alert(1)
} else if (num <= -1) {
    alert(-1)
} else {
    alert(0)
}



let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            ''
