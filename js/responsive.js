jQuery(function($){
  $(document).ready(function(){
    
    //remove img height and width attributes for better responsiveness
    $('img').each(function(){
      $(this).removeAttr('width')
      $(this).removeAttr('height');
    });
    

  
  }); // END doc ready
}); // END function