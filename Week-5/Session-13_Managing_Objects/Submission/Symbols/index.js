function generateTransactionId(){
    let count = 0;
    return() => {
        count+=1;
        let transactionStr = "TRANSACTION_ID_"+String(count);
        let transactionId = Symbol(transactionStr);
        return transactionId;
    }
}


const getTransactionId = generateTransactionId();

const transaction1 = getTransactionId();
console.log(transaction1);

const transaction2 = getTransactionId();
console.log(transaction2);

const transaction3 = getTransactionId();
console.log(transaction3);
