var PT = {

	AllSet : false,

	tz:null,

	longitude:null,

	latitude:null,

	lastTimeChecked : null,

	date : null,

	times : null,

	currentdate : null,

	datetime:null,
	
	calculate : function(){
		PT.AllSet = LocalData.getData("AllSet");
		var weekday=new Array(7);
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
		this.currentdate = new Date(); 
		this.datetime = "Today is: "
				+ weekday[this.currentdate.getDay()] + " "
				+ this.currentdate.getDate() + "/"
                + (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear();
                
		if(PT.AllSet){
		PT.latitude = LocalData.getData("latitude");
		PT.longitude = LocalData.getData("longitude");
		PT.tz = LocalData.getData("tz");
	
		this.times = prayTimes.getTimes(new Date(), [PT.latitude, PT.longitude], PT.tz);
		document.getElementById('now').innerHTML = this.datetime;
		document.getElementById('fajr').innerHTML = this.times['fajr'];
		document.getElementById('dhuhr').innerHTML = this.times['dhuhr'];
		document.getElementById('asr').innerHTML = this.times['asr'];
		document.getElementById('maghrib').innerHTML = this.times['maghrib'];
		document.getElementById('isha').innerHTML = this.times['isha'];
		
		}
		else{
		PT.refresh();
		}
	},
	
	
	refresh: function(){
		navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
		function locationSuccess(position) {
        PT.latitude = position.coords.latitude;
		PT.longitude = position.coords.longitude;
		PT.lastTimeChecked = new Date();
		PT.tz = -PT.lastTimeChecked.getTimezoneOffset()/60;
		PT.AllSet=true;
		
		LocalData.storeData("latitude",PT.latitude);
		LocalData.storeData("longitude",PT.longitude);
		LocalData.storeData("lastTimeChecked",PT.lastTimeChecked);
		LocalData.storeData("tz",PT.tz);
		LocalData.storeData("AllSet",PT.AllSet);
		PT.calculate();
		}
		function locationFail() {
			alert("Oops, could not find you.");
		}
	
	}
	
	
	}
	
	window.addEventListener('load', function readerOnLoad(evt) {
	window.removeEventListener('load', readerOnLoad);
	document.getElementById('refresh').addEventListener('click',function rfrsh__(){
	document.getElementById('refresh').addEventListener('click',rfrsh__);
		PT.refresh();
	});
	
	document.getElementById('settingsWindow').addEventListener('click',function openSettings(){
	document.getElementById('settingsWindow').removeEventListener('click', openSettings);
	settings.openSettingsWindow();
	});
	
	
	
	PT.calculate();
	window.setInterval(function(){
	PT.calculate;
	console.log("calculating...");
	}, 3600000);	
	});