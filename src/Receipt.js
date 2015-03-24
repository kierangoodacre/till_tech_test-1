var Receipt = function(){
	this.tab = {};
};

Receipt.prototype.addItemAndPrice = function(item){
	if (this.tab.hasOwnProperty(item)){
    this.tab[item] += menu.prices[item];
  } else {
    this.tab[item] = menu.prices[item];
  }
};
