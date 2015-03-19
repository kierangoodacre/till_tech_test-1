var Bill = function(){
	this.tally = [];
};

Bill.prototype.addItemPrice = function(item) {
	this.tally.push(menu.prices[item]);
};

Bill.prototype.taxCalculation = function(){
	return (tax.percentage / 100 + 1)
};

Bill.prototype.tallyWithTax = function(){
	return (bill.tally.reduce(this._addPrices, 0) * this.taxCalculation());
};

Bill.prototype._addPrices = function(a,b) {
		return a + b;
};