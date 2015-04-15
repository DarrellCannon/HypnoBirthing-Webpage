
   $(function(){  

		$("#mainPage").hide().fadeIn(1500); 

   		$("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("#mainPage").fadeOut(1000, redirectPage);
        });

        function redirectPage() {
        window.location = linkLocation;
    	}  

    });
