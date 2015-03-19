describe('Tax', function(){

	beforeEach(function(){
		tax = new Tax();
	});

	describe('Setting', function(){

		it('Is zero by default', function(){
			expect(tax.percentage).toEqual(8.64);
		});

	});

});