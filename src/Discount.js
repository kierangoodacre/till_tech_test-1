var Discount = function(){
  this.percentage = 5;
  this.salesThreshold = 50;
};

Discount.prototype.applyDiscount = function(cash){
  if (cash >= this.salesThreshold){
    return (cash * this._discountCalculation());
  } else {
    return cash;
  }
};

//private

Discount.prototype._discountCalculation = function(){
  return ((100 - this.percentage) / 100)
};
