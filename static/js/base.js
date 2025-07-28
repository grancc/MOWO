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
			hasScrolled(); 
			didScroll = false;        
		}    
	}, 150);    
		
	function hasScrolled() {        
		$('header').removeClass('headerAnimation');
		var st = $(this).scrollTop();  
			
		if(Math.abs(lastScrollTop - st) <= delta)            
			return;        
		
		if (st > lastScrollTop){       
			$('header .header-top').css('transform', 'translateY(-50px)');
			$('header .header-top').css('transition', 'transform 0.5s ease-in-out');

			if (innerWidth < 576){
				$('header .item-top span').css('transform', 'translateY(-45px)');
			}
			else if (innerWidth < 992){
				$('header .item-top span').css('transform', 'translateY(-60px)');
			}
			else if (innerWidth < 1200){
				$('header .item-top span').css('transform', 'translateY(-80px)');
			}else{
				$('header .item-top span').css('transform', 'translateY(-50px)');
			}
			
            $('header .item-top span').css('transition', 'transform 0.5s ease-in-out');
		} 
		else {    
            $('header .item-top span').css('transform', 'unset');   
			$('header .header-top').css('transform', 'unset');   
			
		}
		setTimeout(() => {
			$('header .header-top').css('transition', '');
			$('header .item-top span').css('transition', '');
		}, 500);     
		lastScrollTop = st;    
	};	


	document.querySelectorAll('.cursor-hover').forEach(function (cursor) {
		const cursorObj = document.getElementById('cursor');
		cursor.addEventListener('mousemove', function () {
			cursorObj.classList.add('cursor-active-hover')
    	});
		cursor.addEventListener('mouseleave', function () {
			cursorObj.classList.remove('cursor-active-hover')
    	});
	})
})


