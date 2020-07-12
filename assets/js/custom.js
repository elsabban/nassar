


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
$('#books').owlCarousel({
  

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
var figure = $(".card-video-holder.xx").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


// pdf viewer and download 

// $('.card-video-holder iframe').each(function () {
  
//   var pdfSrc = $(this).attr('src');
//   var viewPdf = $(this).parent().next().children('a.view-pdf');
//   viewPdf.attr('href',pdfSrc);

// });


/* This is the plugin
*/
(function(a){a.createModal=function(b){defaults=
  {title:"",message:"Your Message Goes Here!",
  closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?
  'style="max-height: 420px;overflow-y: auto;"':"";
  html='<div class="modal pdfs fade" id="myModal">';
  html+='<div class="modal-dialog">';
  html+='<div class="modal-content">';
  html+='<div class="modal-header">';
  html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';

  html+="</div>";html+='<div class="modal-body" '+c+">";
  html+=b.message;html+="</div>";html+='<div class="modal-footer">';
  if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
* Here is how you use it
*/
$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'        
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:'My Title',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    });    
})