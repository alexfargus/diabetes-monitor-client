/* Javascript for index.html */

databaseError = function(error){
	console.log(error);
};

onPageChange = function(event, options){
	if ($.mobile.activePage) {
        var e = new $.Event("newpagesetup");

        $.mobile.activePage.trigger(e, options);

        if (e.isDefaultPrevented()) {
            event.preventDefault();
        } else {
            $.mobile.activePage.trigger("newpagesetupcomplete", options);
        }
    }
};

onOrientationChange = function(event, options){
	if ($.mobile.activePage) {
        var e = new $.Event("pageorientationchange");

        $.mobile.activePage.trigger(e, event.orientation);

        if (e.isDefaultPrevented()) {
            event.preventDefault();
        }
    }	
}

onPageInit = function(event, options){
	if ($.mobile.activePage) {
        var e = new $.Event("initialisepage");
        console.log('Barrrrrrrrrrrrrrrrrrrrrr');

        $.mobile.activePage.trigger(e, options);

        if (e.isDefaultPrevented()) {
            event.preventDefault();
        }
    }
};


ViewBloodGlucoseSafe = function(){
	var id = '#viewBloodGlucoseSafe';
	var self = this;
	
	// Functions
	self.returnHome = function(){
		$.mobile.changePage('#viewBloodGlucose');
	};
	
	// Bind events
	ko.applyBindings(self, $(id).get(0));	
};


init = function(event){
	console.log('Initialise');
	
	// Initialise the database
	var database = window.openDatabase("blood_glucose", "1.0", "Blood Glucose", 200000);
	console.log(database);
	
	var databaseInit = function(tx){
		console.log('creating database');
		
		tx.executeSql('DROP TABLE IF EXISTS blood_glucose');
		tx.executeSql('DROP TABLE IF EXISTS triggers');
		tx.executeSql('DROP TABLE IF EXISTS circumstances');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS blood_glucose (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, reading REAL, healthy BOOL DEFAULT 0)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS triggers (id INTEGER PRIMARY KEY AUTOINCREMENT, statement TEXT)')
		tx.executeSql('CREATE TABLE IF NOT EXISTS circumstances (blood_glucose_id INTEGER NOT NULL, triggers_id INTEGER NOT NULL)');		

		tx.executeSql('INSERT INTO triggers(statement) VALUES("I have recently exercised.")');
		tx.executeSql('INSERT INTO triggers(statement) VALUES("I have recently eaten.")');

		// Creating test data
		testData = getTestData();
		for (var i = 0; i < testData.length; i++){
			var record = testData[i];
			tx.executeSql('INSERT INTO blood_glucose(reading, timestamp) VALUES (?, Datetime(?))',
							[record.reading, record.adjustedDatetime]);
		}
	};	
	var databaseInitSuccess = function(){
		// Initialise the page models.
		view_blood_glucose = new ViewBloodGlucose();
		record_blood_glucose = new RecordBloodGlucose();
		view_blood_glucose_safe = new ViewBloodGlucoseSafe();
		view_blood_glucose_unsafe = new ViewBloodGlucoseUnsafe();
		view_historic_blood_glucose = new ViewHistoricBloodGlucose();

		// Go to the first page.
		$.mobile.changePage('#viewBloodGlucose');
		console.log('initSuccess');
	}
	database.transaction(databaseInit, databaseError, databaseInitSuccess);

	// Set the global defaults
	$.mobile.defaultPageTransition = 'none';
	
	// Add event handlers
	$(document).on("pagechange", onPageChange);
//	$(document).on("pageinit", onPageInit);
	$(window).on("orientationchange", onOrientationChange);
};	

$(document).ready(function onLoad(){

	if (document.location.protocol == "file:") {
		// Assume that app is running on a phone.
		console.log('Assuming phone.')
		document.addEventListener("deviceready", init, false);
	} else {
		// Assume that app is running on desktop.
		console.log('Assuming desktop.')
		init();
	}	
});
