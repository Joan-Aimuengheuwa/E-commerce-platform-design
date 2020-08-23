function openmenu(){
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="block";
}
function closemenu(){
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
}

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

$(document).ready(function() {
	var count = 0;
	$("a.add-to-cart").click(function(event) {
		count++;
		$("a.add-to-cart").addClass("size");
		setTimeout(function() {
			$("a.add-to-cart").addClass("hover");
		}, 200);
		setTimeout(function() {
			$("a.cart > span").addClass("counter");
			$("a.cart > span.counter").text(count);
		}, 400);
		setTimeout(function() {
			$("a.add-to-cart").removeClass("hover");
			$("a.add-to-cart").removeClass("size");
		}, 600);
		event.preventDefault();
	});
});
