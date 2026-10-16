class BankAccount {
    constructor(holder, number, balance) {
        this.holder = holder;
        this.number = number;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited " + amount + " into account " + this.number);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds in account " + this.number);
        } else {
            this.balance -= amount;
            console.log("Withdrew " + amount + " from account " + this.number);
        }
    }

    displayBalance() {
        
        console.log(this.holder + " (Acc " + this.number + ") Balance: " + this.balance);
    }
}
// Create two different account objects
let acc1 = new BankAccount("Aarav", "101", 5000);
let acc2 = new BankAccount("Priya", "102", 1500);
let arr = [acc1,acc2]

for(let i of arr)
{
i.displayBalance()
}

// Show starting balances
// acc1.displayBalance();
// acc2.displayBalance();

// Make transactions
acc1.deposit(1000);
acc2.withdraw(500);

// Show final balances
acc1.displayBalance();
acc2.displayBalance();
