Chiefman
======
Sports Betting Test APP

## Usage

### Create your project

Install the required tools: `gulp`, `bower`
```
npm install -g gulp bower
gem install sass
```

Install `npm` dependencies:
```
npm install
```
Install `bower` dependencies:
```
bower install
```

### Gulp tasks

* `gulp build` to build an optimized version of your application in `/build`
* `gulp` or `gulp serve` to launch a browser sync server on your source files
* `gulp webserver` to launch a server on your optimized application, from /build folder
* `gulp watch` to watch files changes and reload server if needed
* `gulp clear` to delete /build folder


## Directory structure
Project structure and code organization are based on John Papa's AngularJS Style Guide https://github.com/johnpapa/angularjs-styleguide#application-structure-lift-principle.

<pre>
.
├── build                   # Compiled files (alternatively `dist`)
├── src                     # Source files (alternatively `lib` or `app`)
├── package.json            # NPM packages list
├── gulpfile.js             # Gulp preferences
├── bower.json              # Bower preferences
├── LICENSE
└── README.md
</pre>


### Commentary

in src/main.js collected list of connected libraries. To make application refresh faster, during development, I reccomend to connect links inside index.htmls from Google Hosted Libraries. E. G. 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
