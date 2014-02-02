var ld = {

  /* panels */
  root : document.getElementById('root'),
  settingsPanel: document.getElementById('settingsPanel'),
  
  
  /* buttons */
  settingsBtn : document.getElementById('settingsBtn'),
  rootBtn : document.getElementById('rootBtn'),
  
  setEvListeners : function(){
    settingsBtn.addEventListener('click',function(){
      settingsPanel.classList.add('current');
      root.classList.remove('current');
      root.classList.add('previous');
    });
    rootBtn.addEventListener('click',function(){
      root.classList.add('current');
      settingsPanel.classList.remove('current');
      settingsPanel.classList.add('forward');
    });
    
	
  },
  updateSettingsView: function(){
    
  },
  
  setParamsListeners:function(){
    
  },
  init: function(){
    this.setEvListeners();
    this.setParamsListeners();
  }

};
window.addEventListener('load', function loadSettings() {
  window.removeEventListener('load', loadSettings);
  
	document.addEventListener('click', function settings_sectionOpenClick(e) {
    var target = e.target;
    var nodeName = target.nodeName.toLowerCase();
    if (nodeName != 'a') {
      return;
    }

    var href = target.getAttribute('href');
    // skips the following case:
    // 1. no href, which is not panel
    // 2. href is not a hash which is not a panel
    // 3. href equals # which is translated with loadPanel function, they are
    // external links.
    if (!href || !href.startsWith('#') || href === '#') {
      return;
    }

  });  
  ld.init();
});

