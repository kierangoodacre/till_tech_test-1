describe('Receipt', function(){

	beforeEach(function(){
		receipt = new Receipt();
	});

	describe('Tab', function(){

		it('Has no items by dedault', function(){
			expect(receipt.tab).toEqual({});
		});

		it('Item and price are added', function(){
			receipt.addItemAndPrice('Cafe Latte');
			expect(receipt.tab).toEqual({'Cafe Latte': 4.75});
		});
		
	});

});