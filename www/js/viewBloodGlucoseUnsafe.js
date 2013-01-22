ViewBloodGlucoseUnsafe = function(){
	var id = '#viewBloodGlucoseUnsafe';
	var self = this;
	
	self.triggers = ko.observableArray();
	
	// Functions
	self.returnHome = function(){
		$.mobile.changePage('#viewBloodGlucose');
	};
	
	self.init = function(event){
		self.triggers.removeAll();
		var database = window.openDatabase("blood_glucose", "1.0", "Blood Glucose", 200000);
		var databaseQuery = function(tx){
			var success = function(tx, results){
				for (var i = 0; i < results.rows.length; i++){
					var item = results.rows.item(i);
					var checkbox = '<input type="checkbox" class="custom" value="' + item.id + '" id="trigger_checkbox_' + item.id + '" />' +
					 '<label for="trigger_checkbox_' + item.id + '">' + item.statement + '</label>'
					$('#triggers').append(checkbox).trigger('create');
				};
			};		
			tx.executeSql('SELECT * FROM triggers', [] ,success);
		};		
		database.transaction(databaseQuery, databaseError);
	};
	
	
	// Bind events
//	$(document).on('newpagesetup', id, this.init);
	$(id).on("newpagesetup", this.init);
	ko.applyBindings(self, $(id).get(0));	
};