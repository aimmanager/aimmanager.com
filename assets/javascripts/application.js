	$().ready(function() {

		$('.form-contact').each(function() {
			$(this).validate();
		});

		$(".owl-carousel").owlCarousel({items:1, loop:true, autoplay:true});

		$(".logo_clients").owlCarousel({items:1, loop:true, autoplay:true});

		window.addEventListener('scroll', function(e) {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 500;
			if (distanceY > shrinkOn) {
				$('#nav_bar_top').fadeIn(10);
			} else {
				$('#nav_bar_top').fadeOut();
			}
		});

  })
