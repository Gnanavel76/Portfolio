 $(document).ready(function(){
        $(window).on('load',function(){
                $('#preloader').fadeOut(1000);
        });
        let burger = $('.toggle_icon');
        let navtab = $('header');
        let dh = $(document).height();
        let wh = $(window).height();
        // Function to add active class to navigation link while scrolling
        function whenScroll(){
                $('.navlink a').each(function(){
                        let scroll = $(window).scrollTop();
                        if(scroll >= $($(this).attr('href')).offset().top - 100){
                                $('.navlink a').removeClass('active');
                                $('.navlink span').removeClass('active');
                                $(this).addClass('active');
                                $(this).siblings().addClass('active');
                                let value = (scroll / (dh - wh)) * 100;
                                $('#progress').css('height', value + '%');
                        }
                });
        }

     // Function to add animation to Skills section
     function skillAnim(){
        // Adding animation to Skills section
        let scroll = $(window).scrollTop();
        if(scroll >= $('#skills').offset().top - 100){
                let selector = document.querySelectorAll('#skills .container .skillBx .imgBx');
                selector.forEach((link) => {
                        link.style.animation = 'swim 10s ease-in-out forwards,slide 400s linear infinite 9.7s forwards';
                })
        }
     }

     // To add active class to navigation link while page reloads
     whenScroll();

     // To add animation to skill section when page reloads
     skillAnim();

     // Progrss bar
     $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        let value = (scroll / (dh - wh)) * 100;
        $('#progress').css('height', value + '%');

        // To add animation to skill section when page scolls
        skillAnim();
        // To add active class to navigation link while scrolling
        whenScroll();
     });

     // Typed.js
     new Typed('#typed',{
        strings: ['Web Developer','Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
     });

     // Changing avatars
     let circle = $('.round');
     let avatars = $('.avatars');
     let i = 1;
     let imageArray = ['assets/images/avatar.jpg','assets/images/avatar2.jpg','assets/images/avatar3.jpg']
     circle.on('animationend',function(){
         $(this).css('animation','none');
         avatars.attr('src',imageArray[i]);
         $(this).css('animation');
         $(this).css('animation','fill 5s linear 4s');
         if(i < imageArray.length - 1){
             i++;
         }
         else{
             i=0;
         }
     });

        // Navbar Toggle Icon
     burger.click(function(){
         navtab.toggleClass('active');
         burger.toggleClass('toggle_icon1');
     });

     $('.navlink a').click(function(){
        if($(window).width() <= 1080){
                navtab.toggleClass('active');
                if(burger.hasClass('toggle_icon1')){
                        burger.toggleClass('toggle_icon1');
                }
        }
})

        // Valdidating form
        $('#name_error').hide();
        $('#email_error').hide();
        $('#message_error').hide();
        $('#contact-form form').submit(function(e){
                e.preventDefault();
                // let name = validateName($('#name').val(),$('#name_error'),3,10,'name');
                // let email = validateEmail($('#email').val(),$('#email_error'));
                // let message = validateName($('#message').val(),$('#message_error'),15,250,'message');
                
        });

});
