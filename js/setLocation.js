var Loc = {

newlat: null,
newlong : null,
chosen: 1,

loadJSON : function(url,scriptid,callback){
var headID = document.getElementsByTagName("head")[0];
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = url+'&callback='+callback;
newScript.id = scriptid;
headID.appendChild(newScript);
console.log("===== Main Json Successfullly Loaded");

},

parseData : function(obj){
var numberOfElements = obj.totalResultsCount;
var res='';
for (var i=0;i<numberOfElements;i++){
res='<div class="item" id="item'+i+'">'
+'<h1>'+obj["geonames"][i].adminName1+' In '+obj["geonames"][i].countryName+'</h1>'
+'<h2> Lat.: '+obj["geonames"][i].lat+' And Long.: '+obj["geonames"][i].lng+'</h2>'
+'</div>';
document.getElementById('SearchResults').innerHTML+=res;
}
for (var i=0;i<numberOfElements;i++){
document.getElementById("item"+i).addEventListener('click',function(){
this.chosen = i;
Loc.setOption(obj);
Loc.saveOption();
});
}
settings.remove('loadingLoading');
settings.checkAndSetSize();
},

setOption : function(obj){
Loc.newlat = obj["geonames"][this.chosen].lat;
Loc.newlong = obj["geonames"][this.chosen].lng;
},

saveOption : function(){
LocalData.storeData("latitude",this.newlat);
LocalData.storeData("longitude",this.newlong);
},

init : function(){
var query=document.getElementById("searchPlaces").value;
var url="http://api.geonames.org/search?name="+query+"&username=nefzaoui&type=json&isNameRequired=true&orderby=relevance&fuzzy=0.8",
id="searchLocation",
callback="Loc.parseData";
document.getElementById("SearchResults").innerHTML="<div id='loadingLoading' class='loadingIcon'></div>";
this.loadJSON(url,id,callback)

}

}