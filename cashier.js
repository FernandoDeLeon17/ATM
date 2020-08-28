class bill
{
    constructor (v, q, nam)
    {
        this.value = v;
        this.quantity = q;
        this.name = nam;
        this.image = new Image();
        this.image.src = images[this.name];
    }
}

var images = []
images ["1Dollar"] = "images/oneDollarBill.png";
images ["5Dollar"] = "images/fiveDollarBill.png";
images ["10Dollar"] = "images/tenDollarBill.png";
images ["20Dollar"] = "images/twentyDollarBill.png";
images ["50Dollar"] = "images/fiftyDollarBill.png";
images ["100Dollar"] = "images/oneHundredDollarBill.png";     

function giveMoney()
{
    var t = document.getElementById("money");
    money = parseInt(t.value);
    
    for (var bi of cashier)
    {
        if(money > 0)
        {
            div = Math.floor(money/bi.value);
            if (div > bi.quantity)
            {
                papers = bi.quantity;
            }
            else 
            {
                papers = div;
            }

            delivered.push(new bill(bi.value, papers, bi.name) );
            money = money - (bi.value * papers);
            avl.push(new bill(bi.value, (bi.quantity - papers), bi.name) );
            bi.quantity = bi.quantity - papers;
        }
        reserve += bi.quantity * bi.value;
    }
    if(money > 0)
    {
        result.innerHTML = "I'm a poor ATM and I have no money :(";
    }
    else 
    {
        for(var d of delivered)
        {
            if(d.quantity > 0)
            {
                result.appendChild(d.image);
                result.innerHTML += " " + d.quantity + " bills of $" + d.value + "<hr/>";
                debit += d.quantity * d.value;
            }    
        }
        for(var av of avl)
        {
            avilable.innerHTML += av.quantity + " left of the $" + av.value + " dollar bills <br/>";
        }
        balance.innerHTML += "your balance is $" + reserve + " dollars.";
    }
}

var cashier = [];
var delivered = [];
var avl = [];
cashier.push(new bill(100, 10, "100Dollar") );
cashier.push(new bill(50, 10, "50Dollar") );
cashier.push(new bill(20, 10, "20Dollar") );
cashier.push(new bill(10, 10, "10Dollar") );
cashier.push(new bill(5, 10, "5Dollar") );
cashier.push(new bill(1, 15, "1Dollar") );

var money;
var div = 0;
var papers = 0;
var reserve = 0;
var debit = 0;

var avilable = document.getElementById("avilable");
var balance = document.getElementById("balance");
var result = document.getElementById("result");
var b = document.getElementById("withdraw");
b.addEventListener("click", giveMoney);
