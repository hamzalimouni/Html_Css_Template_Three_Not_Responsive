$(function(){

    'use strict'

    // Trigger Nice Scroll Plugin
    $('html').niceScroll({

        cursorcolor: '#f7600E',
        cursorborder: '1px solid #f7600E',
        cursorborderradius: 0

    });

    // Change Header Hight
    $('.header').height($(window).height());

    // Scroll To Features
    $('.header .arrow i').click(function(){

        $('html, body').animate({

            scrollTop: $('.features').offset().top

        }, 1000);

    });

    // Scroll To Our Works
    $('.header .work').click(function(){

        $('html, body').animate({

            scrollTop: $('.our-work').offset().top

        }, 1000);

    });

    // Scroll To Our Teams
    $('.header .hire').click(function(){

        $('html, body').animate({

            scrollTop: $('.our-teams').offset().top

        }, 1000);

    });

    // Show Hidden Items From Work
    $('.show-more').click(function(){

        $('.our-work .hidden').fadeIn(2000);

    });

    // Check Testimonials
    var leftArrow = $('.testim .fa-chevron-left'),

        rightArrow = $('.testim .fa-chevron-right');

    function checkClient(){

        // if ($('.client:first').hasClass('active'))
        //     {
        //         leftArrow.fadeOut();
        //     }

        // else 
        //     {
        //         leftArrow.fadeIn();
        //     }

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    };

    checkClient();

    $('.testim i').click(function(){

        if($(this).hasClass('fa-chevron-right'))
        {

            $('.testim .active').fadeOut(1000, function(){

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClient();

            });

        }

        else
        {
            $('.testim .active').fadeOut(1000, function(){

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClient();

            });
        }


    });

});