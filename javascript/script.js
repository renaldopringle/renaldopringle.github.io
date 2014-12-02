$(document).ready(function() {
    $('#menu-toggle').click(function() {
        $('.body').toggleClass('toggle');
    });
    $('main').click(function() {
    	$('.body').removeClass('toggle');
    });

    try {
        var path = window.location.pathname;
        if (path == "/") {
            $('.links ul li:first-child a').addClass('activepage');
        }
        if (path == "/about/") {
            $('.links ul li:nth-child(2) a').addClass('activepage');
        }
        if (path == "/projects/") {
            $('.links ul li:nth-child(3) a').addClass('activepage');
        }
        console.log(path);
    }
    catch(e) {}

    if (SVG.supported) {
	  var draw = SVG('drawing');
	  var circle = draw.circle(100, 100);
	} else {
	  alert('SVG not supported');
	}

    function stickyfoo() {
        var height = window.innerHeight;
        var minheight = height - 165;
        console.log(height);
        $('.content').css("min-height", minheight + "px");
        console.log($('.content').css("min-height"));
    }
    stickyfoo();
});