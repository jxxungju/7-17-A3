$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();

    },function(){
        $(".main > li").find(".sub").stop().slideUp();

    })//hover


    //슬라이드이미지 영역
    $(".fade li").hide();
    $(".fade li").eq(0).show();

    var i =0; //0 1 2
    setInterval(function(){
        i = (i + 1) % 3;
        console.log(i);

        $(".fade li").eq(i).fadeIn().siblings().fadeOut();

    },3000)
    //탭메뉴
    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on")
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({display:"flex"});
    })//cont1

    //pop
    $(".p_up").click(function(){
        $(".pop").show();
    })
    $(".close").click(function(){
        $(".pop").hide();
    })
})//jquery