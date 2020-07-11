


$(document).ready(function (){
  $("#downC").click(function (e){
    // e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#section2").offset().top
      }, 2000);
  });
});


  // $('#myModal').on('shown.bs.modal', function () {
	// $('video')[0].play();
  // })
  // $('#myModal').on('hidden.bs.modal', function () {
	// $('video')[0].pause();
  // })

// $(document).ready(function () {

//  $('.card-video-holder button').click(function () {
//   var vidSrc = $(this).data('src');
//   console.log(vidSrc);
//   $('#open-vidz').attr('src',vidSrc);
  
//  })
// })
// const video = document.getElementById("video");

// const canvas = document.createElement("canvas");
// // scale the canvas accordingly
// canvas.width = video.videoWidth;
// canvas.height = video.videoHeight;
// // draw the video at that frame
// canvas.getContext('2d')
//   .drawImage(video, 0, 0, canvas.width, canvas.height);
// // convert it to a usable data URL
// const dataURL = canvas.toDataURL();

$('#videos').owlCarousel({
  

  loop:true,
  // margin:30,
  nav:true,
  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
  responsive:{
      0:{
        items:1
      },
      575:{
          items:2
      },
      1100:{
        items:3
      },
     
      
  }
});
$( document ).ready(function() {
  $('#myModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);

      var vidsrc = button.attr("data-src");

    
      $(this).find('video#recap source').attr('src', vidsrc);

      $(this).find('video#recap')[0].load();
  }).on('hidden.bs.modal', function(){
      $(this).find('video')[0].pause();
  });
});
var figure = $(".card-video-holder").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
