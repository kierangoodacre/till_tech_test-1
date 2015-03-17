var menu = menu;

var Till = function(){
	this.bill = [];
	this.tax = 8.64;
	this.receipt = {};
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

Till.prototype.addMenuItem = function(item){
	this.bill.push(menu.price[item]);
	this.receipt[item] = menu.prices[item];
};







