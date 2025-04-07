document.addEventListener('DOMContentLoaded', () => {
	var didScroll;    
	var lastScrollTop = 0;    
	var delta = 5;    
	var navbarHeight = $('header').outerHeight();    
		
	$(window).scroll(function(event){        
		didScroll = true;    
	});    
		
	setInterval(function() {        
		if (didScroll) {   
			if(window.innerWidth > 992){
				hasScrolled();  
			}   
			          
			didScroll = false;        
		}    
	}, 150);    
		
	function hasScrolled() {        
		var st = $(this).scrollTop();  
			
		if(Math.abs(lastScrollTop - st) <= delta)            
			return;        
		
		if (st > lastScrollTop && st > navbarHeight){       
			$('header .item-top').css('transform', 'translateY(-132px)');
            $('header .item-top').css('transition', 'transform 0.5s ease-in-out');
		} 
		else {    
            $('header .item-top').css('transform', 'translateY(0)');   
		}     
		lastScrollTop = st;    
	};	
})