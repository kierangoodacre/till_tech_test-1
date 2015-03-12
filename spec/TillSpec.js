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
			expect(till.total()).toEqual(21.5);
		});

		it('Tax can be added seperate', function(){
			till.addItemPrice(10);
			expect(till.totalPlusTax()).toEqual(10.864);
		});

	});

	describe('Items from menu', function(){
		till.addMenuItem('Caffe Latte');
		expect(till.total()).toEqual(4.75)
	});

});