


$(document).ready(function (){
  $("#downC").click(function (e){
    // e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#section2").offset().top
      }, 2000);
  });
});


  $('#myModal').on('shown.bs.modal', function () {
	$('#video1')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function () {
	$('#video1')[0].pause();
  })
