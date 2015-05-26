/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Awesome Mobile Menu
 */
var RR = (function (parent, $){
    'use strict';

    var $primaryNav = $('#primary-nav'),
        $lvl1 = $primaryNav.find('.lvl1'),
        $lvl2 = $primaryNav.find('.lvl2'),
        $lvl3 = $primaryNav.find('.lvl3'),
        $set = $lvl1.add( $lvl2 ).add( $lvl3 ),
        $tabHeight = $lvl1.find('li').height(),
        isMobileDevice = $(window).width() < 768 ? 1 : 0;

    var setup = function (){
        var $mobileMenuMarkup = '<button class="menu mobile-only js-mobile-menu"><span class="line top"></span><span class="line mid"></span><span class="line bot"></span></button>',
            $subNavMarkup = '<button class="sub-nav js-sub-nav icon-arrow"><span class="vh">Sub-navigation</span></button>';


        // Insert Mobile Menu button after the logo on mobile
        $primaryNav.find('h1').after( $mobileMenuMarkup );


        // Insert Subnav Markup after Level 1 menu items
        $lvl1.find('ul').each(function (){
            $(this).before( $subNavMarkup );
        });


        // TimelineMax the menu-icon animation for easier control on Touch/Mouse Events
        var tl = new TimelineMax();

        tl.to( $primaryNav.find('.top'), 0.2, { top: 4, ease: Expo.easeInOut });
        tl.to( $primaryNav.find('.bot'), 0.2, { top: -10, ease: Expo.easeInOut }, '-=0.2');

        tl.to( $primaryNav.find('.mid'), 0.2, { opacity: 0, ease: Expo.easeInOut });
        tl.to( $primaryNav.find('.top'), 0.2, { rotation: 45, ease: Expo.easeInOut }, '-=0.2');
        tl.to( $primaryNav.find('.bot'), 0.2, { rotation: -45, ease: Expo.easeInOut }, '-=0.2');


        // Stop the Timeline at 0 else the animation will play after initiation
        tl.pause();


        // Declare Eventlisteners
        var $mobileMenu = $('.js-mobile-menu'),
            $subNav = $('.js-sub-nav'),
            $dropdownList = $primaryNav.find('ul li');

        $mobileMenu.on('click', function (){
            if ( !$primaryNav.hasClass('active') ) {
                $primaryNav.addClass('active');

                tl.play();

                $lvl1.slideDown(function (){
                    TweenMax.staggerTo( $lvl1.find('> li'), 2, { opacity: 1, top: 0, ease: Expo.easeOut }, 0.1 );
                });

                TweenMax.to( window, 0.75, { scrollTo: { y: 0, ease: Ease.easeInOut } } );
            } else {
                $primaryNav.removeClass('active');

                tl.reverse();

                $set
                    .slideUp()
                    .find('.icon-arrow.active')
                    .removeClass('active');

                TweenMax.staggerTo( $dropdownList, 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );

                TweenMax.to( window, 0.75, { scrollTo: { y: 0, ease: Ease.easeInOut } } );
            }
        });

        $subNav.on('touchend, click', function() {
            var $this = $(this),
                $parentIndex,
                $index;

            if ( $this.hasClass('active') ) {
                if ( $this.next().hasClass('lvl2') ) {
                    $this.removeClass('active')
                        .next()
                            .slideUp()
                            .find('.icon-arrow.active')
                                .removeClass('active')
                                    .next()
                                    .slideUp();

                    TweenMax.staggerTo( $lvl2.find('li'), 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );
                    TweenMax.to( window, 0.75, { scrollTo: { y: 0, ease: Ease.easeInOut } } );
                } else {
                    $index = $this.parent().parent().parent().index();

                    if ( $this.parent().parent().hasClass('lvl1') ){
                        $parentIndex = 0;
                    } else if ( $this.parent().parent().hasClass('lvl2') ){
                        $parentIndex = $this.parent().parent().parent().index();
                    } else {
                        $parentIndex = $this.parent().parent().index();
                    }

                    $this.removeClass('active')
                        .next()
                            .slideUp(function (){
                                TweenMax.to( window, 0.75, { scrollTo: { y: ($parentIndex * $tabHeight), ease: Ease.easeInOut } } );
                            });

                    TweenMax.staggerTo( $lvl3.find('li'), 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );
                }
            } else {
                if ($this.parent().parent().hasClass('lvl1')) {
                    $index = $this.parent().index();
                    $parentIndex = 0;

                    $lvl1.find('.icon-arrow.active').removeClass('active');
                    $lvl2.slideUp();
                    $lvl3.slideUp();

                    TweenMax.staggerTo( $lvl2.find('li'), 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );
                    TweenMax.staggerTo( $lvl3.find('li'), 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );
                } else if ($this.parent().parent().hasClass('lvl2')) {
                    $index = $this.parent().index();
                    $parentIndex = $this.parent().parent().parent().index() + 1;

                    $lvl2.find('.icon-arrow.active').removeClass('active');
                    $lvl3.slideUp();

                    TweenMax.staggerTo( $lvl3.find('li'), 0.5, { opacity: 0, top: -20, ease: Expo.easeOut }, 0.1 );
                } else {
                    $index = $this.parent().index();
                    $parentIndex = $this.parent().parent().index();
                }

                $this.addClass('active').next().slideDown(function (){
                    TweenMax.to( window, 0.75, { scrollTo: { y: $this.offset().top - $tabHeight, ease: Ease.easeInOut } } );
                    TweenMax.staggerTo( $this.next().find('> li'), 2, { opacity: 1, top: 0, ease: Expo.easeOut }, 0.1 );
                });
            }
        });


        // Primary Nav Mouse Listeners
        $primaryNav.on('mouseover', '.no-link', function (){
            var $this = $(this);

            if ( !isMobileDevice ){
                $this.next().next().stop( true, false ).slideDown();
            }
        }).on('mouseout', '.no-link', function (){
            var $this = $(this);

            if ( !isMobileDevice ){
                $this.next().next().stop( true, false ).slideUp();
            }
        }).on('click', '.no-link', function (e){
            e.preventDefault();
            var $this = $(this);

            if ( isMobileDevice ){
                $this.next().trigger('click');
            }

            ripple(e, $this);
        }).on('mouseover', '.lvl2 a', function (){
            var $this = $(this);

            $this.parent().parent().stop( true, false ).slideDown();
        }).on('mouseout', '.lvl2 a', function (){
            var $this = $(this);

            $this.parent().parent().stop( true, false ).slideUp();
        }).on('click', '.lvl2 a', function (e){
            var $this = $(this);

            if ( isMobileDevice ){
                $this.next().trigger('click');
            }

            ripple(e, $this);
        });
    };

    // Export module method
    parent.mobileMenu = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function($){
    // Self-init Call
    RR.mobileMenu.setup();
});