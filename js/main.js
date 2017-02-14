$(document).ready(function(){

$nav=$('#main_menu');
//$nav.slideUp();
   // $('#bars').click(function(e){


        //$nav.slideToggle("");
       // e.preventDefault();

   // });


      $(window).on('resize', function ()
    {
        if ($(this).width() > 640)
        {
            $nav.show();
        }
    });
});
