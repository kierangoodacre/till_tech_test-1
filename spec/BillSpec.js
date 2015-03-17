describe('Bill', function(){

	beforeEach(function(){
		bill = new Bill();
	});

	describe('Tally', function(){

		it('Has no items by default', function(){
			expect(bill.tally).toEqual([]);
		});

	});

});