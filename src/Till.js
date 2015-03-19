var Till = function(){
};

Till.prototype.addTax = function(){
	return (tax.percentage / 100 + 1)
};

Till.prototype.total = function(bill){
	return bill.tally.reduce(this._addPrices, 0);
};

Till.prototype.totalPlusTax = function(){
	return (bill.tally.reduce(this._addPrices, 0) * this.addTax());
};

Till.prototype.receiptPrint = function(receipt){
	return receipt.tab;
};
Till.prototype.addMenuItem = function(receipt, bill, item){
	receipt.addItemAndPrice(item);
	this.addMenuItemPrice(bill, item);
};


Till.prototype.addMenuItemPrice = function(bill, item){
	bill.addItemPrice(item);
};

Till.prototype.billPrint = function(bill){
	return bill.tally;
};

Till.prototype._addPrices = function(a,b) {
		return a + b;
};











