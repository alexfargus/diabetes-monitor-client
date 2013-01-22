RecordBloodGlucose = function(){
	var id = '#recordBloodGlucose';
	var self = this;
	// Members
	
	// Functions
	self.recordGlucoseReading = function(form){
		var reading = $('#record_glucose_slider').val();
		var fasting = $('#fasting_checkbox').is(':checked');
		var healthyReading = self.isHealthyReading(reading, fasting);
		
		var database = window.openDatabase("blood_glucose", "1.0", "Blood Glucose", 200000);
		var databaseQuery = function(tx){
			var success = function(tx, results){
				console.log('Database insert successful');
			};		
			// SQLite does not support boolean values - map to [0, 1]
			var healthy = (healthyReading) ? 1 : 0;
			tx.executeSql('INSERT INTO blood_glucose(reading, healthy) VALUES (?, ?)', [reading, healthy] ,success);
		};		
		database.transaction(databaseQuery, databaseError);
		
		if (healthyReading){
			$.mobile.changePage('#viewBloodGlucoseSafe');
		} else {
			$.mobile.changePage('#viewBloodGlucoseUnsafe');
		}
	};
	
	self.isHealthyReading = function(reading, fasting){
		if (reading < 3){
			return false;
		} else if (reading > 7 && fasting == true){
			return false;
		} else if (reading > 11){
			return false;
		} else {
			return true;
		}
	}
	
	// Bind events
	ko.applyBindings(self, $(id).get(0));
};
