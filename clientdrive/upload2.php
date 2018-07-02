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

 <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation"><a href="#">Home</a></li>
            <li role="presentation" class="active"><a href="upload.php">Carica file</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h3 class="text-muted">AppScuola</h3>
      </div>

      <div class="jumbotron">
        <h1>File caricati</h1>
      </div>

      <div>
      <form id="formCarica" method="POST" enctype="multipart/form-data">
            <label>Select file to upload:</label>
            <input id="file" type="file" name="newfile">
            <button type="submit">Upload</button>
        </form>
      </div>

</form>

      <div class="row marketing">
            <div class="col-sm-12">
            <div id="listEventi" class="list-group">
            </div>
            </div>
      </div>

        

     

    </div> <!-- /container -->




  </body>
  
    <script src="upload.js"></script>
    
</html>