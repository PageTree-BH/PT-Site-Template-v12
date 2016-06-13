    /*
global 
PT:true, SITE:true, 

ScrollMagic:true, 
TimelineMax:true, TweenMax:true, TweenLite:true, SplitText:true, 
Linear:true, Elastic:true, Power1:true, Power2:true, Power3:true, Power4:true, Bounce:true, 

FastClick:true, enquire:true, Justice:true, 
Modernizr:true, jQuery:true, ssm:true

*/
    


// @codekit-prepend "pt/pt-base-v12.js"  
 
    
 

PT._isDevMode = true;

$(function() { 
    // console.log('site specific js file');


    SITE.init();


});



 
 
  

 

var SITE = { 

    _VAR:''
    
    ,init: function() {

        // console.log('SITE.init()');

        // PT.monitorFPS();
        
        PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);

    }




 
    ,newFunction: function() { }




};
 







