var Till = function(){
};

Till.prototype.total = function(bill){
	return bill.tally.reduce(this._addPrices, 0);
};

Till.prototype.totalPlusTax = function(bill){
	return bill.tallyWithTax();
};

Till.prototype.addMenuItem = function(receipt, bill, item){
	receipt.addItemAndPrice(item);
	this.addMenuItemPrice(bill, item);
};

Till.prototype.receiptPrint = function(receipt){
	return receipt.tab;
};

Till.prototype.addMenuItemPrice = function(bill, item){
	bill.addItemPrice(item);
};

Till.prototype.billPrint = function(bill){
	return bill.tally;
};

Till.prototype.changeDue = function(cash){
	return this._calculateChange(cash);
};

//private

Till.prototype._calculateChange = function(cash){
	return (cash - bill.tallyWithTax());
};

Till.prototype._addPrices = function(a,b) {
		return a + b;
};
