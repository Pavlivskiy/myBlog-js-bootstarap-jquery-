$(document).ready(function () {
				let data = new Date();
				let year = data.getFullYear();
				//console.log($.date());
				$(".data").html("All right reserved &copy  " + year + " Pavlivskiy Volodymyr");
				//alert($.date());
				$("#sandMessage").click(function() {
					let Names = $("#Names").val();
					let email = $("#email").val();
					if(Names == "" || Names == " "){
						$("#ErrorName").html("Enter pleace your name");

					}
					else if(email == "" || email == " "){
						$("#ErrorEmail").html("Enter pleace your email");

					}
					else {
						$("#ErrorName").html("");
						$("#ErrorEmail").html("");
						alert("Thank you for your answers and I will be sure to contact you! Please write your wishes to my email");
					}
					
				});
				$("#blog").click(function() {
					alert("I will write blog later! SORRY:)");
				});
				
			});
	  		$(document).ready(function($) { 
		  		$(window).scroll(function(){
			  		if($(this).scrollTop() == 0){
			  			$('#Up').fadeOut();
			  			$("nav").removeClass("navbar-inverse");
			  		}
			  		else if($(this).scrollTop() != 0) {
				  		$('#Up').fadeIn();
				  		$("nav").addClass("navbar-inverse");
			  		}
		  		});
		  		$("#Up").click(function (){
			  		$('body, html').animate({scrollTop:0}, 500);
			  		
		  		});
		  		$("#contacts").click(function (){
			  		$('body, html').animate({scrollTop:2350}, 500);
			  		
		  		});
		  		$("#aboutMe").click(function (){
			  		$('body, html').animate({scrollTop:1950}, 500);
			  		
		  		});
		  		$("#myWorks").click(function (){
			  		$('body, html').animate({scrollTop:1290}, 500);
			  		
		  		});
		  		$("#main").click(function (){
			  		$('body, html').animate({scrollTop:0}, 500);
			  		
		  		});

	  		});
			  $(document).ready(function() {
				$(window).scroll(function() {
					if($(this).scrollTop() > 500){
						//alert($(this).scrollTop());
						$(".bl1").stop(false).animate({
							opacity: "1"
						}, 200);
					} else {
						$(".bl1").stop(true).animate({
							opacity: "0"
						}, 200);
					}

				});
			});
			function direction(e) {
				$(e).hover(function(){
					$(this).stop().animate({ marginTop: "-10px" }, 200);
        			$(this).parent().find(".glyphicon-animate").stop().animate({color: "green" }, 200);
    			},function(){
        			$(this).stop().animate({ marginTop: "5px" }, 300);
        			$(this).parent().find(".glyphicon-animate").stop().animate({ opacity: 1 }, 300);
				});
  				//$( "#right" ).animate({ "left": "+=50px" }, 1500 );
			}
			

