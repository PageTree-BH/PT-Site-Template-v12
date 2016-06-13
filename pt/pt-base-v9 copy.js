// Custom JS Application Code

// If using JSLint for syntax debugging, include the following


/*
global 
PT:true, 
SITE:true, 
TimelineMax:true, 
TweenMax:true, 
TweenLite:true, 
SplitText:true, 
Linear:true, 
Elastic:true, 
Power1:true, 
Power2:true, 
Power3:true, 
Power4:true, 
Bounce:true, 
ScrollMagic:true, 
FastClick:true, 
enquire:true, 
Justice:true, 
ScrollMagic:true, 
Modernizr:true,
PT_UTILS:true, 
jQuery:true,
ssm:true
*/
    

 
 



    
// @codekit-prepend "pt-base-lib-bundle-v9.js"  
 

  
 


 
$(function() { 
    PT.init();
});






var PT = { 

	settings: { 
		name: "pt-base-v9.js",	
		version: "9.0.0",
		url: "pt base 9 "
	}


	,listen: function() { 
		// Application Listeners can be loaded here for easy configuration		
	}	


	,init: function() {
		// Kick off the listeners
		this.listen();
		// Application has been initalized
		// //console.log(this.settings.name + "(v" + this.settings.version + ") Started");	
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");	
	

 

        // // DETECTS IF IOS 7, WHICH DOES NOT SUPPORT VH.. .. SO WE DO SOMETHING ABOUT THAT.
        // if( navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i) ){
        //     // window.alert('ios7');
        //     $('html').addClass('no-cssvhvw');
        // }else{
        //     // window.alert('not');
        //     $('html').addClass('yes-cssvhvw');
        // }


        // ADDS BREAKPOINT SIZE INDICATOR :
        $('.viewport').prepend('<div class="pt-sizer"></div>');



        // PT.monitorFPS();

        PT.preloader();
 
        PT.fastClick();


        // if(Modernizr.addTest(){
        //     PT.animateEXTRAS(true);
        // }


        PT.runSticky();
        
        PT.runImgSwaps();
        
        
        // PT.runStickySpy();
        
        // THIS NEEDS TO BE UPADATED TO BE FULLY RESPONSIVE:
        // PT.buildSplitSticky();

        // PT.buildParallax();


    }












    //  ADDS A FPS (FramePerSecond) MONITOR TO THE PAGE:
    ,monitorFPS:function(){

        PT.addOnLoad(
            doNow
        );

        function doNow(){
            Justice.init(); 
        }
    }















    ,fastClick:function(){
        FastClick.attach(document.body);
    }






    // THIS IS THE GLOBAL SCROLLMAGIC CONTROLLER FOR ALL SCROLLING INTERACTION IN THIS FILE:
    ,SM_CTRL: new ScrollMagic.Controller({})




    // THIS IS A WAY TO ADD MULTIPLE window.onload FUNCTIONS PER PAGE.
    
    ,onLoadFuncs:[]

	,addOnLoad: function(func) {
        //console.log('adding func to onLoadFuncs[]');
        // //console.log(func);
        PT.onLoadFuncs.push(func);

        window.onload = function() {
            //console.log('!!! ON LOAD !!!');
            
            for (var i = 0; i < PT.onLoadFuncs.length; i++) { 
                var f = PT.onLoadFuncs[i];
                f();
            }

        };

    }


 



    ,preloader:function(){
        //console.log('PT.preloader()');
        
        var _pl = $('.pt-preloader');

        if(_pl.length){

            _pl.css({'display':'flex'});
            
            PT.addOnLoad( 
                fadePreloader
            );

        }else{
            console.log('there was no preloader');
        }

        function fadePreloader(){
            //console.log('fadePreloader()');

            // TweenMax.to(_pl, 0.3, {autoAlpha:0});
            TweenMax.to(_pl, 0.3, {autoAlpha:0, onComplete:function(){
                _pl.css({'display':'none'});
            }});

        }

    } 
 

















	// RETURNS THE SIZE OF THE BROWSER WINDOW, BASED ON BOOTSTRAP BREAKPOINTS
	// WE ALSO LOAD enquire.js  BUT HAVE NOT OFFICIALLY SWITCHED TO FULLY USING IT INSTEAD YET.
    ,getSize: function() {

		// GETS THE CSS PSEUDO ELEMENT OF THE #pt-sizer, WHICH IS UPDATED VIA MEDIA QUERIES IN THE CSS.
		var sizer = window.getComputedStyle(
			document.querySelector('.pt-sizer'), ':before'
		).getPropertyValue('content');

		// SOME BROWSERS INTERPRET WITH QUOTATIONS MARKS, SO WE MUST STRIP THOSE OUT.
		if(sizer.length === 4){
			sizer = sizer.substring(1,3);
		}
		return sizer; 

	}

























 
/*
    ,runStickySpy: function () {
        console.log('PT.runStickySpy()');

        // NEEDS TO RUN ON LOAD BECAUSE SOME INFO IS BASED ON HEIGHT WHICH IS BASED ON CONTENT. (i think)
        
        PT.addOnLoad(
            doNow
        );

        function doNow(){
            var elements = $("[data-pt-sticky-spy]");
            var i = 0;
            var args;


            elements.each( function(i, _thing){
                
                // //console.log( $(_thing).attr("data-pt-sticky-spy").length );

                if( $(_thing).attr("data-pt-sticky-spy").length > 1 ){

                    args = JSON.parse( _thing.getAttribute("data-pt-sticky-spy") );
                
                
                    PT.buildStickySpy( _thing, args.fully, args.peekaboo );
                }else{

                    PT.buildStickySpy( _thing );

                    // PT.buildStickySpy( _thing, args );
                    // PT.buildStickySpy( _thing );
                
                }

                // //console.log("args.fully = " + args.fully);
                // //console.log("args.peekaboo = " + args.peekaboo);

            });
        }


    }

  */











/*


    ,buildStickySpy: function (ITEM, FULLY, PEEKABOO) {
    // ,buildStickySpy: function (ITEM, ARGS) {

        // IF FULLY AND PEEKABOO ARE BLANK, SET THEM TO FALSE:
        var _FULLY = typeof FULLY !== 'undefined' ?  FULLY : true;
        var _PEEKABOO = typeof PEEKABOO !== 'undefined' ?  PEEKABOO : false;
        // var _FULLY = false;
        // var _PEEKABOO = false;



// //console.log('buildStickySpy()');

// if(typeof ARGS === undefined){
//     //console.log('it is not defined');
//     // _FULLY = true;
//     // _PEEKABOO = true; 
// }else{
//     //console.log('there are arguments');
//     // _FULLY      = typeof ARGS.fully !== 'undefined' ?  ARGS.fully : false;
//     // _PEEKABOO   = typeof ARGS.peekaboo !== 'undefined' ?  ARGS.peekaboo : false;
//     // _FULLY      = ARGS.fully;
//     // _PEEKABOO   = ARGS.peekaboo;
// }

// //console.log('ARGS.fully = ' + ARGS);
// // //console.log("_FULLY " + _FULLY);



        var menu = $(ITEM);
        var locY  = menu.offset().top;
        var totalHeight = 0;


        var scene1 = new ScrollMagic.Scene({
            triggerElement: menu
            ,triggerHook: 'onLeave'
        })
        .setPin(menu, {pushFollowers: false})
        .addTo(PT.SM_CTRL) 
        .setClassToggle(menu, "pt-stuck")   
        // .addIndicators()
        // .duration(totalHeight)
        .on("update", function(e){ 
            if(_FULLY){
                // //console.log('update');
                menu.css({width:'100%'});
            }
            // if(_FULLY && _PEEKABOO){
            if(_PEEKABOO){

                if(e.target.controller().info("scrollPos") > locY){
                    if(e.target.controller().info("scrollDirection") === "REVERSE"){
                        TweenMax.to(menu, 0.5, {top:'0'});
                    }else{
                        TweenMax.to(menu, 0.5, {top:-menu.height()});
                    }
                }
            }
        });


 
        // .on("update", function(e){ 
        //     // //console.log('update');
        //     menu.css({width:'100%'});
        // });

        // .on("enter leave", function(e){
        //     if(e.target.controller().info("scrollDirection") === "REVERSE"){
        //         TweenMax.to('.nav-indicator', 0.5, { autoAlpha:0})
        //     }else{
        //         TweenMax.to('.nav-indicator', 0.5, { autoAlpha:1})
        //     }
        // }) 
                

        
        // SCROLL SPY USING SCROLLMAGIC:
        menu.find('ul>li').each( function( index, element ){


            var SpyZoneID = $(element).find('a').attr('href');

            var SpyLink = element;

            var SpyZone = $(SpyZoneID);
 

            if($(SpyZone).length){

                //console.log("SpyZone = " + SpyZone);

                var sm_scene = new ScrollMagic.Scene()
                                .triggerElement(SpyZoneID)
                                .setClassToggle(SpyLink, "active") // add class toggle
                                // .addIndicators({name:"nav spy " +SpyZoneID, indent:100}) // add indicators (requires plugin)
                                .triggerHook('0.2')
                                // .trigger('hello')
                                // DURATION IS THE HEIGHT OF THE ANCHORED ZONE
                                // .duration($(SpyZoneID).outerHeight())  
                                .addTo(PT.SM_CTRL);


                // //console.log(sm_scene.triggerHook());
                // var spyToNumber = (SpyZone.offset().top) + $(window).height() * sm_scene.triggerHook();
                var spyToNumber = (SpyZone.offset().top) ;

                SpyZone.attr('data-pt-spy-to', spyToNumber );
                
                totalHeight += SpyZone.outerHeight();

            }else{
                //console.log('There is no matching anchor id for the SpyZone ' + SpyLink);
            }
 
        });
        





        scene1.duration(totalHeight);





        // ANIMATE TO POSITION WHEN CLICKED 
        menu.find("a[href^='#']").on('click', function(e) {

            //console.log(' -> SPY CLICKED ' +  this);

            // prevent default anchor click behavior
            e.preventDefault();

            // PT.SM_CTRL.scrollTo( $(this.hash) );    
            // PT.SM_CTRL.scrollTo( 500 );    

            //console.log('PT.SM_CTRL.scrollPos() ' + PT.SM_CTRL.scrollPos() );


            var offset = $(this.hash).offset();

            // var sms_to = $(this.hash).data('pt-spy-to') - $(window).height()*0.2;
    
            
            // WITH AND WITHOUT OFFSET OF MENU HEIGHT:
            // var sms_to = $(this.hash).data('pt-spy-to') - menu.height() + 1;
            var sms_to = $(this.hash).data('pt-spy-to');



            if (offset !== undefined){
                
                // DOES NOT WORK WHENE THE ZONES ARE PINNED
                // TweenMax.to(window, 1.5, { scrollTo:{y:offset.top - menu.height() + 1}, ease:Power4.easeInOut});                
            
                // MODIFIED TO WORK WHEN ZONES ARE PINNED
                TweenMax.to(window, 1.5, { scrollTo:{ y:sms_to }, ease:Power4.easeInOut } );                
            
            }

 
        });





    }

*/
 
 
  







    // SIMPLE STICK / PIN  USING ScrollMagic  
    ,makeSticky: function(item){
        // //console.log('makeSticky() ' + item);
        // var locY  = item.offset().top;

        var scene1 = new ScrollMagic.Scene({
            triggerElement: item
            ,triggerHook: 'onLeave'
        })
        .setPin(item, {pushFollowers: false})
        .addTo(PT.SM_CTRL);
        // .addIndicators();

    }






    ,runSticky:function(){

        // $('.pt-stickMe').each(function(i, val){
        //     PT.makeSticky( this );
        // });

        $('[data-pt-sticky]').each(function(i, val){
            PT.makeSticky( this );
            // //console.log( $(this).data('pt-sticky') );
            // //console.log(this);
        });

        // var P = $(document).children().filter(function() {
        //             return $(this).data('ptPin');
        //         });

        // PT.makeSticky( P );
        // //console.log(P);

    }










    // COPIES IMG SRC INTO CSS BACKGROUND-IMAGE.
    ,imgSwap: function(_img, _div) {
        //console.log('PT.imgSwap()');
        var IMG = _img;
        var DIV = _div;
        var IMGurl = IMG.attr('src');

        // IMG.css('visibility', 'hidden');
        IMG.css('display', 'none');

        DIV.css('background-image', 'url("'+IMGurl+'")' )
            .css('background-size', 'cover')
            .css('background-position','center');
    }



    // runImgSwaps();
    // RUNS PT.imgSwap ON A PRESET BUNCH OF CLASSSES;

    ,runImgSwaps: function() {
        // //console.log('PT.runImgSwaps()')

        $('[data-pt-imgswap]').each(function(i, val){

            // check the data attribute value and pass it along to the imgSwap function.
            // var _bgStyle = ;// 'cover' / 'contain' / 

            PT.imgSwap( $(val).find('img:first'), $(val) );
        });

    }















// I CAN'T REMEMBER WHAT THIS IS REALLY REALLY REALLY FOR:
// buildHomePlate();
/*
    ,buildHomePlate: function(_hp_) {
        // var _HP_ = $(_hp_);
        var _HP_ = _hp_;

        // if (Modernizr.touch) {
            // Start ScrollMagic code
            _HP_.height( $(window).height() - 50);
            // $('.pt-homeplate').height( $(window).height() - $("#site-sticky-navbar").height() );
            
            $(window).resize(function() {
                _HP_.height( $(window).height() - 50);
                // $('.pt-homeplate').height( $(window).height() - $("#site-sticky-navbar").height() );
            });
        // }

        // $('.pt-HomePlate').css({'top':});

    }
*/















   



// I HAVE REMOVE THE PARALLAX BUILD FUNCTION UNTIL I HAVE MORE BROWSER TESTING.
// 
/*
    
,buildParallax: function(){
    //console.log('PT.buildParallax()');



if (!Modernizr.touch) {

            $('[data-pt-parallax]').each(function(i, val){
            // $('.pt-parallax-container').each(function(i, val){
                // //console.log(val);

                var _div = $(val);

                var _parentSection = _div.parent();

                _parentSection.addClass('pt-parallax-container');

                var _bg = _div.find('.pt-parallax-bg');


                if(_bg.length > 0){
                    
// TweenMax.set(_bg, {css:{'height':'200%'}});
                    // TweenMax.set(_bg, {css:{'height':'200%'}, y:'-50%'});

                    // EXPERIMENTAL HORIZONTAL PANNING:
                    // var tbg = TweenMax.fromTo(_div.find('.pt-parallax-bg'), 1, { css:{'background-position-x':'-100%'} }, { css:{'background-position':'+100%'}, ease: Linear.easeNone});
                    
                    // ALL OF THESE SEEM TO WORK:    
    // var tbg = TweenMax.fromTo(_bg, 1, { css:{'background-position-y':'-50%'} }, { css:{'background-position-y':'+50%'}, ease: Linear.easeNone});
    

    // STANDARD VERTICAL PARALLAX:
// var tbg = TweenMax.fromTo(_bg, 1, {y:"-50%"}, {y:"+50%", ease: Linear.easeNone});
    // var tbg = TweenMax.to(_bg, 1, {y:"+50%", ease: Linear.easeNone});
                    



// var isSafari = navigator.vendor.indexOf("Apple")==0 && /\sSafari\//.test(navigator.userAgent); // true or false
var _tbg;
var _do = false;
if(navigator.vendor.indexOf("Apple")===0 && /\sSafari\//.test(navigator.userAgent)){
// Do something in Safari
_do = true;
                    // WORKS WELL IN SAFARI:
                    TweenMax.set(_bg, {css:{'background-size':'150%'}});

                    _tbg = TweenMax.fromTo(_bg, 1, 
                                                    { css:{'background-position-y':'50%'} }, 
                                                    { css:{'background-position-y':'-50%'}, ease: Linear.easeNone});

 
}
if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
// Do something in Firefox
_do = true;
                    TweenMax.set(_bg, {css:{'height':'180%'}});
                    _tbg = TweenMax.fromTo(_bg, 1, {y:"-40%"}, {y:"+40%", ease: Linear.easeNone});

}
if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
// Do something in Chrome
_do = false;
// TweenMax.set(_bg, {css:{'height':'200%'}});
// _tbg = TweenMax.fromTo(_bg, 1, {y:"-50%"}, {y:"+50%", ease: Linear.easeNone});

_bg.addClass('pt-bg-fixed');
}

                    if(_do){

                        var SS = new ScrollMagic.Scene({triggerElement: _parentSection })
                                        .duration('200%')
                                        .triggerHook(1)
                                        .setTween(_tbg)
                                        // .addIndicators()
                                        .addTo(PT.SM_CTRL);
                    }

                }else{
                    //console.log('no .pt-parallax-bg to be found.');
                }


            });


    }
}



*/











  




/*

,buildPinUnpin: function(){
    PT.buildSplitSticky();
}





,buildSplitSticky: function(){
    //console.log('PT.buildSplitSticky()');

    // THIS MUST RUN AFTER CONTENT HAS BEEN FULLY LOADED.
    PT.addOnLoad(
        doNow
    );

    function doNow(){
        //console.log('buildSplitSticky() after page load');

            $('[data-pt-splitsticky]').each(function(i, val){
            // //console.log(val);

            var _div = $(val);

            var _txt = _div.find('.pt-card-txt');
            var _img = _div.find('.pt-card-img');

            var _imgInner = _div.find('.pt-card-img-inner');
            
            var _durationHeight;

            var _sz = PT.getSize();

            var _DO = false;

            
            // IF _txt IS LARGER THAN VIEWPORT AND WE'RE NOT ON XS DEVICE:
            if(   ( _txt.height() > $(window).height() )   &&   ( _txt.height() > _imgInner.height() )   &&   (_sz !== '')   &&   (_sz !== 'XS') ){
                
                // //console.log('YEP build');
                
                if( typeof _imgInner.attr('data-pt-imgswap') !== "undefined"){

                    _imgInner.addClass('pt-zone-100');
                    // _imgInner.css({'height': $(window).height(),
                    // 'border':'2px dotted yellow' });

                    _durationHeight = _txt.outerHeight() - $(window).height();
                
                }else{

                    _durationHeight = _txt.outerHeight() - _imgInner.height(); 
                
                }
        
                _DO = true;
    
            }else{
                // //console.log('NO build');
                // _img.find('img').css({'display':'block'})
                // _imgInner.removeAttr('style');

                if((_sz !== '') && (_sz !== 'XS')){
                    // //console.log('at least SM');

                // }else{
                    // //console.log('at least SM');
                    if( typeof _imgInner.attr('data-pt-imgswap') !== "undefined"){
                        _img.css({'display':'flex'});
                        // //console.log('HEY!!  ADD FLEX TO pt-card-img');
                        // _imgInner.css({'position':'absolute', 'height': _txt.outerHeight().toString() });
                    }                        
                }

            } 



            if(_DO){

                var SS = new ScrollMagic.Scene({triggerElement: _div})
                    .triggerHook(0)
                    .duration( _durationHeight )
                    .setPin(_img, {pushFollowers: false})
                    // .setClassToggle(_div, "green")
                    // .on("enter leave", updateBox)
                    // .addIndicators()
                    .addTo(PT.SM_CTRL);
            }



        });


    }


}






*/




























/*


    ,animateEXTRAS: function(_DURATION) {
        //console.log('PT.animateEXTRAS()');

        var _D_ = typeof _DURATION !== 'undefined' ? _DURATION : false;

        // _D_ = false;//FORCE FOR TESTING PURPOSES

        var H = $(window).height();

        var SLIDE_FromRight = [];
        var SLIDE_FromLeft = [];
        var SLIDE_FromBottom = [];
        var SLIDE_FromTop = [];
        var FADE_In = [];


        $('[data-pt-transition]').each(function(i, val){
            var transitionType = $(this).data('pt-transition');
            // //console.log( transitionType );

            switch(transitionType) {
                
                case "slide-from-right":
                    SLIDE_FromRight.push(this);
                    break;
                
                case "slide-from-left":
                    SLIDE_FromLeft.push(this);
                    break;
                                
                case "slide-from-top":
                    SLIDE_FromTop.push(this);
                    break;
                                
                case "slide-from-bottom":
                    SLIDE_FromBottom.push(this);
                    break;
                                                
                case "fade-in":
                    FADE_In.push(this);
                    break;
                
                default:
                    // default
                    break;

            }

        });
 


        //  .slide-fromLeft
        for (var i2=0; i2 < SLIDE_FromLeft.length; i2++){

            $(SLIDE_FromLeft[i2]).parent().css({'overflow-x':'hidden'});

            var tweenFromLeft = new TweenMax.from(SLIDE_FromLeft[i2], 1, {alpha:0, x:'-=50', ease:Power1.easeOut} );
              
            var scene_fromLeft = new ScrollMagic.Scene({
            // var SM_Scene = new ScrollMagic.Scene({
                triggerElement: SLIDE_FromLeft[i2]
                ,triggerHook:0.9
            })
            // .addTo(SM_CTRL_Extras)
            .addTo(PT.SM_CTRL)
            .reverse(false)
            // .addIndicators()
            .setTween(tweenFromLeft);

            if(_D_){
                scene_fromLeft.reverse(true);
                scene_fromLeft.duration(H/2);
            }else{
                // MAYBE THIS SHOULD BE DESTROYED AFTER IT RUNS
                // scene_fromLeft.on('end', function(e){scene_fromLeft.destroy()} );
            }

        }


        //  .slide-fromRight
        for (var i1=0; i1 < SLIDE_FromRight.length; i1++){

            $(SLIDE_FromRight[i1]).parent().css({'overflow-x':'hidden'});

            var tweenFromRight = new TweenMax.from(SLIDE_FromRight[i1], 1, {alpha:0, x:'+=50', ease:Power1.easeOut} );
              
            var scene_fromRight = new ScrollMagic.Scene({
            // var SM_Scene = new ScrollMagic.Scene({
                triggerElement: SLIDE_FromRight[i1]
                ,triggerHook:0.9
            })
            // .addTo(SM_CTRL_Extras)
            .addTo(PT.SM_CTRL)
            .reverse(false)
            // .addIndicators()
            .setTween(tweenFromRight); 
            
            if(_D_){
                scene_fromRight.reverse(true);
                scene_fromRight.duration(H/2);
            }

        }

// THIS MIGHT BE BETTER FOR LOOPING THROUGH THE ITEMS
        // $(SLIDE_FromRight).each(function(i, _thing_){
            
        //     $(_thing_).closest('.row').css({'overflow-x':'hidden'});
            
        //     var tweenFromRight = new TweenMax.from(_thing_, 1, {alpha:0, x:'+=50', ease:Power1.easeOut} );

        //     var scene_fromRight = new ScrollMagic.Scene({
        //         triggerElement: _thing_
        //         ,triggerHook:0.99
        //     })
        //     .addTo(PT.SM_CTRL)
        //     .setTween(tweenFromRight); 
        
        //     if(_D_){
        //         scene_fromRight.reverse(true);
        //         scene_fromRight.duration(H/2);
        //     }

        // });


        //  .slide-fromBottom
        for (var i3=0; i3 < SLIDE_FromBottom.length; i3++){

            $(SLIDE_FromBottom[i3]).parent().css({'overflow-y':'hidden'});

            var tweenFromBottom = new TweenMax.from(SLIDE_FromBottom[i3], 1, {alpha:0, y:'+=50', ease:Power1.easeOut} );
              
            var scene_fromBottom = new ScrollMagic.Scene({
                triggerElement: SLIDE_FromBottom[i3]
                ,triggerHook:0.9
            })
            // .addTo(SM_CTRL_Extras)
            .addTo(PT.SM_CTRL)
            .reverse(false)
            // .addIndicators()
            .setTween(tweenFromBottom); 
            
            if(_D_){
                scene_fromBottom.reverse(true);
                scene_fromBottom.duration(H/2);
            }

        }


        //  .slide-fromTop
        for (var i4=0; i4 < SLIDE_FromTop.length; i4++){

            $(SLIDE_FromTop[i4]).parent().css({'overflow-y':'hidden'});

            var tweenFromTop = new TweenMax.from(SLIDE_FromTop[i4], 1, {alpha:0, y:'-=50', ease:Power1.easeOut} );
              
            var scene_fromTop = new ScrollMagic.Scene({
                triggerElement: SLIDE_FromTop[i4]
                ,triggerHook:0.9
            })
            // .addTo(SM_CTRL_Extras)
            .addTo(PT.SM_CTRL)
            .reverse(false)
            // .addIndicators()
            .setTween(tweenFromTop); 
            
            if(_D_){
                scene_fromTop.reverse(true);
                scene_fromTop.duration(H/2);
            }

        }


        //  .fade-in 
        for (var i5=0; i5 < FADE_In.length; i5++){

            var tweenFadeIn = new TweenMax.from(FADE_In[i5], 1, {alpha:0, ease:Power1.easeIn} );
            // var tweenFadeIn = new TweenMax.from(FADE_In[i5], 1, {alpha:0, ease.Linear.easeNone} );
            
            var scene_f = new ScrollMagic.Scene({
                triggerElement: FADE_In[i5]
                ,triggerHook:0.9
            })
            // .addTo(SM_CTRL_Extras)
            .addTo(PT.SM_CTRL)
            .reverse(true)
            // .addIndicators()
            .setTween(tweenFadeIn); 
             
            if(_D_){
                scene_f.reverse(true);
                scene_f.duration(H/2);
            }

       }


    }





*/








};



























