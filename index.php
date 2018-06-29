<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>DriveApp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    
    
    <!------ Include the above in your HEAD tag ---------->
  </head>
  <body>
      <div class="container">    
          <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
              <div class="panel panel-info" >
                      <div class="panel-heading">
                          <div class="panel-title">Accedi a <strong>Drive<big>App</big><i class="glyphicon glyphicon-cloud"></i></strong></div>
                          
                      </div>     

                      <div style="padding-top:30px" class="panel-body" >

                          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                              
                          <form id="loginform" class="form-horizontal" role="form">
                                      
                              <div style="margin-bottom: 25px" class="input-group">
                                          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                          <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email" required>                                        
                                      </div>
                                  
                              <div style="margin-bottom: 25px" class="input-group">
                                          <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                          <input id="login-password" type="password" class="form-control" name="password" placeholder="password" required>
                                      </div>
                                      

                            


                                  <div style="margin-top:10px" class="form-group">
                                      <!-- Button -->

                                      <div class="col-sm-12 controls">
                                        <button id="btn-login" type="submit" class="btn btn-success">Login  </button>
                                        

                                      </div>
                                  </div>


                                  <div class="form-group">
                                      <div class="col-md-12 control">
                                          <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                                              Non hai un account! 
                                          <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                              Registrati qui
                                          </a>
                                          </div>
                                      </div>
                                  </div>    
                              </form>     



                          </div>                     
                      </div>  
          </div>
          <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                      <div class="panel panel-info">
                          <div class="panel-heading">
                              <div class="panel-title">Registrati</div>
                              <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Accedi</a></div>
                          </div>  
                          <div class="panel-body" >
                              <form id="signupform" class="form-horizontal" role="form">
                                  
                                  <div id="signupalert" style="display:none" class="alert alert-danger">
                                      <p>Error:</p>
                                      <span></span>
                                  </div>
                                      
                                  
                                    
                                  <div class="form-group">
                                      <label for="email" class="col-md-3 control-label">Email</label>
                                      <div class="col-md-9">
                                          <input type="text" class="form-control" name="email" placeholder="Email Address">
                                      </div>
                                  </div>
                                      
                                  <div class="form-group">
                                      <label for="firstname" class="col-md-3 control-label">Username</label>
                                      <div class="col-md-9">
                                          <input type="text" class="form-control" name="firstname" placeholder="First Name">
                                      </div>
                                  </div>
                                  
                                  <div class="form-group">
                                      <label for="password" class="col-md-3 control-label">Password</label>
                                      <div class="col-md-9">
                                          <input type="password" class="form-control" name="passwd" placeholder="Password">
                                      </div>
                                  </div>
                                

                                  <div class="form-group">
                                      <!-- Button -->                                        
                                      <div class="col-md-offset-3 col-md-9">
                                          <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>
                                        
                                      </div>
                                  </div>
                                  
                                
                                  
                                  
                              </form>
                          </div>
                      </div>

                
                
                  
          </div> 
      </div>
  </body>

  <script src="index.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  
</html>