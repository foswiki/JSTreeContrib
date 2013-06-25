jQuery(function($) {
   var defaults = {
      themes: {
         "theme":"classic", 
         "icons": false
      }, 
      ui: {
         "select_multiple_modifier":"off"
      },
      core: {
         "animation":100
      }
   };

   $(".jsTree").livequery(function() {
      var $this = $(this),
          opts = $.extend({}, defaults, $this.data());

      $this.addClass("jsTreeInited").jstree(opts);
   });
});
