<?php 

 $url = "http://" . $_SERVER['SERVER_NAME'].'/tabib';

?>

<!DOCTYPE html>
<html>

<head>
    <title>TABIB</title>
    <meta charset="utf-8">
    <link rel="icon" href="assets/img/tabib-logo.png" type="image/gif" sizes="16x16">
    <meta name="description" content="doctors,tabib,surgery,scan">
    <meta name="keywords" content="doctors,doctor,tabib,hospital">
    <meta name="author" content="tabib team">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/owl.theme.default.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/bsnav.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/tagsinput.css">

    <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/style.css">
    <!-- <link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/rtl.css"> -->

   

</head>

<!-- modal search--------------------- -->
 <!-- The Modal -->


 <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">What do you search for !?</h4>
        <button type="button" class="close" data-dismiss="modal"><i class="far fa-times-circle"></i></button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body">
        <form>
          <div class="form-row">
            <div class="form-group col-12 ">
              <input type="text" class="form-control-lg form-control" id="inputAddress2" placeholder="doctors ,hospitals ,clinics ,etc. ">
            </div>
            <div class="form-group col-12 ">
                <select id="speciality" class="form-control">
                  <option selected>select area</option>
                  <option>...</option>
                </select>
              </div>
            <div class="form-group col-12   text-center ">
              <button type="submit" class="btn btn-primary ">Search <i class="fas fa-search ml-1"></i></button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
      </div>
      
      <!-- Modal footer -->
    
      
    </div>
  </div>
</div>
<!-- ------------------------------------------------- -->
<body class="loading">
<div id="overlayer"></div>
  <div class="loader">
  <div class="loader-block-main">
    <div class="loader-bx"></div>
</div>
</div>
<div class="top-bar">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-left">
        <div class="top-num">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item"><a href="mailto:info@tabib.com">
              <span>Contact US !</span>
              <i class="far fa-envelope"></i>
              info@tabib.com</a></li>
          </ul>
         </div>
      </div>
      <div class="col-md-6 text-right">
        <div class="top-social ">
          <ul class="list-inline list-unstyled ">
            
                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            
            
                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
           
           
                <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
           
            
                <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
           
        </ul>
        </div>
      </div>
    </div>
  </div>
  

