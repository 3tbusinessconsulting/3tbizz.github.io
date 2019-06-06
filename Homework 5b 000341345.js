// THIS JAVASCRIPT FILE CONTAINS CLASS INFORMATION ON ABM PROGRAM
"use strict"

// THIS CLASS DEFINES CUSTOMER OBJECTS
class bankCustomer {
	// THIS IS THE CONSTRUCTOR METHOD THAT DEFINES THE PARAMETERS REQUIRED FOR NEW CUSTOMER OBJECTS
	constructor(custName, cardNum, cardPin, acctType1, acctType2, acctBal1, acctBal2) {
		// CUSTOMER PROPERTIES
		this.custName = custName;
		this.cardNum = cardNum;
		this.cardPin = cardPin;
		this.acctType1 = acctType1;
		this.acctType2 = acctType2;
		this.acctBal1 = acctBal1;
		this.acctBal2 = acctBal2;
		this.bankList = [];
}


	// RETURN CURRENT BALANCE IN ACCOUNT
	currentBalance1() {
		return this.custName + " 's current balance is " + acctBal1;	
	}

	currentBalance2() {
		return this.custName + " 's current balance is " + acctBal2;	
	}

}
