$(document).ready(function() {
    var path = window.location.pathname;

    $('#menu-toggle').click(function() {
        $('.body').toggleClass('toggle');
    });
    $('main').click(function() {
    	$('.body').removeClass('toggle');
    });

    if (path == "/") {
    	$('.links ul li:first-child a').addClass('activepage');
    }
    /*if (path == "/about") {
    	$('.links ul li:nth-child(2) a').addClass('activepage');
    }
    if (path == "/projects") {
    	$('.links ul li:nth-child(3) a').addClass('activepage');
    }*/

    if (SVG.supported) {
	  var draw = SVG('drawing')
	  var circle = draw.circle(100, 100)
	} else {
	  alert('SVG not supported')
	}

	
    console.log(path);

    var width = window.innerHeight;
    console.log(width);
    $('.content').css("min-height: " + width + "px");
});