</div>
        <header>  
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="navbar navbar-expand-lg bsnav">
                  <a class="navbar-brand" href="index.php">
                    <img src="assets/img/tabib-logo.png">
                  </a>
                  <div class="ser-jo">
                    <button type="button" class="search-mod d-block d-lg-none" data-toggle="modal" data-target="#myModal">
                      <i class="fas fa-search"></i>
                    </button>
                    <a href="join.php" class="btn nav-btn d-block d-lg-none">Join now</a>
                  </div>
                  
                  <button class="navbar-toggler toggler-spin"><span class="navbar-toggler-icon"></span></button>
                  

                  <div class="collapse navbar-collapse ">
              
                     <ul class="navbar-nav exc navbar-mobile ml-auto">
                        <li class="nav-item  ">
                          <a class="nav-link" href="index.php">Home</a>
                      
                      </li>
                      <li class="nav-item dropdown zoom">
                        <a class="nav-link" href="#">Services<i class="caret"></i></a>
                        <ul class="navbar-nav">
                          <li class="nav-item ">
                            <a class="nav-link" href="doc-sec.php">Doctors</a>
                         
                        </li>
                        <li class="nav-item  ">
                          <a class="nav-link" href="hos-secs.php">Hospitals & medical centers</a>
                      
                      </li>
                     
                      <li class="nav-item  ">
                        <a class="nav-link" href="info.php">
                          Medical information</a>
                    </li>
                           <li class="nav-item ">
                            <a class="nav-link" href="phar-secs.php">Pharmacies & Medical laps</a>
                         
                        </li>
                        <li class="nav-item  ">
                          <a class="nav-link" href="clinic.php">Clinics</a>
                      
                      </li>
                      <li class="nav-item  ">
                        <a class="nav-link" href="cares.php">
                          Medical services</a>
                    </li>
                         
                        </ul>
                    </li>
                      
                      
                         
                          
                        <!-- <li class="nav-item  ">
                              <a class="nav-link" href="">Magazine</a>
                          </li> -->
                        <li class="nav-item  ">
                            <a class="nav-link nav-item-double-line" href="contact.php">Contact Us</a>
                        </li>   
                        

                     
                      </ul>
                      <a href="join.php" class="btn nav-btn">Join now</a>

                      <button type="button" class="search-mod" data-toggle="modal" data-target="#myModal">
                        <i class="fas fa-search"></i>
                      </button>
                  </div>
                  
              </div>
              </div>
            </div>
          </div>  
          
        </header>
   

        <div class="bsnav-mobile">
          <div class="bsnav-mobile-overlay"></div>
          <div class="navbar">
          <!-- <div class="top-social text-center" style="color: white;">
    <ul class="list-inline list-unstyled ">
      
          <li class="list-inline-item"><a href="#"><img src="assets/img/facebook.png"></a></li>
      
      
          <li class="list-inline-item"><a href="#"><img src="assets/img/whatsappx.png"></a></li>
     
     
          <li class="list-inline-item"> <a href="#"><img src="assets/img/instagram-icon.png"></a></li>
     
      
          <li class="list-inline-item"><a href="#"><img src="assets/img/linkedin.png"></a></li>
     
  </ul>

  </div> -->
  <div class="top-num text-center" style="color: white;">
    <h6>contact us :</h6>
   <ul class="list-unstyled">
    
     <li class="list-inline-item"><a href="mailto:info@tabib.com"><i class="far fa-envelope"></i> info@tabib.com</a></li>
   </ul>
  </div>
          </div>
          
        </div>






    

        <div class="nav-container">
    
          <nav id="sidebar">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <!-- <div class="slidtxt">Care sections</div> -->
            <i class="fas fa-bars"></i>
               
            </button>
  
            <ul class="list-unstyled components" id= "components">
               
                <li class=" ">
                    <a href="#homeSubmenu"  data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Doctors <span><i class="fas fa-plus"></i></span></a>
                    <div class="collapse list-unstyled" data-parent="#sidebar" id="homeSubmenu">
                      <ul class="list-unstyled">
                        <li>
                        <a href="#">dentist</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
                        <li>
                        <a href="#">Cardiology</a>
                        </li>
   
                    </ul>
                    </div>
                </li>
            
                <li>
                    <a href="#pageSubmenu7"  data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Hospitals & Medical centers <span><i class="fas fa-plus"></i></span></a>
                    <div class="collapse " data-parent="#sidebar" id="pageSubmenu7">
                      <ul class=" list-unstyled" >
                        <li>
                            <a href="#">hospital 1</a>
                        </li>
                        <li>
                            <a href="#">hospital 2</a>
                        </li>
                        <li>
                            <a href="#">hospitals 3</a>
                        </li>
                    </ul>
                    </div>
                </li>
              
                <li class=" ">
                    <a href="#homeSubmenu6"  data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Clinics <span><i class="fas fa-plus"></i></span></a>
                   <div class="collapse " data-parent="#sidebar" id="homeSubmenu6">
                    <ul class=" list-unstyled">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Home 2</a>
                      </li>
                      <li>
                          <a href="#">Home 3</a>
                      </li>
                  </ul>
                   </div>
                </li>
               
                <li>
                    <a href="#pageSubmenu5"  data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Medical services <span><i class="fas fa-plus"></i></span></a>
                    <div  class="collapse list-unstyled" data-parent="#sidebar" id="pageSubmenu5">
                      <ul class=" list-unstyled" >
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                    </div>
                </li>
            
                <li>
                    <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pharmacies & Medical laps <span><i class="fas fa-plus"></i></span></a>
                    <div class="collapse " data-parent="#sidebar" id="pageSubmenu3">
                      <ul class=" list-unstyled">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                    </div>
                </li>
       
                
            </ul>
  
           
        </nav>
         </div>










