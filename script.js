// $(document).ready(function(e){
//     $(window).scroll(function(e){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }
//         else{
//         }
//     });
// });

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    var typed=new Typed(".typing",{
        strings: ["Product Manager :)","Geek :)" , "YouTuber :D"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    })
});

