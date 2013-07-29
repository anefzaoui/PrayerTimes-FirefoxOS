var settings = {

remove : function remove(id){
	var elem;
	return (elem=document.getElementById(id)).parentNode.removeChild(elem);
},

openSettingsWindow : function(){
	document.getElementById("Roots").innerHTML+=''
	+'<section class="OpenPostAnim" id="mysettings">'
	+'<header>'
	+'<a class="back" id="backToMainWindow" href="#"></a>'
	+'<h1>Settings</h1>'
	+'</header>'
	+'<div class="Largeboard" id="Largeboard">'
	+'<div id="coordinations-container">'
	+'<b>Your current location information:</b><br/>'
	+'Latitude : ' + '<span id="latt">' +LocalData.getData("latitude") +'</span>'
	+'<br/>'
	+'Longitude : ' + '<span id="longi">' +LocalData.getData("longitude") +'</span>'
	+'</div>'
	+'<div id="search-location-container"><a id="openSearchWindowButton" class="pack-button" href="#">Change location</a></div>'
	+'<br/>'
	+'<div id="sound-container"><a id="openSalatWindowButton" class="pack-button" href="#">Sound and notifications</a></div>'
	+'<div id="about-info"><br/>'
	+'This App uses GeoNames public data while searching for cities.'
	+'<br/>'
	+'Prayer Times Calculations are based on the prayertimes.org source code.'
	+'<br/><br/>'
	+'<a id="version-number" class="pack-plain-button">Version '+info.version+'</a>'
	+'</div>'
	+'</div>'
	+'</section>';

	document.getElementById('backToMainWindow').addEventListener('click', function backMain(){
	document.getElementById('backToMainWindow').removeEventListener('click',backMain);
	settings.backToMain();
	});
	document.getElementById('search-location-container').addEventListener('click', function backMain(){
	document.getElementById('search-location-container').removeEventListener('click',backMain);
	settings.openLocationWindow();
	});
	document.getElementById('sound-container').addEventListener('click', function back2Main(){
	document.getElementById('sound-container').removeEventListener('click',back2Main);
	settings.openSoundWindow();
	});

},

backToMain : function(){
	document.getElementById('mysettings').classList.add("ClosePostAnim");
	document.getElementById('mysettings').classList.remove("OpenPostAnim");
	setTimeout(function() {
		settings.remove('mysettings');
		PT.calculate();
		document.getElementById('refresh').addEventListener('click',function refrsh__(){
		document.getElementById('refresh').addEventListener('click',refrsh__);
		PT.refresh();
		});
		document.getElementById('settingsWindow').addEventListener('click',function openSettings(){
		document.getElementById('settingsWindow').removeEventListener('click', openSettings);
		settings.openSettingsWindow();
		});
		
	}, 900);
},

/* location search window */

openLocationWindow : function(){
	document.getElementById("Roots").innerHTML+=''
	+'<section class="OpenPostAnim" id="location-window">'
	+'<header>'
	+'<a class="back" id="backToSettingsWindow" href="#"></a>'
	+'<h1>Search for Location</h1>'
	+'</header>'
	+'<div class="Largeboard" id="Largeboard">'

	+'<div id="searchForm">'
	+'<input type="text" id="searchPlaces"/>'
	+'<a id="searchLocationButton" class="pack-button" href="#">Search location</a>'
	+'</div>'
	+'<div class="SearchResults" id="SearchResults"></div>'
	+'</div>'
	+'</section>';
	document.getElementById('searchLocationButton').addEventListener('click', function initsearch(){
	//document.getElementById('searchLocationButton').removeEventListener('click',initsearch);
	Loc.init();
	});
	document.getElementById('backToSettingsWindow').addEventListener('click', function backSettings(){
	document.getElementById('backToSettingsWindow').removeEventListener('click',backSettings);
	settings.backToSettings();
	});
},

backToSettings : function(){
	document.getElementById('location-window').classList.add("ClosePostAnim");
	document.getElementById('location-window').classList.remove("OpenPostAnim");
	setTimeout(function() {
	settings.refreshSettings();
	settings.remove('location-window');
	document.getElementById('search-location-container').addEventListener('click',function openLocationSettings(){
	document.getElementById('search-location-container').removeEventListener('click', openLocationSettings);
	settings.openLocationWindow();
	});
	document.getElementById('sound-container').addEventListener('click', function back2Main(){
	document.getElementById('sound-container').removeEventListener('click',back2Main);
	settings.openSoundWindow();
	});
	document.getElementById('backToMainWindow').addEventListener('click', function backMain(){
	document.getElementById('backToMainWindow').removeEventListener('click',backMain);
	settings.backToMain();
	});
	}, 900);
},

openSoundWindow : function(){
document.getElementById("Roots").innerHTML+=''
	+'<section class="OpenPostAnim" id="sound-window">'
	+'<header>'
	+'<a class="back" id="backToSettingsWindow_" href="#"></a>'
	+'<h1>Sound and notifications</h1>'
	+'</header>'
	+'<div class="Largeboard" id="Largeboard">'
+'<h2>Get notification for: </h2>'
+'<label class="pack-switch"><input id="sp" type="checkbox"><span></span></label><span id="sltlbl">Sobh Prayer</span><br/>'
+'<label class="pack-switch"><input id="dp" type="checkbox"><span></span></label><span id="sltlbl">Dhuhr Prayer</span><br/>'
+'<label class="pack-switch"><input id="ap" type="checkbox"><span></span></label><span id="sltlbl">Asr Prayer</span><br/>'
+'<label class="pack-switch"><input id="mp" type="checkbox"><span></span></label><span id="sltlbl">Maghreb Prayer</span><br/>'
+'<label class="pack-switch"><input id="ip" type="checkbox"><span></span></label><span id="sltlbl">Isha Prayer</span><br/>'
+'<br/>'
+'<h2>Get notifications before minutes of the prayer?</h2>'
+'<select style="z-index:5;">'
  +'<option>5 minutes</option>'
  +'<option>10 minutes</option>'
  +'<option>15 minutes</option>'
  +'<option>20 minutes</option>'
  +'<option>25 minutes</option>'
  +'<option>30 minutes</option>'
+'</select>'

	+'</div>'
	+'</section>';
	document.getElementById('backToSettingsWindow_').addEventListener('click', function back2Settings(){
	document.getElementById('backToSettingsWindow_').removeEventListener('click',back2Settings);
	settings.backToSettings__();
	});
},


backToSettings__ : function(){
	document.getElementById('sound-window').classList.add("ClosePostAnim");
	document.getElementById('sound-window').classList.remove("OpenPostAnim");
	setTimeout(function() {
	settings.refreshSettings();
	settings.remove('sound-window');
	document.getElementById('search-location-container').addEventListener('click',function openLocationSettings(){
	document.getElementById('search-location-container').removeEventListener('click', openLocationSettings);
	settings.openLocationWindow();
	});
	document.getElementById('sound-container').addEventListener('click',function openSdSettings(){
	document.getElementById('sound-container').removeEventListener('click', openSdSettings);
	settings.openSoundWindow();
	});
	document.getElementById('backToMainWindow').addEventListener('click', function back2Main(){
	document.getElementById('backToMainWindow').removeEventListener('click',back2Main);
	settings.backToMain();
	});
	}, 900);
},






checkAndSetSize : function(){
var originSize = document.getElementById('location-window').clientHeight;
var SearchBoxSize = document.getElementById('SearchResults').clientHeight;
if((originSize-180)<=SearchBoxSize){
document.getElementById('location-window').style.height = SearchBoxSize + 180 + "px";
}
else if(originSize>SearchBoxSize){
document.getElementById('location-window').style.height = "100%";
}

},
refreshSettings : function(){
	document.getElementById('latt').innerHTML = LocalData.getData("latitude");
	document.getElementById('longi').innerHTML = LocalData.getData("longitude")
}


}