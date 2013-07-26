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
+'<div class="board" id="board">'
+'<div id="searchForm">'
+'<input type="text" id="searchPlaces"/>'
+'<input type="button" id="searchMe" value="Search"/>'
+'</div>'

+'</div>'
+'</section>';

document.getElementById('backToMainWindow').addEventListener('click', function backMain(){
document.getElementById('backToMainWindow').removeEventListener('click',backMain);
settings.backToMain();
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
}
/*


*/





}