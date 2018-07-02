<?php


?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Signin Template for Bootstrap</title>


    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  </head>

  <body>

    <div class="container col-sm-12 text-center" style="width: 50%;">
      <row>
        <div class="col-sm-12 well well-sm">
          <form class="form-signin" id="formAccedi">
            <h2 class="form-signin-heading">Accedi</h2>
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="text" id="inputUser" class="form-control" placeholder="Username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>           
            <button class="btn btn-lg btn-primary btn-block" type="submit" id="accediBtn">Accedi</button>
          </form>
        </div>
       </row>
       <row> 
        <div class="col-sm-12 well well-sm">
          <div id="listEventi" class="list-group">
          </div>
        </div>
      </row>

    </div> <!-- /container -->

    


   
  </body>

    <!-- Latest compiled and minified JavaScript -->
    
    <script src="index.js"></script>

</html>