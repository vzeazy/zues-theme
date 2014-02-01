jQuery(function($){
  $(document).ready(function(){
      
    //superFish
    $(function() { 
      $("#main-menu > ul.menu").superfish({
        delay: 100,
        autoArrows: false,
        dropShadows: false,
        animation: {opacity:'show', height:'show'},
        speed: 'fast'
      });
    });
	//collapsibleLists
	$(function() { 
	  $(CollapsibleLists.applyTo(document.querySelector("#content .field-name-body")));
    });
	//collapsibleTable
	$(function() { 
	  $("table.collapsible").children("tbody").hide();
	  $("table.collapsible").children("thead").click(function () {
           $(this).parent("table").children("tbody").slideToggle(50);
	   $(this).parent("table").children("thead").toggleClass("expanded");
        });
	});
  
  }); // end doc ready
}); // end function
