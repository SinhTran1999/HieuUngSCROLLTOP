 $(function(){
 	// xu ly viec click thay doi mau
 	$(".tdkhoi").click(function(event) {
 		/* Act on the event */
 		$(this).toggleClass('xanh');

 		//khi click vao , cho noi dung hien ra
 		$(this).next().slideToggle(900, "easeInOutQuint");
 		//su dung ham animate de chuyen noi dung len
 		$("body,html").animate({scrollTop: $(this).offset().top},900,"easeInOutQuint");
 	});
 	//code cho phan phong to anh
	$(".vaicaianh a").fancybox({openEffect : 'elastic'});//openEffect : 'elastic' la hieu ung cua fancybox co trong file index.html cua file  nen demo trong fancybox, o phan openEffect 
	//xu ly co dan noi dung accordion
	$(".ndkhoi").slideUp();
})  
 