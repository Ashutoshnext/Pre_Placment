function createBankAccount() {
    let balance = 500;
    // return balance
    return {
        deposit: function (inr) {
            balance += inr
            return balance;
        },
        withdraw: function (inr) {
            if (inr > balance) {
                return `insufficent your balance is:${balance}`
            } else {
                balance -= inr
                return inr
            }

        },
        getBalance:function(){
            return balance
        }
    }
}

let account = createBankAccount(500)
console.log("deposite amout today:",account.deposit(500));
console.log("withdraw amount today: ",account.withdraw(200));
console.log("reamin Amount in your account:",account.getBalance());

