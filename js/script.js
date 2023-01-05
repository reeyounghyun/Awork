$(document).ready(function () {

     // alert("클릭해주셔서 감사합니다^^");


    $(".aside>ul>li>a").click(function(){
        $(".aside ul li a .menu_sub").addClass('onfoo');
        $(this).addClass("onfoo");
        $(".")
    });

   
   $(".prd_add_btn").click(function(){
    $(".prdItemList ul li").addClass('add');
  $(this).addClass("add");
  $(".prd_remove_btn").removeClass("add");
});
$(".prd_remove_btn").click(function(){   
  $(".prdItemList ul li").removeClass('add');
  $(this).addClass("add");
  $(".prd_add_btn").removeClass("add");
}); //indexsub_add button





    $(".gnb_in .gnb_wrap .n_l .r_all_m").click(function () {
        if ($(".n_l .r_all_m .all_sam").hasClass("off")) {
            $(".n_l .r_all_m .all_sam").removeClass("off");
            $("this").removeClass("off");
        } else {
            $(".n_l .r_all_m .all_sam").addClass("off");
            $(this).addClass("off");
        }
    })

    $(".btn_close").click(function () {
        if ($(".n_l .r_all_m .all_sam").hasClass("on")) {
            $(".n_l .r_all_m .all_sam").removeClass("on");
            $("this").removeClass("on");
        } else {
            $(".n_l .r_all_m .all_sam").addClass("off");
            $(this).addClass("off");
        }
    })

    //실시간 검색 순위
    var count = $('.rank-list li').length++;
    var height = $('.rank-list li').height();

    function step(index) {
        $('.rank-list ol').delay(2000).animate({
            top: -height * index,
        }, 1000, function () {
            step((index + 1) % count);
        });
    }

    step(1);

    $(".list_close").click(function(){
        $(".Goods_wrap").css("display",'none')
    });

    $(".btn_pause").on('slideChange', function (e) {

        var sw = 0;

        if (sw == 0) {
            $('.btn_pause').addClass('on');
            mySwiper.autoplay.stop();
            sw = 1;
        } else {
            $('.btn_pause').removeClass('on');
            mySwiper.autoplay.start();
            sw = 0;
        }
    });

    //foo_bit js
    var swiper = new Swiper(".foo_swiper", {
        // centeredSlides: true,
        slidesPerView: 3,
        // spaceBetween: 5,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: ".next-foo",
            prevEl: ".prev-foo",
        },
    });

    //travel_sug js
    var swiper = new Swiper(".tr_sug", {
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 고객님만을 위한 추천여행js 
    var swiper = new Swiper(".off_slide", {
        spaceBetween: 10,
        slidesPerView: 4,
        navigation: {
            nextEl: ".offer-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            990: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
        }
    });

    $('.but_tit button').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_tit button').removeClass('acitve');
        $('.tab-content').removeClass('acitve');
        $(this).addClass('acitve');
        $("#" + tab_id).addClass('acitve');
    });
    //패키지 항공 호텔 탭 버튼

    $('.but_tits span button').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_tits span button').removeClass('acitve');
        $('.tits_con').removeClass('acitve');
        $(this).addClass('acitve');
        $("#" + tab_id).addClass('acitve');
    });
    //왕복 편도 다구간 탭 버튼

    $('.but_titsx span button').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_titsx span button').removeClass('acitve');
        $('.tits_con').removeClass('acitve');
        $(this).addClass('acitve');
        $("#" + tab_id).addClass('acitve');
    });
    //마침내 특가

    $(".prd_add_btn").click(function () {
        if ($(this).hasClass("add")) {
            $(".prd_add_btn").removeClass("add");
            $(this).removeClass("add");
        } else {
            $(".prd_add_btn").addClass("add");
            $(this).addClass("add");
        }

        if ($(this).hasClass("active")) {
            $(".prd_add_btn").removeClass("add");
        } else {
            $(".prd_add_btn").addClass("add");
        }
    })

    // footer 하나투어
    $(".hana_mb").click(function () {
        if ($(".fl .footer_licensee span").hasClass("on")) {
            $(".fl .footer_licensee span").removeClass("on");
            $("this").removeClass("on");
        } else {
            $(".fl .footer_licensee span").addClass("on");
            $(this).addClass("on");
        }
    })

    $(".hea_wrap a.btn .ico").click(function(){
       
       if($(".quick_menu").hasClass("off")) {
        $(".quick_menu").removeClass("off");
        $("this").removeClass("off");
        }else{
            $(".quick_menu").addClass("on");
            $(this).addClass("on");
        }

    });
    //모바일 햄버거 메뉴


    $(".quick_menu>a").click(function(){
        $(".quick_menu").toggleClass("acitve");
    });

    //모바일 메뉴 취소버튼

    
    // $(".quick_menu>a").click(function(){
    //     if($(".quick_menu").hasClass("acitve")) {
    //      $(".quick_menu").removeClass("acitve");
    //      $("this").removeClass("acitve");
    //      }else{
    //          $(".quick_menu").addClass("acitve");
    //          $(this).addClass("acitve");
    //      }

    //  });

    $(".prd_add_btn").click(function(){
        $(".prdItemList ul li").addClass('add');
      $(this).addClass("add");
      $(".prd_remove_btn").removeClass("add");
   });
   $(".prd_remove_btn").click(function(){   
      $(".prdItemList ul li").removeClass('add');
      $(this).addClass("add");
      $(".prd_add_btn").removeClass("add");
    }); //indexsub_add button
		


});