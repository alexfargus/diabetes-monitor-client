ViewHistoricBloodGlucose = function(){
	var id = '#viewHistoricBloodGlucose';
	var self = this;

	// Members
	self.chartOptions = {
		axes:{
			xaxis:{
				renderer: $.jqplot.DateAxisRenderer,
				pad: 0,
				tickOptions: {},				
			},
			yaxis:{
				min: 0,
				max: 25,
				label: 'Blood Glucose',
				labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
			},
		},
		series: [
			{
				showLine: false,
				markerOptions: {
					style: 'x'
				}
			},
			{
				showLine: false,				
				markerOptions: {
					style: 'circle'
				}
			},			
		],
	};

	self.chartDurationTitles = {
		'day': 'Last Day',
		'week': 'Last Week',
		'month': 'Last Month',
	};

	self.chartDuration = 'day';
	
	// Functions
	self.setChartOptions = function(){
		var duration = self.chartDuration;

		// Title
		self.chartOptions.title = self.chartDurationTitles[duration];

		// X Axis range
		var max = moment();
		var min = {
			'day': moment().subtract('days', 1).startOf('hour'),
			'week': moment().subtract('days', 7).startOf('day'),
			'month': moment().subtract('months', 1).startOf('day'),
		}
		self.chartOptions.axes.xaxis.max = max.valueOf();
		self.chartOptions.axes.xaxis.min = min[duration].valueOf();
		
		// X Axis interval
		var format = {
			'day': '%a %#I %p',
			'week': '%a %d',
			'month': '%d %b',
		}
		var interval = {
			'day': '6 hours',
			'week': '1 day',
			'month': '1 week',
		}		
		self.chartOptions.axes.xaxis.tickOptions.formatString = format[duration];
		self.chartOptions.axes.xaxis.tickInterval = interval[duration];
		
	};
	
	self.plotChart = function(readings){
		$('#glucoseChart').empty();
		
		// Specify the series data		
		var series = [[null], [null]]
		if (readings.healthy.length > 0){
			series[0] = readings.healthy;
		}
		if (readings.unhealthy.length > 0){
			series[1] = readings.unhealthy;
		}
		
		$.jqplot('glucoseChart', series, self.chartOptions);		
	};

	self.showPage = function(event){
		console.log('viewHistoricBloodGlucose');
		$.mobile.loading('show');
		var database = window.openDatabase("blood_glucose", "1.0", "Blood Glucose", 200000);
		var databaseQuery = function(tx){
			var duration = {
				'day': "SELECT * FROM blood_glucose WHERE timestamp >= Datetime('now', '-1 day')",
				'week': "SELECT * FROM blood_glucose WHERE timestamp >= Datetime('now', '-7 days')",
				'month': "SELECT * FROM blood_glucose WHERE timestamp >= Datetime('now', '-1 months')",
			};

			var success = function(tx, results){
				readings = {healthy: [], unhealthy: []}
				for (var i = 0; i < results.rows.length; i++){
					var item = results.rows.item(i);
					if (item.healthy == 1){
						readings.healthy.push([item.timestamp, item.reading]);	
					} else {
						readings.unhealthy.push([item.timestamp, item.reading]);
					}
				}
				self.plotChart(readings);	
				$.mobile.loading('hide');	
			};			
			var sql = duration[self.chartDuration];			
			tx.executeSql(sql, [] , success);

		};	
		var failure = function(error){
				console.log("Database error:" + error.code);
		};
		database.transaction(databaseQuery, failure);
	};
	
	self.changeOrientation = function(event, orientation){
		console.log(orientation);
		self.showPage(event);
	};
	
	self.plotDay = function(event){
		self.chartDuration = 'day';
		self.setChartOptions();
		self.showPage(event);
	};
	
	self.plotWeek = function(event){
		self.chartDuration = 'week';
		self.setChartOptions();
		self.showPage(event);
	};
	
	self.plotMonth = function(event){
		self.chartDuration = 'month';
		self.setChartOptions();
		self.showPage(event);
	};
	
	self.swipeLeft = function(event){
		console.log('left');
		var functions = {
			'day': self.plotMonth,
			'week': self.plotDay,
			'month': self.plotWeek,
		}
		functions[self.chartDuration]();
	};
	
	self.swipeRight = function(event){
		console.log('right');
		var functions = {
			'day': self.plotWeek,
			'week': self.plotMonth,
			'month': self.plotDay,
		}
		functions[self.chartDuration]();		
	};
	
	// Bind events
	$(id).on("newpagesetup", this.showPage);
	$(id).on("pageorientationchange", this.changeOrientation);
	$(id).on('swipeleft', this.swipeLeft);
	$(id).on('swiperight', this.swipeRight);
	ko.applyBindings(self, $(id).get(0));	
	
	// Initialise the page
	self.setChartOptions();
};
