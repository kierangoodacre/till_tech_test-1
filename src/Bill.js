var Bill = function(){
	this.tally = [];
};

Bill.prototype.addItemPrice = function(item) {
	this.tally.push(menu.prices[item]);
};