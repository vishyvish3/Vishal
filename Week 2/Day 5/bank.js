/* skeleton class */
class Bank{
    code;
    address;
	manages()
    maintains()
}

class Account{
    number;
    balance;
    deposit()
    withdraw()
    createTransaction()
}

class Customer{
    name;
    address;
    dob;
    cardNumber;
    pin;
    verifyPassword()
}

class ATM{
    loction;
    managedBy;
    idenfies()
    transaction()
}

class ATM_Transaction{
    transactionId;
    date;
    type;
    amount;
    postBalance;
    modifies()
}

class CurrentAccount extends Account{
	accountno;
	balance;
	withdraw()

}

class SavingAccount extends Account{
    accountno;
	balance;
}

    

