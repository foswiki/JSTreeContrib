"use strict";
jQuery(function($) {
   var defaults = {
      "core": {
         "animation":100,
         "multiple": false,
         "themes": {
             "name": "foswiki", 
             "icons": false,
             "url": true,
             "dir": foswiki.getPubUrl("System", "JSTreeContrib", "themes")
          }, 
      }
   };

   $(".jsTree").livequery(function() {
      var $this = $(this),
          opts = $.extend(true, defaults, $this.data());

      // shortcuts
      if (typeof(opts.coreTheme) !== 'undefined') {
        opts.core.themes.name = opts.coreTheme;
      }
      if (typeof(opts.coreIcons) !== 'undefined') {
        opts.core.themes.icons = opts.coreIcons;
      }
      if (typeof(opts.coreVariant) !== 'undefined') {
        opts.core.themes.variant = opts.coreVariant;
      }
      if (typeof(opts.coreMultiple) !== 'undefined') {
        opts.core.multiple = opts.coreMultiple;
      }

      //console.log("opts=",opts);

      $this.addClass("jsTreeInited").jstree(opts);
   });
});
