class BankAccount{
    #accountNumber;
    #balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName){
        this.#accountHolderName = accountHolderName;
        this.#balance = balance;
        this.#accountNumber = accountNumber;
    }
}

class CheckingAccount extends BankAccount{
    constructor(accountNumber, balance, accountHolderName){
        super(accountNumber, balance, accountHolderName)
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        this.balance = this.balance - amount;
    }

    getBalance(){
        return this.balance
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNumber, balance, accountHolderName){
        super(accountNumber, balance, accountHolderName)
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        if( this.balance - amount){
            this.balance = this.balance - amount;
        }else{
            return "Transaction failed!"
        }
    }

    getBalance(){
        return this.balance
    }
}

const savingInstance = new SavingsAccount("27635", 100, 'Nishtha');
console.log(savingInstance);
savingInstance.deposit(300);
console.log(savingInstance.getBalance());
savingInstance.withdraw(500);
savingInstance.withdraw(200);
console.log(savingInstance.getBalance());