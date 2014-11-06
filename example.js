(function(){
	setInterval(function(){
		$('.btn.btn-very-danger').fadeOut(50,function(){
			$(this).fadeIn(50,function(){
				$(this).fadeOut(50,function(){
					$(this).fadeIn(50);
				});
			});
		});
    },1000);

	$(document).on("mouseenter",".btn.btn-very-danger",function(){

	});

	$(document).on("mouseleave",".btn.btn-very-danger",function(){

	});
})()