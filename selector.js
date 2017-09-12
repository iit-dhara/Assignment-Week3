var main = function () {
	"use strict";

	var $content = $(".relevant");
	// hide the .relevant class contetn
	$content.hide();

	// it will delay for 3 sec and then display child with changed colors
	setTimeout(
  		function() 
	  {
	    $content.fadeIn();
	    $(".a").css('color','red');
	    $(".b").css('color','blue')
	  }, 3000);
};

$(document).ready(main);	