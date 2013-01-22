getTestData = function(){
	var test_data = [
		{"date": "1991-04-21", "time": "09:09:00", "reading": 5.56 },
		{"date": "1991-04-21", "time": "17:08:00", "reading": 6.61 },
		{"date": "1991-04-21", "time": "22:51:00", "reading": 6.83 },
		{"date": "1991-04-22", "time": "07:35:00", "reading": 12.00 },
		{"date": "1991-04-22", "time": "16:56:00", "reading": 11.72 },
		{"date": "1991-04-23", "time": "07:25:00", "reading": 14.28 },
		{"date": "1991-04-23", "time": "17:25:00", "reading": 7.17 },
		{"date": "1991-04-24", "time": "07:52:00", "reading": 13.28 },
		{"date": "1991-04-24", "time": "17:10:00", "reading": 7.17 },
		{"date": "1991-04-24", "time": "22:09:00", "reading": 18.89 },
		{"date": "1991-04-25", "time": "07:29:00", "reading": 3.72 },
		{"date": "1991-04-25", "time": "17:24:00", "reading": 11.44 },
		{"date": "1991-04-25", "time": "21:54:00", "reading": 16.00 },
		{"date": "1991-04-26", "time": "05:52:00", "reading": 4.28 },
		{"date": "1991-04-26", "time": "17:26:00", "reading": 12.67 },
		{"date": "1991-04-27", "time": "10:03:00", "reading": 14.39 },
		{"date": "1991-04-27", "time": "17:20:00", "reading": 14.22 },
		{"date": "1991-04-28", "time": "08:42:00", "reading": 6.06 },
		{"date": "1991-04-28", "time": "17:06:00", "reading": 5.33 },
		{"date": "1991-04-28", "time": "22:30:00", "reading": 11.11 },
		{"date": "1991-04-29", "time": "07:39:00", "reading": 7.11 },
		{"date": "1991-04-29", "time": "13:38:00", "reading": 10.67 },
		{"date": "1991-04-29", "time": "16:50:00", "reading": 14.61 },
		{"date": "1991-04-29", "time": "22:28:00", "reading": 4.50 },
		{"date": "1991-04-30", "time": "07:40:00", "reading": 9.94 },
		{"date": "1991-04-30", "time": "12:55:00", "reading": 4.89 },
		{"date": "1991-04-30", "time": "17:40:00", "reading": 10.28 },
		{"date": "1991-04-30", "time": "23:06:00", "reading": 5.78 },
		{"date": "1991-05-01", "time": "07:38:00", "reading": 4.78 },
		{"date": "1991-05-01", "time": "12:14:00", "reading": 3.33 },
		{"date": "1991-05-02", "time": "07:39:00", "reading": 8.17 },
		{"date": "1991-05-02", "time": "17:45:00", "reading": 11.50 },
		{"date": "1991-05-03", "time": "07:48:00", "reading": 16.94 },
		{"date": "1991-05-03", "time": "13:23:00", "reading": 4.50 },
		{"date": "1991-05-03", "time": "17:14:00", "reading": 8.39 },
		{"date": "1991-05-03", "time": "22:08:00", "reading": 4.72 },
		{"date": "1991-05-04", "time": "06:50:00", "reading": 7.39 },
		{"date": "1991-05-04", "time": "21:40:00", "reading": 3.50 },
		{"date": "1991-05-05", "time": "09:10:00", "reading": 10.17 },
		{"date": "1991-05-05", "time": "22:18:00", "reading": 15.67 },
		{"date": "1991-05-06", "time": "07:42:00", "reading": 5.06 },
		{"date": "1991-05-06", "time": "16:55:00", "reading": 12.72 },
		{"date": "1991-05-07", "time": "07:37:00", "reading": 6.72 },
		{"date": "1991-05-08", "time": "07:43:00", "reading": 13.94 },
		{"date": "1991-05-08", "time": "17:30:00", "reading": 7.50 },
		{"date": "1991-05-08", "time": "22:45:00", "reading": 7.17 },
		{"date": "1991-05-09", "time": "07:33:00", "reading": 4.83 },
		{"date": "1991-05-10", "time": "07:40:00", "reading": 14.17 },
		{"date": "1991-05-10", "time": "17:30:00", "reading": 19.06 },
		{"date": "1991-05-10", "time": "20:54:00", "reading": 5.39 },
		{"date": "1991-05-11", "time": "08:30:00", "reading": 7.56 },
		{"date": "1991-05-11", "time": "17:36:00", "reading": 4.56 },
		{"date": "1991-05-11", "time": "22:02:00", "reading": 6.11 },
		{"date": "1991-05-12", "time": "09:46:00", "reading": 13.11 },
		{"date": "1991-05-12", "time": "17:00:00", "reading": 9.72 },
		{"date": "1991-05-13", "time": "07:50:00", "reading": 6.00 },
		{"date": "1991-05-13", "time": "17:00:00", "reading": 16.67 },
		{"date": "1991-05-13", "time": "22:17:00", "reading": 4.22 },
		{"date": "1991-05-14", "time": "07:36:00", "reading": 3.61 },
		{"date": "1991-05-14", "time": "17:26:00", "reading": 2.39 },
		{"date": "1991-05-14", "time": "22:30:00", "reading": 7.22 },
		{"date": "1991-05-15", "time": "07:45:00", "reading": 10.17 },
		{"date": "1991-05-15", "time": "17:09:00", "reading": 10.11 },
		{"date": "1991-05-16", "time": "07:30:00", "reading": 6.50 },
		{"date": "1991-05-16", "time": "17:41:00", "reading": 4.17 },
		{"date": "1991-05-16", "time": "22:41:00", "reading": 3.83 },
		{"date": "1991-05-17", "time": "07:35:00", "reading": 4.22 },
		{"date": "1991-05-17", "time": "17:17:00", "reading": 11.17 },
		{"date": "1991-05-18", "time": "08:55:00", "reading": 13.56 },
		{"date": "1991-05-18", "time": "16:45:00", "reading": 5.78 },
		{"date": "1991-05-19", "time": "09:42:00", "reading": 6.94 },
		{"date": "1991-05-19", "time": "17:33:00", "reading": 5.11 },
		{"date": "1991-05-20", "time": "07:31:00", "reading": 4.83 },
		{"date": "1991-05-20", "time": "17:12:00", "reading": 5.06 },
		{"date": "1991-05-21", "time": "07:34:00", "reading": 6.78 },
		{"date": "1991-05-21", "time": "11:50:00", "reading": 9.00 },
		{"date": "1991-05-22", "time": "07:32:00", "reading": 4.28 },
		{"date": "1991-05-22", "time": "17:00:00", "reading": 15.00 },
		{"date": "1991-05-23", "time": "07:35:00", "reading": 16.50 },
		{"date": "1991-05-23", "time": "15:00:00", "reading": 8.22 },
		{"date": "1991-05-23", "time": "17:40:00", "reading": 5.06 },
		{"date": "1991-05-23", "time": "22:38:00", "reading": 4.39 },
		{"date": "1991-05-24", "time": "07:43:00", "reading": 13.67 },
		{"date": "1991-05-24", "time": "17:20:00", "reading": 14.22 },
		{"date": "1991-05-24", "time": "22:17:00", "reading": 9.17 },
		{"date": "1991-05-25", "time": "09:05:00", "reading": 8.28 },
		{"date": "1991-05-25", "time": "17:00:00", "reading": 6.00 },
		{"date": "1991-05-25", "time": "23:00:00", "reading": 12.89 },
		{"date": "1991-05-26", "time": "09:17:00", "reading": 17.33 },
		{"date": "1991-05-26", "time": "16:26:00", "reading": 6.39 },
		{"date": "1991-05-26", "time": "22:06:00", "reading": 10.00 },
		{"date": "1991-05-27", "time": "08:50:00", "reading": 16.39 },
		{"date": "1991-05-27", "time": "13:48:00", "reading": 12.22 },
		{"date": "1991-05-27", "time": "22:42:00", "reading": 6.78 },
		{"date": "1991-05-28", "time": "07:35:00", "reading": 4.17 },
		{"date": "1991-05-28", "time": "12:52:00", "reading": 3.56 },
		{"date": "1991-05-29", "time": "07:28:00", "reading": 15.17 },
		{"date": "1991-05-29", "time": "13:25:00", "reading": 6.94 },
		{"date": "1991-05-29", "time": "16:55:00", "reading": 13.33 },
		{"date": "1991-05-30", "time": "07:34:00", "reading": 12.06 },
		{"date": "1991-05-30", "time": "13:53:00", "reading": 10.39 },
		{"date": "1991-05-30", "time": "22:51:00", "reading": 2.56 },
		{"date": "1991-05-31", "time": "07:30:00", "reading": 9.06 },
		{"date": "1991-05-31", "time": "17:13:00", "reading": 7.06 },
		{"date": "1991-06-01", "time": "09:20:00", "reading": 17.39 },
		{"date": "1991-06-01", "time": "14:15:00", "reading": 14.17 },
		{"date": "1991-06-01", "time": "17:00:00", "reading": 6.61 },
		{"date": "1991-06-01", "time": "21:20:00", "reading": 4.28 },
		{"date": "1991-06-02", "time": "09:45:00", "reading": 5.67 },
		{"date": "1991-06-02", "time": "17:00:00", "reading": 8.17 },
		{"date": "1991-06-02", "time": "23:45:00", "reading": 7.44 },
		{"date": "1991-06-03", "time": "07:22:00", "reading": 3.83 },
		{"date": "1991-06-03", "time": "12:39:00", "reading": 5.72 },
		{"date": "1991-06-03", "time": "17:45:00", "reading": 12.89 },
		{"date": "1991-06-03", "time": "21:25:00", "reading": 6.67 },
		{"date": "1991-06-04", "time": "07:35:00", "reading": 12.61 },
		{"date": "1991-06-05", "time": "07:35:00", "reading": 4.17 },
		{"date": "1991-06-05", "time": "12:25:00", "reading": 5.83 },
		{"date": "1991-06-05", "time": "17:35:00", "reading": 15.94 },
		{"date": "1991-06-05", "time": "22:00:00", "reading": 6.28 },
		{"date": "1991-06-06", "time": "08:38:00", "reading": 7.89 },
		{"date": "1991-06-06", "time": "12:13:00", "reading": 9.61 },
		{"date": "1991-06-06", "time": "17:54:00", "reading": 3.89 },
		{"date": "1991-06-06", "time": "22:15:00", "reading": 8.50 },
		{"date": "1991-06-07", "time": "08:35:00", "reading": 7.83 },
		{"date": "1991-06-07", "time": "12:45:00", "reading": 8.11 },
		{"date": "1991-06-07", "time": "17:03:00", "reading": 5.33 },
		{"date": "1991-06-07", "time": "22:17:00", "reading": 5.83 },
		{"date": "1991-06-08", "time": "08:45:00", "reading": 10.11 },
		{"date": "1991-06-08", "time": "14:15:00", "reading": 11.22 },
		{"date": "1991-06-08", "time": "17:00:00", "reading": 6.17 },
		{"date": "1991-06-08", "time": "22:22:00", "reading": 11.78 },
		{"date": "1991-06-09", "time": "09:08:00", "reading": 9.61 },
		{"date": "1991-06-09", "time": "12:20:00", "reading": 11.17 },
		{"date": "1991-06-09", "time": "17:00:00", "reading": 3.89 },
		{"date": "1991-06-09", "time": "22:12:00", "reading": 5.67 },
		{"date": "1991-06-10", "time": "08:35:00", "reading": 9.50 },
		{"date": "1991-06-10", "time": "12:40:00", "reading": 5.94 },
		{"date": "1991-06-10", "time": "17:17:00", "reading": 7.44 },
		{"date": "1991-06-10", "time": "22:00:00", "reading": 1.94 },
		{"date": "1991-06-11", "time": "08:34:00", "reading": 8.67 },
		{"date": "1991-06-11", "time": "13:16:00", "reading": 5.89 },
		{"date": "1991-06-11", "time": "17:12:00", "reading": 6.94 },
		{"date": "1991-06-11", "time": "22:03:00", "reading": 5.22 },
		{"date": "1991-06-12", "time": "08:25:00", "reading": 3.06 },
		{"date": "1991-06-12", "time": "12:53:00", "reading": 11.33 },
		{"date": "1991-06-12", "time": "17:07:00", "reading": 4.11 },
		{"date": "1991-06-12", "time": "22:56:00", "reading": 11.72 },
		{"date": "1991-06-13", "time": "08:45:00", "reading": 12.94 },
		{"date": "1991-06-13", "time": "12:52:00", "reading": 10.00 },
		{"date": "1991-06-13", "time": "17:10:00", "reading": 10.00 },
		{"date": "1991-06-13", "time": "22:13:00", "reading": 5.78 },
		{"date": "1991-06-14", "time": "04:00:00", "reading": 1.94 },
		{"date": "1991-06-14", "time": "08:00:00", "reading": 10.78 },
		{"date": "1991-06-14", "time": "12:45:00", "reading": 10.39 },
		{"date": "1991-06-14", "time": "17:11:00", "reading": 8.83 },
		{"date": "1991-06-14", "time": "23:00:00", "reading": 9.11 },
		{"date": "1991-06-15", "time": "09:19:00", "reading": 4.22 },
		{"date": "1991-06-15", "time": "12:53:00", "reading": 4.00 },
		{"date": "1991-06-15", "time": "17:15:00", "reading": 7.72 },
		{"date": "1991-06-15", "time": "22:30:00", "reading": 4.28 },
		{"date": "1991-06-16", "time": "09:05:00", "reading": 5.22 },
		{"date": "1991-06-16", "time": "13:52:00", "reading": 3.78 },
		{"date": "1991-06-16", "time": "23:00:00", "reading": 5.22 },
		{"date": "1991-06-17", "time": "07:00:00", "reading": 7.39 },
		{"date": "1991-06-17", "time": "12:50:00", "reading": 8.83 },
		{"date": "1991-06-17", "time": "22:23:00", "reading": 12.89 },
		{"date": "1991-06-18", "time": "07:00:00", "reading": 5.72 },
		{"date": "1991-06-18", "time": "11:30:00", "reading": 3.50 },
		{"date": "1991-06-18", "time": "17:04:00", "reading": 4.17 },
		{"date": "1991-06-19", "time": "07:06:00", "reading": 14.56 },
		{"date": "1991-06-19", "time": "12:40:00", "reading": 7.44 },
		{"date": "1991-06-19", "time": "17:02:00", "reading": 7.00 },
		{"date": "1991-06-20", "time": "07:03:00", "reading": 8.44 },
		{"date": "1991-06-20", "time": "17:50:00", "reading": 3.67 },
		{"date": "1991-06-20", "time": "21:49:00", "reading": 6.28 },
		{"date": "1991-06-21", "time": "07:55:00", "reading": 11.50 },
		{"date": "1991-06-21", "time": "12:15:00", "reading": 7.11 },
		{"date": "1991-06-21", "time": "22:06:00", "reading": 14.94 },
		{"date": "1991-06-22", "time": "08:58:00", "reading": 7.89 },
		{"date": "1991-06-22", "time": "12:17:00", "reading": 3.72 },
		{"date": "1991-06-22", "time": "17:15:00", "reading": 4.39 },
		{"date": "1991-06-22", "time": "23:00:00", "reading": 4.89 },
		{"date": "1991-06-23", "time": "08:45:00", "reading": 10.22 },
		{"date": "1991-06-23", "time": "12:45:00", "reading": 12.17 },
		{"date": "1991-06-23", "time": "17:04:00", "reading": 4.67 },
		{"date": "1991-06-23", "time": "23:06:00", "reading": 7.33 },
		{"date": "1991-06-24", "time": "07:02:00", "reading": 6.28 },
		{"date": "1991-06-24", "time": "16:54:00", "reading": 12.06 },
		{"date": "1991-06-25", "time": "07:06:00", "reading": 7.89 },
		{"date": "1991-06-25", "time": "12:37:00", "reading": 7.39 },
		{"date": "1991-06-25", "time": "17:30:00", "reading": 9.56 },
		{"date": "1991-06-25", "time": "22:49:00", "reading": 6.22 },
		{"date": "1991-06-26", "time": "07:05:00", "reading": 9.33 },
		{"date": "1991-06-26", "time": "17:21:00", "reading": 6.33 },
		{"date": "1991-06-26", "time": "22:43:00", "reading": 3.22 },
		{"date": "1991-06-27", "time": "07:04:00", "reading": 14.72 },
		{"date": "1991-06-27", "time": "23:04:00", "reading": 11.39 },
		{"date": "1991-06-28", "time": "07:52:00", "reading": 11.44 },
		{"date": "1991-06-28", "time": "12:43:00", "reading": 4.39 },
		{"date": "1991-06-28", "time": "22:15:00", "reading": 13.94 },
		{"date": "1991-06-29", "time": "09:35:00", "reading": 14.61 },
		{"date": "1991-06-29", "time": "14:00:00", "reading": 4.44 },
		{"date": "1991-06-29", "time": "17:09:00", "reading": 2.83 },
		{"date": "1991-06-30", "time": "09:38:00", "reading": 10.72 },
		{"date": "1991-06-30", "time": "12:06:00", "reading": 17.00 },
		{"date": "1991-06-30", "time": "17:21:00", "reading": 8.67 },
		{"date": "1991-06-30", "time": "22:38:00", "reading": 16.83 },
		{"date": "1991-07-01", "time": "07:07:00", "reading": 10.94 },
		{"date": "1991-07-01", "time": "12:33:00", "reading": 7.56 },
		{"date": "1991-07-01", "time": "18:05:00", "reading": 10.06 },
		{"date": "1991-07-01", "time": "22:15:00", "reading": 8.11 },
		{"date": "1991-07-02", "time": "06:56:00", "reading": 3.67 },
		{"date": "1991-07-02", "time": "12:40:00", "reading": 4.22 },
		{"date": "1991-07-02", "time": "17:11:00", "reading": 10.72 },
		{"date": "1991-07-02", "time": "22:49:00", "reading": 5.61 },
		{"date": "1991-07-03", "time": "07:07:00", "reading": 14.17 },
		{"date": "1991-07-03", "time": "12:32:00", "reading": 6.28 },
		{"date": "1991-07-03", "time": "17:12:00", "reading": 11.00 },
		{"date": "1991-07-04", "time": "09:07:00", "reading": 14.83 },
		{"date": "1991-07-04", "time": "13:38:00", "reading": 10.17 },
		{"date": "1991-07-04", "time": "22:40:00", "reading": 15.17 },
		{"date": "1991-07-05", "time": "08:26:00", "reading": 14.22 },
		{"date": "1991-07-05", "time": "17:36:00", "reading": 8.56 },
		{"date": "1991-07-05", "time": "22:55:00", "reading": 14.39 },
		{"date": "1991-07-06", "time": "09:15:00", "reading": 9.22 },
		{"date": "1991-07-06", "time": "17:33:00", "reading": 12.33 },
		{"date": "1991-07-07", "time": "09:43:00", "reading": 10.11 },
		{"date": "1991-07-07", "time": "13:17:00", "reading": 3.28 },
		{"date": "1991-07-07", "time": "17:35:00", "reading": 5.72 },
		{"date": "1991-07-07", "time": "23:00:00", "reading": 12.50 },
		{"date": "1991-07-08", "time": "07:07:00", "reading": 9.39 },
		{"date": "1991-07-08", "time": "17:28:00", "reading": 7.11 },
		{"date": "1991-07-08", "time": "22:22:00", "reading": 9.83 },
		{"date": "1991-07-09", "time": "07:08:00", "reading": 5.22 },
		{"date": "1991-07-09", "time": "12:38:00", "reading": 4.11 },
		{"date": "1991-07-09", "time": "17:40:00", "reading": 12.72 },
		{"date": "1991-07-09", "time": "22:35:00", "reading": 8.06 },
		{"date": "1991-07-10", "time": "07:01:00", "reading": 10.22 },
		{"date": "1991-07-10", "time": "12:32:00", "reading": 3.39 },
		{"date": "1991-07-10", "time": "17:11:00", "reading": 15.06 },
		{"date": "1991-07-10", "time": "22:46:00", "reading": 9.00 },
		{"date": "1991-07-11", "time": "07:06:00", "reading": 7.17 },
		{"date": "1991-07-11", "time": "12:38:00", "reading": 6.78 },
		{"date": "1991-07-12", "time": "08:12:00", "reading": 14.33 },
		{"date": "1991-07-12", "time": "11:30:00", "reading": 14.83 },
		{"date": "1991-07-12", "time": "17:15:00", "reading": 4.94 },
		{"date": "1991-07-12", "time": "21:22:00", "reading": 10.44 },
		{"date": "1991-07-13", "time": "07:52:00", "reading": 13.94 },
		{"date": "1991-07-13", "time": "13:11:00", "reading": 11.50 },
		{"date": "1991-07-14", "time": "08:38:00", "reading": 12.50 },
		{"date": "1991-07-14", "time": "17:52:00", "reading": 10.61 },
		{"date": "1991-07-15", "time": "06:57:00", "reading": 5.94 },
		{"date": "1991-07-15", "time": "16:56:00", "reading": 12.56 },
		{"date": "1991-07-15", "time": "22:07:00", "reading": 8.78 },
		{"date": "1991-07-16", "time": "07:06:00", "reading": 9.89 },
		{"date": "1991-07-16", "time": "12:51:00", "reading": 10.50 },
		{"date": "1991-07-16", "time": "17:06:00", "reading": 11.11 },
		{"date": "1991-07-16", "time": "22:51:00", "reading": 3.72 },
		{"date": "1991-07-17", "time": "06:59:00", "reading": 6.72 },
		{"date": "1991-07-17", "time": "13:02:00", "reading": 7.56 },
		{"date": "1991-07-17", "time": "17:34:00", "reading": 11.50 },
		{"date": "1991-07-18", "time": "07:04:00", "reading": 6.06 },
		{"date": "1991-07-18", "time": "17:51:00", "reading": 11.28 },
		{"date": "1991-07-18", "time": "22:22:00", "reading": 5.06 },
		{"date": "1991-07-19", "time": "08:25:00", "reading": 7.22 },
		{"date": "1991-07-19", "time": "17:47:00", "reading": 10.83 },
		{"date": "1991-07-20", "time": "08:35:00", "reading": 14.28 },
		{"date": "1991-07-20", "time": "17:20:00", "reading": 11.17 },
		{"date": "1991-07-20", "time": "21:25:00", "reading": 11.44 },
		{"date": "1991-07-21", "time": "08:05:00", "reading": 8.50 },
		{"date": "1991-07-21", "time": "17:52:00", "reading": 4.56 },
		{"date": "1991-07-22", "time": "07:01:00", "reading": 3.28 },
		{"date": "1991-07-22", "time": "17:07:00", "reading": 4.50 },
		{"date": "1991-07-23", "time": "07:03:00", "reading": 14.50 },
		{"date": "1991-07-23", "time": "17:39:00", "reading": 9.94 },
		{"date": "1991-07-24", "time": "07:00:00", "reading": 6.17 },
		{"date": "1991-07-24", "time": "12:35:00", "reading": 7.33 },
		{"date": "1991-07-24", "time": "17:27:00", "reading": 10.28 },
		{"date": "1991-07-25", "time": "07:00:00", "reading": 6.56 },
		{"date": "1991-07-25", "time": "12:53:00", "reading": 4.39 },
		{"date": "1991-07-25", "time": "22:58:00", "reading": 8.89 },
		{"date": "1991-07-26", "time": "07:54:00", "reading": 3.89 },
		{"date": "1991-07-27", "time": "09:25:00", "reading": 6.83 },
		{"date": "1991-07-27", "time": "17:10:00", "reading": 8.17 },
		{"date": "1991-07-27", "time": "23:30:00", "reading": 6.33 },
		{"date": "1991-07-28", "time": "10:00:00", "reading": 8.89 },
		{"date": "1991-07-28", "time": "17:30:00", "reading": 11.56 },
		{"date": "1991-07-29", "time": "07:55:00", "reading": 4.83 },
		{"date": "1991-07-29", "time": "12:23:00", "reading": 3.00 },
		{"date": "1991-07-29", "time": "17:45:00", "reading": 13.17 },
		{"date": "1991-07-29", "time": "22:08:00", "reading": 3.44 },
		{"date": "1991-07-30", "time": "08:11:00", "reading": 11.33 },
		{"date": "1991-07-30", "time": "18:00:00", "reading": 13.72 },
		{"date": "1991-07-30", "time": "22:27:00", "reading": 8.00 },
		{"date": "1991-07-31", "time": "08:28:00", "reading": 6.06 },
		{"date": "1991-07-31", "time": "13:15:00", "reading": 9.00 },
		{"date": "1991-07-31", "time": "17:38:00", "reading": 6.50 },
		{"date": "1991-07-31", "time": "21:48:00", "reading": 8.28 },
		{"date": "1991-08-01", "time": "08:30:00", "reading": 5.00 },
		{"date": "1991-08-01", "time": "17:30:00", "reading": 7.39 },
		{"date": "1991-08-01", "time": "23:25:00", "reading": 5.78 },
		{"date": "1991-08-02", "time": "08:00:00", "reading": 4.39 },
		{"date": "1991-08-02", "time": "12:49:00", "reading": 8.44 },
		{"date": "1991-08-02", "time": "17:30:00", "reading": 4.33 },
		{"date": "1991-08-02", "time": "22:38:00", "reading": 12.11 },
		{"date": "1991-08-03", "time": "05:30:00", "reading": 13.56 },
		{"date": "1991-08-03", "time": "18:00:00", "reading": 14.28 },
		{"date": "1991-08-04", "time": "08:00:00", "reading": 13.67 },
		{"date": "1991-08-05", "time": "08:00:00", "reading": 13.00 },
		{"date": "1991-08-05", "time": "18:00:00", "reading": 9.50 },
		{"date": "1991-08-05", "time": "22:30:00", "reading": 6.11 },
		{"date": "1991-08-06", "time": "08:22:00", "reading": 5.61 },
		{"date": "1991-08-06", "time": "18:15:00", "reading": 8.72 },
		{"date": "1991-08-07", "time": "07:51:00", "reading": 9.17 },
		{"date": "1991-08-07", "time": "18:20:00", "reading": 13.78 },
		{"date": "1991-08-08", "time": "08:45:00", "reading": 13.72 },
		{"date": "1991-08-09", "time": "07:38:00", "reading": 18.61 },
		{"date": "1991-08-09", "time": "12:30:00", "reading": 11.06 },
		{"date": "1991-08-10", "time": "08:45:00", "reading": 11.17 },
		{"date": "1991-08-11", "time": "06:45:00", "reading": 11.61 },
		{"date": "1991-08-12", "time": "08:20:00", "reading": 7.17 },
		{"date": "1991-08-13", "time": "08:45:00", "reading": 11.06 },
		{"date": "1991-08-13", "time": "18:00:00", "reading": 7.78 },
		{"date": "1991-08-14", "time": "08:50:00", "reading": 13.83 },
		{"date": "1991-08-15", "time": "08:15:00", "reading": 13.67 },
		{"date": "1991-08-15", "time": "18:00:00", "reading": 9.61 },
		{"date": "1991-08-16", "time": "06:15:00", "reading": 13.94 },
		{"date": "1991-08-16", "time": "22:20:00", "reading": 17.17 },
		{"date": "1991-08-17", "time": "07:45:00", "reading": 8.83 },
		{"date": "1991-08-18", "time": "18:00:00", "reading": 5.28 },
		{"date": "1991-08-18", "time": "23:15:00", "reading": 7.78 },
		{"date": "1991-08-19", "time": "08:30:00", "reading": 5.72 },
		{"date": "1991-08-19", "time": "19:30:00", "reading": 15.83 },
		{"date": "1991-08-19", "time": "22:22:00", "reading": 5.72 },
		{"date": "1991-08-20", "time": "08:55:00", "reading": 5.44 },
		{"date": "1991-08-20", "time": "05:56:00", "reading": 4.44 },
		{"date": "1991-08-21", "time": "09:15:00", "reading": 9.06 },
		{"date": "1991-08-22", "time": "08:22:00", "reading": 3.28 },
		{"date": "1991-08-23", "time": "06:25:00", "reading": 7.67 },
		{"date": "1991-08-24", "time": "07:30:00", "reading": 13.94 },
		{"date": "1991-08-24", "time": "17:58:00", "reading": 13.67 },
		{"date": "1991-08-24", "time": "22:59:00", "reading": 7.94 },
		{"date": "1991-08-25", "time": "09:50:00", "reading": 16.28 },
		{"date": "1991-08-25", "time": "12:31:00", "reading": 16.33 },
		{"date": "1991-08-25", "time": "17:50:00", "reading": 6.28 },
		{"date": "1991-08-25", "time": "22:22:00", "reading": 15.78 },
		{"date": "1991-08-26", "time": "08:33:00", "reading": 4.94 },
		{"date": "1991-08-26", "time": "16:54:00", "reading": 6.00 },
		{"date": "1991-08-26", "time": "22:32:00", "reading": 5.22 },
		{"date": "1991-08-27", "time": "08:53:00", "reading": 8.44 },
		{"date": "1991-08-27", "time": "14:57:00", "reading": 6.61 },
		{"date": "1991-08-27", "time": "16:58:00", "reading": 9.44 },
		{"date": "1991-08-28", "time": "08:28:00", "reading": 15.72 },
		{"date": "1991-08-28", "time": "22:04:00", "reading": 10.28 },
		{"date": "1991-08-29", "time": "08:15:00", "reading": 7.50 },
		{"date": "1991-08-29", "time": "17:10:00", "reading": 10.22 },
		{"date": "1991-08-30", "time": "09:04:00", "reading": 14.06 },
		{"date": "1991-08-30", "time": "18:01:00", "reading": 10.50 },
		{"date": "1991-08-31", "time": "09:38:00", "reading": 9.17 },
		{"date": "1991-08-31", "time": "17:53:00", "reading": 6.28 },
		{"date": "1991-08-31", "time": "23:03:00", "reading": 15.11 },
		{"date": "1991-09-01", "time": "09:02:00", "reading": 10.17 },
		{"date": "1991-09-01", "time": "17:41:00", "reading": 13.83 },
		{"date": "1991-09-01", "time": "23:32:00", "reading": 9.67 },
		{"date": "1991-09-02", "time": "08:51:00", "reading": 9.33 },
		{"date": "1991-09-02", "time": "17:30:00", "reading": 3.39 },
		{"date": "1991-09-02", "time": "23:00:00", "reading": 8.61 },
		{"date": "1991-09-03", "time": "07:20:00", "reading": 6.11 },
	]		

	var getTimeFromRecord = function(record){
		// Browser on Android 2.1 has issues parsing dates - doing it manually.
		var year = parseInt(record.date.substring(0,4), 10);
		var month = parseInt(record.date.substring(5,7), 10);
		var day = parseInt(record.date.substring(8,10), 10);
		var hour = parseInt(record.time.substring(0,2), 10);
		var min = parseInt(record.time.substring(3,5), 10);
		var sec = parseInt(record.time.substring(6,8), 10);
		return new Date(year, month, day, hour, min, sec, 0);
	};
		
	var today = new Date();
	today.setMilliseconds(0);
	today.setMinutes(0);
	today.setHours(0);
	
	var lastReading = getTimeFromRecord(test_data[test_data.length - 1]);
	lastReading.setMilliseconds(0);
	lastReading.setMinutes(0);
	lastReading.setHours(0);

	var dateDifference = today.getTime() - lastReading.getTime();

	for (var index = 0; index < test_data.length; index++){
		var recordDate = getTimeFromRecord(test_data[index]);
		var newDate = new Date(recordDate.getTime() + dateDifference);
		test_data[index].adjustedDatetime = newDate.toISOString();
	}
	return test_data;
};