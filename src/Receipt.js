var Receipt = function(){
	this.tab = {};
};

Receipt.prototype.addItemAndPrice = function(item){
	this.tab[item] = menu.prices[item];
};