describe('Bill', function(){

	beforeEach(function(){
		bill = new Bill();
	});

	describe('Tally', function(){

		it('Has no items by default', function(){
			expect(bill.tally).toEqual([]);
		});

		it('Item price can be added', function(){
			bill.addItemPrice('Cafe Latte');
			expect(bill.tally).toEqual([4.75]);
		});

	});

});