var notifyMe = {

icon : "/style/icons/set2/icon60.png",

notify : function(id,body){
navigator.mozNotification.createNotification(id,body, this.icon).show();
}



}