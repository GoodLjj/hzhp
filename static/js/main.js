
/*
 * js
 * */
 
$(function(){
    $(".phone_menu_btn").on("click",function(){
        $(this).parents("#header").toggleClass("header_active")
    });
    $("#search_btn").click(function(){
        $(".fixed_search").addClass("fixed_search_on");
    });
    $(".fixed_search .close1").click(function(){
        $(".fixed_search").removeClass("fixed_search_on");
        
    });
    $(".banner").owlCarousel({
        "items": 1,
        "autoPlay": 4000,
        "stopOnHover": true,
        "paginationNumbers": true,
        "pagination": true,
        "scrollPerPage": false,
        "itemsDesktop": [1199, 1],
        "itemsDesktopSmall": [979, 1],
        "itemsTablet": [768, 1],
        "itemsMobile": [650, 1],
        "navigation": false,
        //"navigationText": ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
    });
    $(window).scroll(function() {
          if ($(this).scrollTop() >= 10) {
              $("#header").addClass("header_on");
          }else{
              $("#header").removeClass("header_on");
         }
    });
    $(".process_wrap li").each(function(index){
        $(this).find(".num").html('0'+ (index + 1) );
    });
    $(document).on("click", "#go_top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$("#go_top").hide();
	$(window).scroll(function(){
		if($(document).scrollTop() > 400){
			$("#go_top").css({display: 'block'});
		}else{
			if ($("#go_top").is(":visible")) {
				$("#go_top").hide();
			}
		}
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    $(".page_jobs li .btns").click(function(){
            var $thiscon = $(this).parents("li").find(".con");
            if($thiscon.is(":hidden")){
                $thiscon.slideDown();
                $(this).addClass("btns_on");
            }else{
                $thiscon.slideUp();
                $(this).removeClass("btns_on");
            }
    })
	AOS.init({
      duration: 500,
      delay: 40,
      disable: 'mobile',
	});
	$('.counter').countUp();
});