Template.centerItem.helpers({
	gatesInCenter: function(){
		 return Gates.find({center: this.title});
	}
});
