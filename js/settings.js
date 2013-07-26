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
	/*
	+'<div id="searchForm">'
	+'<input type="text" id="searchPlaces"/>'
	+'<input type="button" id="searchMe" value="Search"/>'
	+'</div>'
	*/
	+'<div id="coordinations-container">'
	+'<b>Your current location information:</b><br/>'
	+'Latitude : ' + '<span id="latt">' +LocalData.getData("latitude") +'</span>'
	+'<br/>'
	+'Longitude : ' + '<span id="longi">' +LocalData.getData("longitude") +'</span>'
	+'</div>'
	+'<div id="search-location-container"><a id="pack-button" href="#">Change location</a></div>'
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

},

backToMain : function(){
	document.getElementById('mysettings').classList.add("ClosePostAnim");
	document.getElementById('mysettings').classList.remove("OpenPostAnim");
	setTimeout(function() {
		settings.remove('mysettings');
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
	+'</div>'
	+'</section>';
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
	document.getElementById('backToMainWindow').addEventListener('click', function backMain(){
	document.getElementById('backToMainWindow').removeEventListener('click',backMain);
	settings.backToMain();
	});
	}, 900);
},

refreshSettings : function(){
	document.getElementById('latt').innerHTML = LocalData.getData("latitude");
	document.getElementById('longi').innerHTML = LocalData.getData("longitude")
}


}