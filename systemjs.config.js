  /**
   * System configuration for Angular 2 samples
   * Adjust as necessary for your application needs.
   */
  (function(global) {
    // map tells the System loader where to look for things
    var map = {
      'app':                              'app', // 'dist',
      '@angular':                         'node_modules/@angular',
      '@angular/form':                    'node_modules/@angular/form',
      '@angular2-material/core':          'node_modules/@angular2-material/core',
      '@angular2-material/toolbar':       'node_modules/@angular2-material/toolbar',
      '@angular2-material/button':        'node_modules/@angular2-material/button',
      '@angular2-material/icon':          'node_modules/@angular2-material/icon',
      '@angular2-material/sidenav':       'node_modules/@angular2-material/sidenav',
      '@angular2-material/list':          'node_modules/@angular2-material/list',
      '@angular2-material/grid-list':     'node_modules/@angular2-material/grid-list',
      '@angular2-material/card':          'node_modules/@angular2-material/card',
      '@angular2-material/input':         'node_modules/@angular2-material/input',
      'angular2-in-memory-web-api':       'node_modules/angular2-in-memory-web-api',
      'rxjs':                             'node_modules/rxjs',
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
      'app':                          { main: 'main.js',  defaultExtension: 'js' },
      'angular2-in-memory-web-api':   { main: 'index.js', defaultExtension: 'js' },
      '@angular2-material/core':      { main: 'core.js', defaultExtension: 'js'},
      '@angular2-material/toolbar':   { main: 'toolbar.js', defaultExtension: 'js'},
      '@angular2-material/button':    { main: 'button.js', defaultExtension: 'js'},
      '@angular2-material/icon':      { main: 'icon.js', defaultExtension: 'js'},
      '@angular2-material/sidenav':   { main: 'sidenav.js', defaultExtension: 'js'},
      '@angular2-material/list':      { main: 'list.js', defaultExtension: 'js'},
      '@angular2-material/grid-list': { main: 'grid-list.js', defaultExtension: 'js'},
      '@angular2-material/card':      { main: 'card.js', defaultExtension: 'js'},
      '@angular2-material/input':     { main: 'input.js', defaultExtension: 'js'},
      'rxjs':                         { defaultExtension: 'js' },
    };
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
      packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
      packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
      map: map,
      packages: packages
    };
    System.config(config);
  })(this);
