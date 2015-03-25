describe('Discount', function(){

  beforeEach(function(){
    discount = new Discount();
  });

  describe('Levels', function(){

    it('Percentage is set to 5', function(){
      expect(discount.percentage).toEqual(5);
    });

    it('Discount sales threshold', function(){
      expect(discount.salesThreshold).toEqual(50);
    });

  });

  describe('Applied', function(){

    it('To cash amounts over threshold', function(){
      expect(discount.applyDiscount(50)).toEqual(47.5);
    });

  });

});
