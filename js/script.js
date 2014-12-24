$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () { viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"; },

	scaleFix = function () {
	    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
	        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
	        document.addEventListener("gesturestart", gestureStart, false);
	    }
	};

    scaleFix();
    // Menu Android
    var userag = navigator.userAgent.toLowerCase();
    var isAndroid = userag.indexOf("android") > -1;
    if (isAndroid) {
        $('.sf-menu').responsiveMenu({ autoArrows: true });
    }
});

//Dynamically adds drop down for smaller screens.
$(function ($) {
    $("nav").append("<select/>");
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Please choose page"
    }).appendTo("nav select");
    //new dropdown menu
    $("nav a").each(function () {
        var el = $(this);
        var perfix = '';
        switch (el.parents().length) {
            case (10):
                perfix = '-----';
                break;
            case (12):
                perfix = '----------';
                break;
            case (14):
                perfix = '---------------';
                break;
            default:
                perfix = '';
                break;

        }
        $("<option />", {
            "value": el.attr("href"),
            "text": perfix + el.text()
        }).appendTo("nav select");
    });

    $('nav select').change(function () {

        window.location.href = this.value;

    });
});

//Home page related scripts
try {
    $(function () {
        if ($('#home-page-slider-main').length > 0) {
            $('#home-page-slider-main').flexslider({
                slideshow: true,
                direction: "vertical",
                animation: "slide",
                easing: "swing"
            });
        }
        if ($('#home-page-slider-secondary').length > 0) {
            $('#home-page-slider-secondary').flexslider({
                animation: "fade",
                easing: "swing"
            });
            setTimeout(function () {
                $('#home-page-slider-secondary .flex-control-nav.flex-control-paging').prependTo('#home-page-slider-secondary');
            }, 1000);
        }
        if ($('#home-services').length > 0) {
            $('#home-services').carouFredSel({ auto: false,
                prev: '#prev',
                next: '#next',
                items: 3,
                responsive: true,
                width: '100%',
                scroll: 1,
                items: {
                    width: 220,
                    visible: {
                        min: 1,
                        max: 3
                    }
                },
                scroll: {
                    items: 1,
                    fx: "scroll",

                    easing: "easeInQuint",

                    duration: 500,

                    pauseOnHover: false,

                    queue: false

                }
            });
        }
    });
} catch (e) { }

//About page script here
try {
    $(function ($) {
        if ($('.flexslider.about').length > 0) {
            $('.flexslider.about').flexslider({
                animation: "fade",
                easing: "swing"
            });
            setTimeout(function () {
                $('.flexslider.about .flex-control-nav.flex-control-paging').prependTo('.flexslider.about');
            }, 1000);

            $('.member-skill').each(function () {

                $(this).jqbar({ label: $(this).attr('data-label'), barWidth: 10, value: parseInt($(this).attr('data-percent')), barColor: '#FFE04F' });
            });

            setTimeout(function () {
                $('span.bar-level').each(function () {
                    $(this).attr('data-value', $(this).width());
                    $(this).css('width', '0px');
                });
            }, 2000);

            $(window).scroll(function () {

                var scrollPos = parseInt($(this).scrollTop());

                var teamAreaTop = parseInt($('.our_team').offset().top) - 90;


                if (scrollPos >= teamAreaTop) {
                    $('span.bar-level').each(function () {
                        var w = parseInt($(this).attr('data-value'));
                        $(this).animate({ width: w }, 1000);
                    });
                }
                var outOfFocus = teamAreaTop - 100;
                if (scrollPos < outOfFocus) {
                    $('span.bar-level').css({ width: 0 });
                }

            });
           
        }
    });
} catch (e) { }
//Setup overly and gallery here
try {
    $(function () {
        if ($('#projects-carousel').length > 0) {
            $('#projects-carousel').carouFredSel({ auto: false,
                prev: '#prev',
                next: '#next',
                items: 4,
                responsive: true,
                width: '100%',
                scroll: 1,
                items: {
                    width:221,
                    height: 121,                    
                    visible: {
                        min: 1,
                        max: 4
                    }
                },

                scroll: {
                    items: 1,
                    fx: "scroll",

                    easing: "easeInBack",

                    duration: 500,

                    pauseOnHover: true,

                    queue: false

                }

            });
        }
        if ($('.project-item').length > 0) {
            $('.project-item').hover(function () {

                var p = parseInt($(this).find('img').css('paddingLeft')) * 2;
                var wimg = $(this).find('img').width() + p;
                var w = $(this).width() + p;
                if (wimg < w)
                    w = wimg;
                var h = $(this).find('img').height() + p;
                $(this).find('.zoom-icon').stop().animate({ bottom: '50%' });
                $(this).find('.zoom-link').stop().animate({ top: '50%' });
                $(this).find('.zoom-bg').css({ width: w, height: h }).stop().animate({ opacity: 1 });
            }, function () {
                var lnk = $(this);
                $(this).find('.zoom-icon').stop().animate({ bottom: '100%' });

                $(this).find('.zoom-link').stop().animate({ top: '100%' });

                $(this).find('.zoom-bg').stop().animate({ opacity: 0 });
            });

            $('.touch-item').touchTouch();
        }

    });
} catch (e) { }

