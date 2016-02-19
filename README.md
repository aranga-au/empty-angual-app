# empty-angular-app
can you as start of your app.
NOTE: please make necessory changes to gulp.config.js
###### Apache to work with html5 routes

add inside Directory block in apache conf 
```
RewriteEngine On
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ /index.html

```


Sample is using ui router instead of builtin ngRouter.


steps 1.
install all the dependencies
```
$ npm install
```

populate index.html with script & css include
automating this step make sure all require scripts and css are inserted in side the html 
```
$ gulp wiredip
```
sample before
```
<!DOCTYPE html>
<html ng-app="app">
<head>
     
     
    <!-- build:css styles/lib.css -->
    <!-- bower:css -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css styles/sample-app.css -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- endbuild -->
</head>
<body>
    <div>
      ...
      ...
    </div>

    <!-- build:js js/libs.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js js/sample-app.js -->
    <!-- inject:js -->
    <!-- endinject -->

    <!-- inject:templates:js -->
    <!-- endinject -->
    <!-- endbuild -->
</body>
</html>
```
after runing gulp wiredep
```
<!DOCTYPE html>
<html ng-app="app">
<head>

    <!-- build:css styles/lib.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="/bower_components/toastr/toastr.css" />
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css styles/sample-app.css -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- endbuild -->
</head>
<body>
    <div>
      ..
    </div>

    <!-- build:js js/libs.js -->
    <!-- bower:js -->
    <script src="/bower_components/jquery/dist/jquery.js"></script>
    <script src="/bower_components/angular/angular.js"></script>
    <script src="/bower_components/angular-sanitize/angular-sanitize.js"></script>
    <script src="/bower_components/angular-resource/angular-resource.js"></script>
    <script src="/bower_components/extras.angular.plus/ngplus-overlay.js"></script>
    <script src="/bower_components/moment/moment.js"></script>
    <script src="/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="/bower_components/toastr/toastr.js"></script>
    <script src="/bower_components/angular-animate/angular-animate.js"></script>
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js js/sample-app.js -->
    <!-- inject:js -->
    <script src="/src/client/app/app.module.js"></script>
    <script src="/src/client/app/core/core.module.js"></script>
    <script src="/src/client/app/layout/layout.module.js"></script>
    <script src="/src/client/app/core/dataservice.js"></script>
    <script src="/src/client/app/layout/main.contoller.js"></script>
    <!-- endinject -->

    <!-- inject:templates:js -->
    <!-- endinject -->
    <!-- endbuild -->
</body>
</html>
```
