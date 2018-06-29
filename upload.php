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

    <title>DriveApp</title>


    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    
    <!------ Include the above in your HEAD tag ---------->
  </head>
  <body>

    <div class="container">
        <div class="panel panel-default" style="margin-top:50px;">
          <div class="panel-heading">
            <div class="panel-title"><big><strong>Drive<span class="text-primary"><big>App</big></span><i class="glyphicon glyphicon-cloud"></i></strong></big> <span class="pull-right"><small>Benvenuto @nomeuser,  <a>Logout</a></small></span></div>
          </div>
          <div class="panel-body">

            <!-- Standar Form -->
            <h4>Seleziona un file dal tuo computer</h4>
            <form id="formCarica" method="POST" enctype="multipart/form-data">
              <div class="form-inline well well-sm">
                <div class="form-group">
                  <input id="file" type="file" name="newfile">
                </div>
                <button type="submit" class="btn btn-sm btn-success" id="js-upload-submit"><i class="glyphicon glyphicon-cloud-upload"></i> Upload</button>
              </div>
            </form>



            <!-- I miei file -->
            <div class="js-upload-finished">
              <h3>I miei file</h3>
                <form>
                  <div id="listFiles" class="list-group">
                  <!--
                    <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-01.jpg</a>
                    <a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>image-02.jpg</a>
                  -->
                  </div>
                </form>  
            </div>
          </div>
        </div>
      </div> <!-- /container -->


    </body>
  
    <script src="upload.js"></script>
    
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    
    
</html>

<style>

.marginBtn{
  margin: 0.2em;
  position: relative;
  bottom: 0.6em;
}

</style>