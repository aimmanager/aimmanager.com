	$().ready(function() {

		$('.form-contact').each(function() {
			$(this).validate();
		});

		$(".clients_logo_owl").owlCarousel({items:4, autoplay:true, loop:true,});

		$(".jumbotron_phone_image_owl").owlCarousel({ autoplay: true, loop:true, items : 1});

		window.addEventListener('scroll', function(e) {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 500;
			if (distanceY > shrinkOn) {
				$('#nav_bar_top').fadeIn(10);
			} else {
				$('#nav_bar_top').fadeOut(10);
			}
		});

  })