try {
    //Setup jQuery Components here
    $(function () {
        $("#accordion").accordion();
        $("#tabs").tabs();
        $("#progressbar").progressbar({
            value: 60
        });
        // Link to open the dialog
        $("#dialog-link").click(function (event) {
            $("#dialog").dialog("open");
            event.preventDefault();
        });

        $("#dialog").dialog({
            autoOpen: false,
            width: 400,
            modal:true,
            buttons: [
				{
				    text: "Ok",
				    click: function () {
				        $(this).dialog("close");
				    }
				},
				{
				    text: "Cancel",
				    click: function () {
				        $(this).dialog("close");
				    }
				}
			]
        });

      
    });

} catch (e) { }

//try {
//    $(function () {
//        if ($('.f_txt').length > 0) {
//            $('.f_txt').table_filter({ 'table': '.f_tbl' });
//        }
//    });
//}
//catch (e) { }
//project detail page slider
try {
    $(function () {
        if ($('.flexslider.projectdetails').length > 0) {
            $('.flexslider.projectdetails').flexslider({
                animation: "fade",
                easing: "swing",
                controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
                prevText: "Previous",           //String: Set the text for the "previous" directionNav item
                nextText: "Next"
            });
        }
    });
 }
catch (e)
{ }

try {
    $(function () {

        if ($('#projects').length > 0) {
                //Projects filter            
                var $container = $('#projects');
                // items filter
                $('.project-filter li a').click(function () {
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        itemSelector: '.project-item',
                        layoutMode: 'fitRows',
                        animationEngine: 'jQuery'
                    });

                    $('.project-filter').find('a.active').removeClass('active');
                    $(this).addClass('active');
                    return false;
                });
                //causes initial setup
                setTimeout(function () {
                    $('.project-filter li a:eq(0)').click()
                }, 1000);
        }
    });
}
catch (e)
{ }

try {
    $(function () {
        if ($('#carousel-services').length > 0) {
            $('#carousel-services').carouFredSel({ auto: false,
                prev: '#prev',
                next: '#next',
                items: 3,
                direction: 'up',
                items: {
                    visible: {
                        min: 1,
                        max: 3
                    }
                },
                scroll: {
                    items: 1,
                    fx: "scroll",

                    easing: "easeInBack",

                    duration: 500,

                    pauseOnHover: true,

                    queue: false

                }
            });
        }
        if ($('#quotes').length > 0) {
            $('#quotes').carouFredSel({ auto: true,
                pagination: '#pager',
                items: 1,
                scroll: {
                    items: 1,
                    fx: "fade",

                    easing: "swing",

                    duration: 1500,
                    
                    pauseOnHover: true,

                    queue: false

                }
            });
        }

    });
}
catch (e)
{ }