"use strict";

var utils = {
  prayers : ["fajr","dhuhr","asr","maghrib","isha"],
  
  defaultZoneParams: {
    latitude:45,
    longitude:15,
    time_zone:1
  },
  
  defaultAppParams: {
    notifyMe: false,
    before: 300000,
    
    fajrNotify: false,
    dhuhrNotify: false,
    asrNotify: false,
    maghribNotify: false,
    ishaNotify: false,
    
    playAzan: false,
    
    fajrAzan: false,
    dhuhrAzan: false,
    asrAzan: false,
    maghribAzan: false,
    ishaAzan: false
  },
  
  
  renderView: function(){
    /**
     * 
     * This function Builds all the main elements where
     * Every element point to a prayer.
     * If excuted more than once, it deletes old nodes
     * And starts over drawing them again to avoid
     * Having multiple copies of the same element.
     * 
     * Structure of every node:
     * 
     * <div class="item" id="item-fajr">
     * <div id="name">Fajr</div>
     * <div class="time" id="fajr">00:00</div>
     * </div>
     * 
     **/
    
    var board = document.getElementById("board");
    var FCN = board.firstChild;
    while( FCN ) {
      board.removeChild( FCN );
      FCN = board.firstChild;
    }
    
    for (var i=0;i<5;i++){
      var container = document.createElement("div");
      container.id="item-"+this.prayers[i];
      container.classList.add("item");
      
      var details_name = document.createElement("div");
      details_name.id="name";
      details_name.textContent=this.prayers[i];
      
      var details_time = document.createElement("div");
      details_time.id=this.prayers[i];
      details_time.classList.add("time");
      details_time.textContent="00:00";
      
      container.appendChild(details_name);
      container.appendChild(details_time);
      board.appendChild(container);
    }
  },
  
  appendTimes: function(object){
    var PT = new PrayTimes('ISNA');
    var times = PT.getTimes(new Date(), [object.latitude, object.longitude], object.time_zone);
    for(var i=0;i<5;i++){
      var aPray = this.prayers[i];
      var singlePrayer = document.getElementById(aPray);
      switch(i){
        case 0:
          singlePrayer.innerHTML = times.fajr
          break;
        case 1:
          singlePrayer.innerHTML = times.dhuhr
          break;
        case 2:
          singlePrayer.innerHTML = times.asr
          break;
        case 3:
          singlePrayer.innerHTML = times.maghrib
          break;
        case 4:
          singlePrayer.innerHTML = times.isha;
          break;
      }
    }
  }



};

window.addEventListener('load', function readerOnLoad(evt) {
  window.removeEventListener('load', readerOnLoad);
  utils.renderView();
  utils.appendTimes(utils.defaultZoneParams);
  
  //test begin
  var testbtn = document.getElementById("gps");
  testbtn.addEventListener('click', function(){
    notify.init("Prayer Time","Asr Prayer will happen after 5 minutes");
  });
  // test end
  
});
