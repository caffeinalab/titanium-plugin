//Application Window Component Constructor
function ApplicationWindow() {
    "use strict";
    
    // load component dependencies
    var FirstView = require('ui/common/FirstView'),

    // create component instance
    self = Ti.UI.createWindow({
        backgroundColor:'#ffffff',
        navBarHidden:true,
        exitOnClose:true
    }),

    // construct UI
    firstView = new FirstView();
    
    self.add(firstView);

    return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
