jQuery(function($) {
   var defaults = {
      themes: {
         "theme":"classic", 
         "icons": false
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
