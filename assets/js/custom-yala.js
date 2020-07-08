
$(window).on('load',function() {
	$(".loader").fadeOut("fast");
  $("#overlayer").fadeOut("fast");
  $('body').removeClass('loading');
  $('.anime').addClass('animated bounceIn')

  $('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });
  
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all"
    }
  }) 
});







var videoElm = $('.js-play'),
    final_url = '';
  // youtube viwer 
  function youtube_parser(x){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  
    var match = x.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  
  // console.log(final_url);
  
  videoElm.each(function() {
  
    if($(this).data("link")) {
      // console.log($(this),$(this).data("link"));
  
      final_url = youtube_parser($(this).data("link"));
      console.log(final_url);
      $(this).attr('data-src',final_url);
      $(this).children('img.first').attr('src','https://img.youtube.com/vi/'+ final_url + '/maxresdefault.jpg')
    }
    
  })
  

  
        var player;
  var lastButton = '';
  const youtube = 'youTubeIframe';
  const titleInsert = '.js-title-insert';
  const btnPlay = '.js-play';
  const btnPause = '.js-pause';
  const modalId = '#modalVideo';
  const videoQuality = 'hd720';
  
  function onYouTubePlayerAPIReady() {
    player = new YT.Player(youtube, {
      controls: 2,
      iv_load_policy: 3,
      rel: 0,
      events: {
        onReady: onPlayerReady
      }
    });
  }
  
  function onPlayerReady(event) {
    'use strict';
    $(btnPlay).on('click', function() {
      var videoId = $(this).attr('data-src');
      
      if (lastButton == videoId) {
        $(titleInsert).text($(this).attr('data-title'));
        player.playVideo(videoId, 0, videoQuality);
      } else {
        $(titleInsert).text($(this).attr('data-title'));
        player.loadVideoById(videoId, 0, videoQuality);
        lastButton = videoId;
      }
    });
    
    $(btnPause).on('click', function() {
      player.pauseVideo();
    });
    
    $(modalId).on('click', function() {
      player.pauseVideo();
    });
  
  }
  jQuery('#modalVideo').on('hidden.bs.modal', function (e) {
    // do something...
    jQuery('#modalVideo #youTubeIframe').attr("src", jQuery("#modalVideo  #youTubeIframe").attr("src"));
  });
  
  
  // scroll fixed contact
  
//   function checkOffset() {
//     var a=$(document).scrollTop()+window.innerHeight;
//     var b=$('footer').offset().top;
//     if (a<b) {
//       $('.fix-contact').css('bottom', '5px');
//     } else {
//       $('.fix-contact').css('bottom', (-40+(a-b))+'px');
//     }
//   }
//   $(document).ready(checkOffset);
//   $(document).scroll(checkOffset);
  
  
  new WOW({
    offset:50,
  }).init();


  



  // yalla page 
  $(document).ready(function() {
     let topH = $('.top-yalla').outerHeight(true);
     let topN = $('.navigation').outerHeight(true)
     $(window).scroll(function () {
         let scroll = $(window).scrollTop();
         if (scroll >= topH) {
             $('.yalla nav').addClass('fix-top');
            $('.main-slider').css('top',topN);
            $('.yalla nav').css('box-shadow','0px 7px 11px 0px #0000006b');
             
         } else {
            $('.yalla nav').removeClass('fix-top');
            $('.main-slider').css('top',0);
            $('.yalla nav').css('box-shadow','1px -5px 11px 0px #0000002e');
           
         } 
     })



		$('a[href*="#"]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
        });
        

        $("#slider5").owlCarousel({
            loop:true,
            margin:5,
            autoplay:true,
            responsiveClass:true,
            dots:false,
            autoplaySpeed:1000,
            autoplayHoverPause:true,
            nav:true,
            navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
            items:1,
            
          });

          $("#slider5").on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('.caption-yala').removeClass('animated fadeInLeft delay-3');
       $('.owl-item').not('.cloned').eq(item).find('.caption-yala ').addClass('animated fadeInLeft delay-3');
        });
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.go').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation .nav-item.active').removeClass('active');
						$('.navigation .nav-item').eq(i).addClass('active');
				}
		});
}).scroll();



