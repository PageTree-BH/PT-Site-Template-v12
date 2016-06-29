



// THIS IS A WAY TO ADD A NEW FUNCTION / METHOD / VARIABLES OR WHATEVER TO THE NWG OBJECT.








$(function() { 


    // $('.homeplate').on('click', function(e){
    //     e.preventDefault();
    //     PT.helloTest();
    // });

    PT.buildSlicks();

});
 
   

 


PT.helloTest = function() {
    console.log('helloTest()');
},

 
 

PT.buildSlicks = function() {

    console.log('buildSlicks()');
 
    /*
        <ul data-pt-slick-single data-pt-imgswap-list>
            <li><img src="http://lorempixel.com/400/200/abstract/1"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/2"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/3"></li>
        </ul>

        <ul data-pt-slick-single > 
            <li><img src="http://lorempixel.com/400/200/abstract/4"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/5"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/6"></li>
        </ul>
    */        


    $('[data-pt-slick-row]').each(function(index) {
        



        $(this).slick({
                        dots: true,
                        arrows: false,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        responsive: [
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            }
                            ,{
                                breakpoint: 700,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            }
                            ,{
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });



        // var _s1 = $('this').data('pt-slick-row') || {};
        var _s1 = $(this).data('pt-slick-row') ;

        // console.log(    _s1.xl     );
        console.log(    _s1     );





    });
















 
 

    $('[data-pt-imgswap-list] > li').each(function(i, val){
        PT.imgSwap( $(val).find('img:first'), $(val) );
    });



    $('[data-pt-slick-single]').slick({
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
// prevArrow :'<div>PREVY</div>',
// nextArrow :'<div>NEXTY</div>'       
        autoplay: true
    });








    var dataSettings = $('[data-pt-slick]').data('pt-slick') || {};

    // _.options = $.extend({}, _.defaults, dataSettings, settings);

    // _.currentSlide = _.options.initialSlide;

    // _.originalSettings = _.options;



    console.log('pre ~~~~~');
    console.log(    dataSettings.arrows     );
    console.log(    dataSettings.dots       );
    console.log('post ~~~~~');



    



};



 



// PT.buildSlicks();


 

























