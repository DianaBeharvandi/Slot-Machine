let total = 0;
let canPlay = true;
document.getElementById("total").innerHTML = total;

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
        
}

function getElement(id) {
    return document.getElementById(id);
}

function spin() {
    if (total > 0 && canPlay ) {
        const item1 = getElement('item1');
        const item2 = getElement('item2');
        const item3 = getElement('item3');

        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const num3 = getRandomNumber();

        item1.innerHTML = `${num1}`;
        item2.innerHTML = `${num2}`;
        item3.innerHTML = `${num3}`;

        let betAmount = bet();
        if (betAmount <= total) { 
            if (num1 === num2 && num1 === num3) {
                showMessage();
                total += 2 * betAmount;
                document.getElementById("total").innerHTML = total;
            } else {
                hideMessage();
                total -= betAmount;
                document.getElementById("total").innerHTML = total;
            } 
        } else {
            document.getElementById("total").innerHTML = ` ${total}
            <div> You need to add money!!!  </div>`;
        }
    } else {
        document.getElementById("total").innerHTML = ` ${total}
            <div> You need to add money!!!  </div>`;
    }
}
    
function showMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add('animated', 'pulse')
}

function hideMessage() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}
   
function changeTotal() {
    let addMoney = document.getElementById("add_balance").value;
    total += Number.parseInt(addMoney);
    document.getElementById("total").innerHTML = total;
    canPlay = true;
}

function bet() {
    let betMoney = document.getElementById ("bet_amount").value;
    if (Number.parseInt(betMoney) && Number.parseInt(betMoney) <= total) {
        return Number.parseInt(betMoney);
        canPlay = true;
    } else {
        document.getElementById("total").innerHTML = ` ${total}
            <div> You need to add money or lower your bet!!!  </div>`;
        canPlay = false;
    }
}
