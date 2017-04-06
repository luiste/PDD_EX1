$(document).ready(function () {
                  
 $('.thumb2').on('click', function() {
    console.log('CLICK');

              
        $('.modal-container').addClass('modal-isOpen');
     
    });

    $('.modal-close').on('click', function() {
        $('.modal-container').removeClass('modal-isOpen')
    });
    
});