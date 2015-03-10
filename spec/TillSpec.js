describe('Till', function(){

	beforeEach(function(){
		till = new Till();
	});

	describe('Adding items', function(){

		it('Default of no items on till', function(){
			expect(till.bill).toEqual([]);
		});

		it('To bill', function(){
			till.addItemPrice(10);
			till.addItemPrice(11);
			expect(till.bill).toEqual([10, 11]);
		});

	});

	describe('Calculations', function(){

		it('Can be carried out by till', function(){
			till.addItemPrice(10.5);
			till.addItemPrice(11);
			expect(till.total()).toEqual(23.3576);
		});

		it('Adds tax of 8.64% to the bill', function(){
			till.addItemPrice(10);
			expect(till.total()).toEqual(10.864);
		});

	});

});