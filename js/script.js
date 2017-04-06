$(document).ready(function () {
                  
        $('.thumb2').on('click', function() {
 
              
        $('.modal-container').addClass('modal-isOpen');
     
    });
    
    
    $(document).ready(function(){
    $(".thumb2").click(function(){
        $(".modal-container").width(1376).height(500);
    });
});
    
    

    $('.modal-close').on('click', function() {
        $('.modal-container').removeClass('modal-isOpen')
    });
    
});

console.log('hello');   