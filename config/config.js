/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showPeriod: true,
				showPeriodUpper: true,
				dateFormat: "DDDD, L",
				timezone: "America/New_York"
				
			}
		},
        {
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Morgantown, West Virginia ",
				locationID: "4815352",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "c8dbe659339155fb8b2d0efed44bb377"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Morgantown, West Virginia",
				locationID: "4815352",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "c8dbe659339155fb8b2d0efed44bb377"
			}
		},
        {
            module: 'phone_notification',
            position: 'bottom_right',
            header: 'Phone Notifications',
            config: {
                accessToken: 'o.bNl2HB3Sm8ydlWpdVXRFOFERUxBW3ff1',
                numberOfNotifications: 5,
                displayNotificationIcon: true,
                displayMessage: true,
                displayCount: false,
                alert: false,
                fade: true,
                maxCharacters: 50
            }
        },
        
/////////////////////
/// Sports optionals
//        {
//            module: 'MMM-NHL',
//            position: 'top_left'
//          
//        },
//        {
//            module: 'MMM-SoccerLiveScore',
//            position: 'top_left',
//            header: 'Live-Scores',
//            config: {
//                leagues: [1],
//                showNames: true,
//                showLogos: true,
//                displayTime: 60 * 1000,
//                showTables: false
//            }
//        },
/////////////////
        
/////////////////
// money opionals
        {
            module: 'MMM-bitcoin',
            position: 'top_right',
            config: {
                updateInterval: 60000 // update interval in milliseconds
            }
        },
        {
            module: 'MMM-Stock',
            position: 'top_left',
            config: {
                companies: ['MSFT', 'GOOG', 'ORCL', 'FB'],  
                currency: 'USD' 
            }
        },


//		{
//			module: "compliments",
//			position: "lower_third"
//		},
		
// 		{
// 			module: "newsfeed",
// 			position: "bottom_bar",
// 			config: {
// 				feeds: [
// 					{
// 						title: "New York Times",
// 						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
// 					}
// 				],
// 				showSourceTitle: true,
// 				showPublishDate: true
// 			}
// 		},
        
//////////////////
//music-travel optionals
		{
			module: "applemusic",
			position: 'top_center'
		},
		{
            module: "googlemap",
            position: 'bottom_center',
            config: {
                apikey: 'AIzaSyAj23TTKrPipd5F3tu3Rq9eMaa2IuaiVDc',
                origin: '892 Stewart Street Morgantown West Virginia',
                destination: '215 Don Knotts Boulevard Morgantown West Virginia'
            }
		},
        
        
//////////////
// business optionals
//		{
//			module: "calendar",
//			header: "US Holidays",
//			position: "top_left",
//			config: {
//				calendars: [
//					{
//						symbol: "calendar-check-o ",
//						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
//					}
//				]
//			}
//		},
        {
            module: 'email',
            position: 'bottom_left',
            header: 'Email',
            config: {
                user: 'cmwalsh@mix.wvu.edu',
                password: 'Odindog1.',
                host: 'imap.gmail.com',
                port: 993,
                tls: true,
                authTimeout: 10000,
                numberOfEmails: 3,
                fade: true
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config; }
