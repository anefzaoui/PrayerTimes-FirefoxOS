var LocalData = {
    storeData : function strDt(name, content)
    {
        if(!name || !content)
        {
            console.write("host or port is undefined!");
            return;
        }
            localStorage.setItem(name, content);
    },

    getData : function gtDt(name)
    {
            return localStorage.getItem(name);
    },

    clear : function clrDt()
    {
            localStorage.clear();
    }

}