let total = 0;
let betMoney = 0;
let canPlay = false;

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;    
}

function changeTotal() {
    let addMoney = Number.parseInt(document.getElementById("add_balance").value);
    if(addMoney) {
        total += addMoney;
        document.getElementById("total").innerHTML = total;
        canPlay = true;
    } else {
        document.getElementById("total").innerHTML = ` ${total}
        <div> You need to add money!!!  </div>`; 
    }
}

function bet() {
    betMoney = Number.parseInt(document.getElementById ("bet_amount").value);
    if (betMoney && betMoney <= total) {
        document.getElementById("total").innerHTML = total;
        canPlay = true;
    } else {
        document.getElementById("total").innerHTML = ` ${total}
            <div> You need to add money or lower your bet!!!  </div>`;
        canPlay = false;
    }
}

function spin() {
    if (!total) { document.getElementById("total").innerHTML = ` ${total}
        <div> You need to add money!!!  </div>`;    
    } else if (!betMoney) {
        document.getElementById("total").innerHTML = ` ${total}
            <div> You need to place a bet!!  </div>`;
    } else if (total > 0 && canPlay && betMoney <= total) {
        const item1 = document.getElementById('item1');
        const item2 = document.getElementById('item2');
        const item3 = document.getElementById('item3');

        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const num3 = getRandomNumber();

        item1.innerHTML = `${num1}`;
        item2.innerHTML = `${num2}`;
        item3.innerHTML = `${num3}`;

        if (num1 === num2 && num1 === num3) {
            showMessage(true);
            total += 2 * betMoney;
            document.getElementById("total").innerHTML = total;
        } else {
            showMessage(false);
            total -= betMoney;
            document.getElementById("total").innerHTML = total;
        } 
    } else {
        document.getElementById("total").innerHTML = ` ${total}
            <div> You need to change Bet!!!  </div>`;
    }
}
    
function showMessage(win) {
    const msg = document.getElementById("message");
    if( win === true) {
        msg.style.display = "block";
    } else {
    msg.style.display = "none";
    }
}
   
