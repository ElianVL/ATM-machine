let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');
let option6 = document.getElementById('option6');

let opbut1 = document.getElementById('opbut1');
let opbut2 = document.getElementById('opbut2');
let opbut3 = document.getElementById('opbut3');
let opbut4 = document.getElementById('opbut4');
let opbut5 = document.getElementById('opbut5');
let opbut6 = document.getElementById('opbut6');

let nisayon = 0;
let nasayon1 = 0

let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let enter = document.getElementById('enter');

let content = document.getElementById('content');

let card = document.getElementById('card');
let receiptpaper = document.getElementById('receiptpaper');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');



let bankamount = [

 {
    Name: 'Niki Sanders',
    pin: 1111,
    amount: 2000,
},

{
    Name: 'Jake Dawson',
    pin: 0987,
    amount:10,
},
{   
    Name: 'Avi Cohen',
    pin: 1234,
    amount: 1000,
}
]


let randomNum = Math.floor((Math.random() * 3));

cust = bankamount[randomNum]; 

card.onclick = welcome; 

function welcome(){
    
    console.log(cust.Name, cust.pin)
    let image = document.getElementById('image')    
    card.style.animationName='example';


    content.innerHTML ='<form><h2>WELCOME, ' + cust.Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
    keypad();

    enter.onclick = checkPin;
    clear.onclick = welcome;
    cancel.onclick = reload;
    
};

// welcome()


function keypad(){
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let button4 = document.getElementById('button4');
    let button5 = document.getElementById('button5');
    let button6 = document.getElementById('button6');
    let button7 = document.getElementById('button7');
    let button8 = document.getElementById('button8');
    let button9 = document.getElementById('button9');
    let button0 = document.getElementById('button0');
    let buttondel = document.getElementById('delete');
    let buttonspa = document.getElementById('space');

    let keypad = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttondel, buttonspa];

    let number = document.getElementById('number'); 

    keypad.forEach(function (key,idx) {
        key.addEventListener('click', function(){
            console.log(Number(keypad[idx].value)); 
            number.value += Number(keypad[idx].value);
        });
    });

};


function checkPin(){
    console.log(number.value, cust.pin)
    if (Number(number.value) !== Number(cust.pin)){
        content.innerHTML = '<h2>Invalid pin code. Try again.</h2>';

        nisayon++

        if (nisayon == 3){
            card.style.display = 'none';
            content.innerHTML = '<h2>Your card was blocked, please contact your bank manager.</h2>';
            setTimeout(reload);
        } else {
            setTimeout(welcome, 2200);
        }

    } else {
        mainPage();
    }
};

function mainPage(){
    content.innerHTML = '<h2> Welcome, </br> PLEASE SELECT YOUR DESIRED TRANSACTION.</h2>'

    option1.textContent = 'D';
    option2.textContent = 'W';
    option3.textContent = 'C';
    option4.textContent = 'P';
    option5.textContent = 'R';
    option6.textContent = 'Q';


    opbut1.onclick = deposit;
    opbut2.onclick = withdraw;
    opbut3.onclick = checkBalance;

    opbut6.onclick = quit; 

}

function deposit(){
    content.innerHTML = '<form><h2> How much would you like to Deposite</h2><input id="number" type=number max="9999">'
    // option1.textContent = 'a';
    // option2.textContent = 's';
    // option3.textContent = 'd';
    // option4.textContent = 'f';
    // option5.textContent = 'g';
    // option6.textContent = 'm';
    keypad();
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    enter.onclick = function(){
        let amount = Number(cust.amount) + Number(number.value)

        cust.amount = amount;

        content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'

        setTimeout(mainPage, 2200);
    }
};

function withdraw(){
    content.innerHTML = '<h2> How much would you like to Withdraw?</h2>'
    keypad();
    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

     button1.onclick = function(){
    let amount = Number(cust.amount) - 50

    cust.amount = amount;

    content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'
        setTimeout(mainPage, 3000);
    }
    button2.onclick = function(){
        let amount = Number(cust.amount) - 100
    
        cust.amount = amount;
    
        content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'
            setTimeout(mainPage, 3000);
        }

    button3.onclick = function(){
        let amount = Number(cust.amount) - 150
        
        cust.amount = amount;
        
        content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'
                setTimeout(mainPage, 3000);
        }
    button4.onclick = function(){
        let amount = Number(cust.amount) - 300
        
        cust.amount = amount;
        
        content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'
                setTimeout(mainPage, 3000);
        }

    button5.onclick = function(){
        content.innerHTML = '<form><h2> How much would you like to Deposite</h2><input id="number" type=number max="9999">'
        
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        keypad();

         enter.onclick = function(){
        
        let amount = Number(cust.amount) - Number(number.value)
        if (amount <= 0){
            content.innerHTML = '<h2>sorry, operation could happen,insefitioned amount / you dont have enough Balace for this operaion</h2>';

            setTimeout(mainPage, 2000);
        } else {

            cust.amount = amount

            content.innerHTML = '<h2>YOUR NEW BALANCE FOR amount IS $' + Number(cust.amount).toFixed(2) + '</h2>'

            setTimeout(mainPage, 2200);
        };
    };
}

    };

    function checkBalance(){
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

        content.innerHTML = '<h2>YOUR CURRENT BALANCE  IS $' + Number(cust.amount) + '</h2>'
        setTimeout(mainPage, 3000);
    };
    function quit(){
        
    
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';
    
    
        content.innerHTML = '<h2>GoodBye and have a nice day</h2>'
        setTimeout(welcome, 3000);
    
    }

    
    
        