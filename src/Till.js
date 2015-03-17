var Till = function(){
	this.bill = [];
	this.tax = 8.64;

};

Till.prototype.addItemPrice = function(price){
	this.bill.push(price);
};

Till.prototype.taxCalculation = function(){
	return (this.tax / 100 + 1)
};

Till.prototype.total = function(){
	return this.bill.reduce(add, 0);

	function add(a,b){
		return a + b;
	}
};

Till.prototype.totalPlusTax = function(){
	return (this.bill.reduce(add, 0) * this.taxCalculation());

	function add(a,b){
		return a + b;
	}
};

Till.prototype.addMenuItem = function(receipt, item){
	receipt.addItemAndPrice(item);
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











