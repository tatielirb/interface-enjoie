(function($){
	$('#cancelar').on('shown.bs.modal', function () {
	});

	$('#confirmar').on('shown.bs.modal', function () {	  
	

	                        
    $("#naoUsar, #blackFriday").change( {
        if ($("#naoUsar").is(":checked")) {
            alert('ola!');
        }
        else{ 
            alert('ok!');
        }
    });        



})(jQuery);