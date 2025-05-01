$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
// Alert User
alert(" I sincerely thank you for taking the time to visit my personal website. It truly means a lot to me that you stopped by and explored my work.

Your support and interest inspire me to continue creating and sharing. I hope you found the content valuable and engaging. If you have any feedback, suggestions, or simply want to connect, please feel free to reach out.

Once again, thank you so much for your visit — looking forward to staying in touch!.मेरो व्यक्तिगत वेबसाइटमा समय निकालेर भ्रमण गर्नुभएकोमा म हृदयदेखि धन्यवाद दिन चाहन्छु। तपाईंले मेरो काम हेर्नु भएको र रुचाउनु भएको थाहा पाउँदा मलाई अत्यन्त खुशी लागेको छ।

तपाईंको समर्थन र रुचिले मलाई अझ राम्रो सिर्जना गर्न प्रेरणा दिन्छ। आशा छ, तपाईंले वेबसाइटको सामग्री उपयोगी र रमाइलो पाउनुभयो। यदि तपाईंको कुनै सुझाव, प्रतिक्रिया वा सन्देश छ भने कृपया सम्पर्क गर्न नहिचकिचाउनुहोस्।

फेरि एकपटक, तपाईंको भ्रमणको लागि धेरै धेरै धन्यवाद। सम्पर्कमा रहन पाउँ भनेर आशा गर्दछु।
    ")
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Operator", "Blogger", "Designer", "photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Operator",  "Blogger", "Designer", "photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
