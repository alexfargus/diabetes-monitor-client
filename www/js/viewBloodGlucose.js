ViewBloodGlucose = function(){
	var self = this;
	var id = '#viewBloodGlucose';

	// Members
	self.last_reading = ko.observable(0);
	self.last_reading_time = ko.observable(0);
	self.next_reading_time = ko.observable(0);

	// Functions
	self.showPage = function(event){
		console.log('setupViewBloodGlucose');
		var database = window.openDatabase("blood_glucose", "1.0", "Blood Glucose", 200000);
		var databaseQuery = function(tx){
			var success = function(tx, results){
				if (results.rows.length == 1){
					item = results.rows.item(0);
					self.last_reading(item.reading);
					self.last_reading_time(item.timestamp);
				};
			};		
			tx.executeSql('SELECT * FROM blood_glucose ORDER BY timestamp DESC LIMIT 1', [] ,success);
		};		
		database.transaction(databaseQuery, databaseError);
	};

	// Bind events	
	$(id).on("newpagesetup", this.showPage);
	ko.applyBindings(self, $(id).get(0));
};
