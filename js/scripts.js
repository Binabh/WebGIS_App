jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


}); // JQuery end

$('#navbar li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
});

