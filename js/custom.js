/* Global $, alert, console */
$(function(){
    'use strict';
    //Adjust Header Height
    var myheader=  $('.header'),
    myslider=$('.bxslider');
    myheader.height($(window).height());
    $('window').resize(function(){
        myheader.height($(window).height());
        myslider.each(function(){
            $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
           });
    });
    //Adjust Bxslider item Center
    myslider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
       });
    //Links Active
    $('.links li a').click(function(){
     $(this).parent().addClass('active').siblings().removeClass('active');
    });
    // Trigger Bx Slider
    myslider.bxSlider({
        pager:false
    });
    // Smooth Scroll To Div
    $('.links li a').click(function(){
     $('html,body').animate({
         scrollTop:$('#' + $(this).data('value')).offset().top 
     },1000);
    // console.log($(this).data('value'));
    });
    //Our Auto Slider Code
    (function autoSlider(){
      $('.slider .active').each(function(){
        if(!$(this).is(':last-child')){
       $(this).delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn();
        autoSlider();
       });
        } else{
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
                autoSlider();
            });  
        }
      });
    }());
    //Trigger Mixitup
    $('#container').mixItUp();
    //Adujst Shuffle Links
    $('.shuffle li').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
    });
    // Trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor:'#1abc9c',
        cursorwidth:'10px',
        cursorborder:'1px solid #1abc9c',
        cursorborderradius:'3px'
    });
});