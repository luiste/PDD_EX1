$(document).ready(function () {
                  
    $('.thumb2').on('click', function(ev) {
        
        if (this == ev.target) {
            $(this).addClass('is-selected');
            $('.modal-container').addClass('modal-isOpen'); 
        }
     
    });
    
    
    
    $('.thumb2').on('click', function() {      
        $('.section').addClass('modal-bg');
     
    });
    
    
    
    

    

    $('.modal-close').on('click', function() {
        $('.modal-container').removeClass('modal-isOpen');
        $('.thumb2').removeClass('is-selected');
        $('.section').removeClass('modal-bg');
        
    });
  
    

console.log("HELLO")    
});



