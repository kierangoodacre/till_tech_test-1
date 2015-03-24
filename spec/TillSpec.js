describe('Till', function(){

	var till;
	var receipt;
	var bill;
	var tax;

	beforeEach(function(){
		till = new Till();
		receipt = new Receipt();
		bill = new Bill();
		tax = new Tax();
	});

	describe('Calculations', function(){

		it('Can be carried out by till', function(){
			till.addMenuItemPrice(bill, 'Cafe Latte');
			expect(till.total(bill)).toEqual(4.75);
		});

		it('Tax can be added seperate', function(){
			till.addMenuItemPrice(bill, 'Cafe Latte');
			till.addMenuItemPrice(bill, 'Cafe Latte');
			expect(till.totalPlusTax(bill)).toEqual(10.3208);
		});

	});

	describe('Items from menu', function(){

		it('Can be added to bill', function(){
			till.addMenuItemPrice(bill, 'Cafe Latte');
			expect(till.billPrint(bill)).toEqual([4.75])
		});

		it('Can be added to receipt', function(){
			till.addMenuItem(receipt, bill, 'Cafe Latte');
			expect(till.receiptPrint(receipt)).toEqual({'Cafe Latte': 4.75});
		});

	});

	describe('Change', function(){

		it('Can be given based on items on bill', function(){
			till.addMenuItem(receipt, bill, 'Cafe Latte');
			till.addMenuItem(receipt, bill, 'Cafe Latte');
			expect(till.changeDue(20, bill)).toEqual(9.6792);
		});

	});
	
});
