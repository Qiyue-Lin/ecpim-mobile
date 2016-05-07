// Sets the require.js configuration for your application.
require.config( {
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
  paths: {
        // Core Libraries
        "jquery": "libs/jquery",
        "jquerymobile": "libs/jquerymobile",
        "underscore": "libs/lodash",
        "backbone": "libs/backbone"
  },
  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
        "backbone": {
              "deps": [ "underscore", "jquery" ],
              "exports": "Backbone"  //attaches "Backbone" to the window object
        }
  } // end Shim Configuration
});
// 初始化配置及导入所有依赖 Includes File Dependencies
require([ "jquery", "backbone", "routers/mainRouter", "jquerymobile"], function( $, Backbone, MainRouter ) {
    // 设置返回按钮样式
    $.mobile.toolbar.prototype.options.backBtnText = "返回";
    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;
    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
    // Instantiates a new Backbone.js Mobile Router
    this.router = new MainRouter();

});
