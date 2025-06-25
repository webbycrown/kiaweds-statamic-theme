/* =====================================
Template Name: Kia Wedding
Author Name: WebbyCrown
Author URI: 
Description: Kia Wedding
Version:1.0
========================================*/
/*======================================
[ JS Table of contents ]
|
|___ Home one style
| |
| |___ 01. Header JS
| |___ 02. Search menu JS
| |___ 03. Responsive Sidebar JS
| |___ 04. Wp about section JS
| |___ 05. Popup Youtube JS
| |___ 06. latest blog section JS
| |___ 07. Testimonials JS
| |
|___ Home two style
| |
| |___ 01. home hero section JS
| |___ 02. testimonial-slider section JS
| |___ 03. instagram-testimonials section JS
| |
|___ Home three style
| |
| |___ 01. circle text round JS
| |___ 02. choose section JS
| |___ 03. services section JS
| |
|___  About page JS
| |
| |___ 01.  what customer says  section JS
| |
|___  team details page JS
| |
| |___ 01.  skills  section JS
| |
/*======================================
    
========================================*/

$(document).ready(function () {

    /*======================================
    01. Header JS
    ========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header.header').addClass("sticky");
        } else {
            $('header.header').removeClass("sticky");
        }
    });

    // header open dropdwon
    $(".header-dropdown").hover(function () {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children(".header-dropdown-menu").stop().slideDown(300);
        } else {
            $(this).children(".header-dropdown-menu").stop().slideUp(300);
        }
    });

    /*======================================
    02. Search menu JS
    ========================================*/


    $(".search-cart-bar .search-btn a").click(function () {
        // $('body').addClass("bg-1");
        $(".search-box").addClass("open");
    });

    $(".search-box .close-search-log").click(function () {
        $(".search-box").removeClass("open");
        // $('body').removeClass("bg-1");
    });

    // sub menu
    $(document).on('click', '.bw_drop_down_wrap', function () {
        if (jQuery(this).hasClass('active')) {
            $(this).find('.bw_dropdown_menu').slideUp();
            $(this).removeClass("active");
        } else {
            $('.bw_drop_down_wrap').removeClass("active");
            $('.bw_drop_down_wrap:not(.active) .bw_dropdown_menu').slideUp();
            $(this).addClass("active");
            $(this).find('.bw_dropdown_menu').slideToggle();
        }
    });


    /*======================================
    03. Responsive Sidebar JS
    ========================================*/
    $(document).ready(function () {
        $('.mobile-menu-icon a.open-menu').click(function () {
            $('.side-bar-content').addClass('active');
        });
        $('.side-bar-close').click(function () {
            $('.side-bar-content').removeClass('active');
        });
    });

    /*======================================
 04. Wp about section JS
 ========================================*/

    if (jQuery('.wp-about-section .wp-about-content-images-show').length > 0) {

        const categoriesWrapper = document.querySelector('.wp-about-section .wp-about-content-images-show');

        categoriesWrapper.addEventListener('mousemove', e => {
            gsap.to('img.hover-img', {
                x: e.x,
                y: e.y,
                xPercent: -50,
                yPercent: -50,
                stagger: .05
            })
        })

        gsap.utils.toArray('.wp-about-section .wp-about-content-images-show span')
            .forEach(category => {
                let { label } = category.dataset

                category.addEventListener('mouseenter', () => {
                    gsap.to(`img[data-image=${label}].hover-img`, { opacity: 1, scale: 1 })
                    gsap.set(`img[data-image=${label}].hover-img`, { zIndex: 1 })
                    gsap.set(`p[data-label=${label}]`, { zIndex: 2 })
                })

                category.addEventListener('mouseleave', () => {
                    gsap.to(`img[data-image=${label}].hover-img`, { opacity: 0, zIndex: -1, scale: .80 })
                    gsap.set(`p[data-label=${label}]`, { zIndex: 0 })
                })
            });

    }

    /*======================================
    05. Popup Youtube JS
    ========================================*/
    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });


    /*======================================
    06. latest blog section JS
    ========================================*/
    var swiper = new Swiper(".latest-blog-section .mySwiper", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".latest-blog-section .swiper-button-next",
            prevEl: ".latest-blog-section .swiper-button-prev",
        },
        breakpoints: {
            "575": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "768": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            "991": {
                slidesPerView: 3,
                spaceBetween: 42,
            },
        },
    });

    /*======================================
    07. Testimonials JS
    ========================================*/
    var swiper = new Swiper(".testimonials-section .mySwiper2", {
        slidesPerView: 1,
        freeMode: false,
        watchSlidesProgress: false,
    });
    var swiper2 = new Swiper(".testimonials-section .swiper", {
        navigation: {
            nextEl: ".testimonials-section .swiper-button-next",
            prevEl: ".testimonials-section .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    /*======================================
    08. Faq's JS
    ========================================*/
    if (jQuery('.wc-faq-accordian').length > 0) {
        $('.wc-faq-accordian-title').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).siblings('.wc-faq-accordian-content').slideUp();
                $(this).removeClass('active');
            } else {
                $(this).siblings('.wc-faq-accordian-content').slideToggle();
                $(this).toggleClass('active');
            }
        });
    }

    /*======================================
    Style two JS
    ========================================*/
    /*======================================
    01. home hero section JS
    ========================================*/
    var swiper = new Swiper(".home-hero-section .mySwiper", {
        slidesPerView: 1,
        autoplay: true,
    });

    /*======================================
    02. testimonial-slider section JS
    ========================================*/
    var swiper = new Swiper(".testimonial-section-style-2 .mySwiper", {
        slidesPerView: 1,
        speed: 300,
    });
    var swiper = new Swiper(".testimonial-section-style-2 .mySwiper2", {
        slidesPerView: 1,
        speed: 300,
        navigation: {
            nextEl: ".testimonial-section-style-2 .swiper-button-next",
            prevEl: ".testimonial-section-style-2 .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    /*======================================
    03. instagram-testimonials section JS
    ========================================*/
    var swiper = new Swiper(".instagram-section .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        breakpoints: {
            "575": {
                slidesPerView: 2,
            },
            "768": {
                slidesPerView: 3,
            },
            "991": {
                slidesPerView: 6,
            },
        },
    });

    /*======================================
    Style three JS
    ========================================*/

    /*======================================
    01. circle text round JS
    ========================================*/

    if (jQuery('#heart-text').length > 0) {
        new CircleType(document.getElementById('heart-text'));
    }

    if (jQuery('#heart-text-two').length > 0) {
        new CircleType(document.getElementById('heart-text-two'));
    }

    if (jQuery('#heart-text-three').length > 0) {
        new CircleType(document.getElementById('heart-text-two'));
    }

    /*======================================
    02. choose section JS
    ========================================*/
    (function ($) {
        // Variables
        const $tabLink = $('#tabs-section .tab-link');
        const $tabBody = $('#tabs-section .tab-body');
        let timerOpacity;

        // Toggle Class
        const init = () => {
            // Menu Click
            $tabLink.off('click').on('click', function (e) {
                // Prevent Default
                e.preventDefault();
                e.stopPropagation();

                // Clear Timers
                window.clearTimeout(timerOpacity);

                // Toggle Class Logic
                // Remove Active Classes
                $tabLink.removeClass('active ');
                $tabBody.removeClass('active ');
                $tabBody.removeClass('active-content');

                // Add Active Classes
                $(this).addClass('active');
                $($(this).attr('href')).addClass('active');

                // Opacity Transition Class
                timerOpacity = setTimeout(() => {
                    $($(this).attr('href')).addClass('active-content');
                }, 50);
            });
        };

        /*======================================
        03. services section JS
        ========================================*/
        var swiper = new Swiper(".services-section .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            mousewheel: false,
            navigation: {
                nextEl: ".services-section .swiper-button-next",
                prevEl: ".services-section .swiper-button-prev",
            },
            breakpoints: {
                "575": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "767": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                "991": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                "1200": {
                    slidesPerView: 2,
                    spaceBetween: 80,
                },
            },
        });


        /*======================================
        About page JS
        ========================================*/
        /*======================================
        01. what customer says  section JS
        ========================================*/
        var swiper = new Swiper(".our-latest-news-section .mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".our-latest-news-section .swiper-button-next",
                prevEl: ".our-latest-news-section .swiper-button-prev",
            },
            breakpoints: {
                "575": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "991": {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
            },
        });


        /*======================================
        team details page JS
        ========================================*/
        /*======================================
        01. skills  section JS
        ========================================*/
        var lang = {
            "html": "80%",
            "css": "95%",
            "javascript": "56%"
        };

        var multiply = 4;

        $.each(lang, function (language, pourcent) {

            var delay = 700;

            setTimeout(function () {
                $('#' + language + '-pourcent').html(pourcent);
            }, delay * multiply);

            multiply++;

        });



        // loader
        //After 2s preloader is fadeOut
        $('body, html').addClass('no-scroll');
        $('.preloader').delay(2000).fadeOut('slow');
        setTimeout(function () {
            //After 2s, the no-scroll class of the body will be removed
            $('body, html').removeClass('no-scroll');
        }, 2000); //Here you can change preloader time


        // Document Ready
        $(function () {
            init();
        });
    }(jQuery));

    $(document).on('submit','.subscribed-form', function(e) {
        e.preventDefault(); 
        const $form = $(this);  
        var $message = $form.find('.form-message');
        const email = $form.find('#email').val();

        $.ajax({
            url: newsLetterUrl,  
            method: 'get',
            data: {
                email:email
            },
            dataType: 'json',
            success: function(response) {
                // You get a JSON response from Statamic
               if(response.status  == true) {
                  $message.text(response.message).css('color', '#C69247').fadeIn();
                  setTimeout(() => {
                    $form[0].reset();
                    $message.html(''); 
                }, 1500);

              }else{
                 $message.text(response.message).css('color', '#df5243').fadeIn();

              } 
            },
            error: function(response) {
                if (response.responseJSON.error) {
                   $.each(response.responseJSON.error, function(field, message) {
                      const $input = $form.find('[name="' + field + '"]');
                      const $errorContainer = $form.find('[data-error-for="' + field + '"]');

                      $input.addClass('error');
                      $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
                  });
               }


           }
        });
    });

    $(document).on('submit','#contact-form', function(e) {
        e.preventDefault(); 

        const $form = $(this);
        const $messages = $form.find('#form-response');
        $messages.html(''); 
        const formData = new FormData(this);

        $.ajax({
            url: $form.attr('action'),  
            method: 'POST',
            data: formData,
            processData: false, 
            contentType: false, 
            success: function(response) {

                $('.field-error.text-danger').text('');
                if(response.success) {
                    $messages.text("Thank you! We'll be in touch shortly.").css('color', '#C69247').fadeIn();

                    setTimeout(() => {
                        $form[0].reset();
                        $messages.html(''); 
                    }, 1500);
                }
            },
            error: function(response) {
                if (response.responseJSON.error) {
                    $.each(response.responseJSON.error, function(field, message) {
                        const $input = $form.find('[name="' + field + '"]');
                        const $errorContainer = $form.find('[data-error-for="' + field + '"]');

                        $input.addClass('error');
                        $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
                    });
                }
            }
        });
    });


   $(document).on('click', '.ajax-load-more-grid', function (e) {
    e.preventDefault();

    const $button = $(this);
    const nextPageUrl = $button.attr('href');
    var lastPage = parseInt($('.lastPage').val());
    var pageNum = 1;
    if (nextPageUrl) {
      var urlParams = new URLSearchParams(nextPageUrl.split('?')[1]);
      pageNum = parseInt(urlParams.get('page')) || 1;
    }

    $button.find('img').removeClass('d-none');

    if (!nextPageUrl) {
        $button.find('img').removeClass('d-none');
        return;

    }

    $button.prop('disabled', true).addClass('loading');

    $.ajax({
        url: nextPageUrl,
        type: 'GET',
        dataType: 'html',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        success: function (response) {
            const $response = $('<div>').html(response);
            const $newItems = $response.find('.grid-item');
            const $newLoadMore = $response.find('.load-more-wrap');

            $button.find('img').addClass('d-none');
            if ($newItems.length) {
                $('.faq-content.grid').append($newItems);
                   
                if (typeof Isotope !== 'undefined') {
                    $('.faq-content.grid').isotope('appended', $newItems);
                }
            }

            if ($newLoadMore.length) {
                $('.load-more-wrap').replaceWith($newLoadMore);
            } else {
                $('.load-more-wrap').remove();
            }

            if (pageNum == lastPage) {
              $('.load-more-wrap').remove(); 
          } 
          renderStarRatings();
        },
        error: function (xhr, status, error) {
            $button.find('img').removeClass('d-none');
            console.error('Load more error:', error);
        },
        complete: function () {
            $button.prop('disabled', false).removeClass('loading');
        }
    });
});

   $(document).on('click', '.ajax-load-more-grid', function (e) {
    e.preventDefault();

    const $button = $(this);
    const nextPageUrl = $button.attr('href');
    $button.find('img').removeClass('d-none');

    if (!nextPageUrl) {
        $button.find('img').addClass('d-none');
        return;
    }

    $button.prop('disabled', true).addClass('loading');

    $.ajax({
        url: nextPageUrl,
        type: 'GET',
        dataType: 'html',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        success: function (response) {
            const $response = $('<div>').html(response);
            const $newItems = $response.find('.grid-item');
            const $newModals = $response.find('.modal');
            const $newLoadMore = $response.find('.load-more-wrap');
            $button.find('img').addClass('d-none');
            if ($newItems.length) {
                $('.grid').append($newItems);
                if (typeof Isotope !== 'undefined') {
                    $('.grid').isotope('appended', $newItems);
                }
            }
            if ($newItems.length) {
                $('.grid').append($newItems);
                if (typeof Isotope !== 'undefined') {
                    $('.grid').isotope('appended', $newItems);
                }
            }

            if ($newModals.length) {
                $('.grid').append($newModals); 
            }

            if ($newLoadMore.length) {
                $('.load-more-wrap').replaceWith($newLoadMore);
            } else {
                $('.load-more-wrap').remove();
            }
            renderStarRatings();
        },
        error: function (xhr, status, error) {
            console.error('Load more error:', error);
        },
        complete: function () {
            $button.prop('disabled', false).removeClass('loading');
        }
    });
});


$(document).on('keyup','#blog-search-input', function () {
    const query = $(this).val();
    if( currentPage == 'blog-detail-with-sidebar' ){
        window.location.href = blogPageRedirect+'?search='+query;
    }

      $.ajax({
        url: searchUrl,
        type: 'GET',
        data: { q: query },
        success: function (data) {
          let html = '';

          if (data.length === 0) {
            html = '<div class="grid-item"><p class="text-center fw-bold fs-5">Oops! No blogs here right now.</p></div>';
          } else {
            data.forEach(function (item) {
                var div ='';

                if(currentPage == 'blog-with-sidebar'){
                   div =  `<div class="col-12 col-sm-6 col-md-6 p-0 grid-item">
                   <div class="blog-box">
                            <div class="blog-img img-cover">
                                <a href="/blog/${item.slug}"> ${item.image ? `<img src="${item.image}" alt="blog-img" class="object-cover">` : ''}</a>
                                <div class="date-project-btn">
                                    <p class="date">${item.date }</p>
                                    <p class="day">${item.day}</p>
                                </div>
                            </div>
                            <div class="blog-content">
                                <h3><a href="="/blog/${item.slug}"> ${item.title }</a></h3>
                                <p>${ item.short_description }</p>
                                <a href="="/blog/${item.slug}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>`;
                }

                 if(currentPage == 'blog-standard'){
                   div = `<div class="grid-item">
                    <!-- Blog Standard -->
                    <div class="blog-slider blog-standard">
                        <!-- blog-box -->
                        <div class="blog-box">
                            <div class="blog-img img-cover">
                                <a href="/blog/${item.slug}"> ${item.image ? `<img src="${item.image}" alt="blog-img" class="object-cover">` : ''}</a>
                                <div class="date-project-btn">
                                    <p class="date">${item.date }</p>
                                    <p class="day">${item.day}</p>
                                </div>
                            </div>
                            <div class="blog-content">
                                 <h3><a href="="/blog/${item.slug}"> ${item.title }</a></h3>
                                <p>${ item.short_description }</p>
                                <a href="="/blog/${item.slug}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>

                    </div>
                    
                </div>`;
                }

                html += `${div}`;
            });
          }

          $('#blog_search_div').html(html);
          $('.blog-grid-section').find('.load-more-btn').remove();
        }
        });
      });


    if(currentPage == 'blog'){
        const params = new URLSearchParams(window.location.search);
        const searchValue = params.get('search');

        if( searchValue != 'null' && searchValue != null ) {

            $.ajax({
                url: searchUrl,
                type: 'GET',
                data: { q: searchValue },
                success: function (data) {
                    let html = '';

                    if (data.length === 0) {
                        html = '<div class="grid-item"><p class="text-center fw-bold fs-5">Oops! No blogs here right now.</p></div>';
                    } else {
                        data.forEach(function (item) {

                            html += `
                    <div class="col-12 col-md-6 grid-item">
                    <div class="wc-blog-wrapper">
                    <div class="wc-blog-image img-cover">
                                <a href="/blog/${item.slug}"> ${item.image ? `<img src="${item.image}" alt="blog-img" class="object-cover">` : ''}</a>
                    </div>
                    <div class="wc-blog-content">
                    <p>${ item.updated_at } </p>
                    <h2><a href="/blog/${item.slug}"> ${ item.title }</a></h2>
                    <P>${ item.short_description }</P>
                    </div>
                    </div>
                                </div>`;
                            });
                    }

                    $('.blog_search').html(html);
                    $('.wc-blog-section').find('.load-more-btn').remove();
                }
            });
        }

    }

    renderStarRatings();

    function renderStarRatings() {
        let total = 0;
        let count = 0;

        $('.review-ratings').each(function () {
            const rating = parseInt($(this).data('rating')) || 0;
            total += rating;
            count++;

            const maxStars = 5;
            const $el = $(this);
            $el.empty();

            for (let i = 1; i <= maxStars; i++) {
                if (i <= rating) {
                    $el.append('<i class="fa fa-star"></i>');
                } else {
                    $el.append('<i class="fa-regular fa-star text-muted"></i>');
                }
            }
        });

        if (count > 0) {
            const average = (total / count).toFixed(1);
            const avgRounded = Math.round(average);
            const $avgStars = $('.average-ratings');
            const maxAvgStars = 5;

            $avgStars.empty();
            for (let j = 1; j <= maxAvgStars; j++) {
                if (j <= avgRounded) {
                    $avgStars.append('<i class="fa fa-star"></i>');
                } else {
                    $avgStars.append('<i class="fa-regular fa-star text-muted"></i>');
                }
            }
        }
    }


    const $input = $('#site-search-input');
    const $resultBox = $('#combined-search-results');
    const $loader = $('#search-loader');
    const $svg = $('#search-loader svg');
    let angle = 0;
    let rotateInterval;

    function rotate() {
        rotateInterval = setInterval(() => {
            angle = (angle + 6) % 360;
            $svg.css('transform', `rotate(${angle}deg)`);
                    }, 16); // ~60fps
    }

    rotate();

    if (!$input.length || !$resultBox.length || !$loader.length) return;

    let timeout;

    $input.on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            const query = $.trim($input.val());
            if (query.length > 0) {
                window.location.href = `/blog?search=${encodeURIComponent(query)}`;
            }
        }
    });

    $input.on('keyup', function () {
        const query = $.trim($input.val());
        clearTimeout(timeout);


        if (query.length < 2) {
            $resultBox.html('').removeClass('show');
            $loader.addClass('d-none');
            $resultBox.addClass('d-none');
            $('.search-menu-bar').css('overflow', 'visible');
            return;
        }

        $loader.removeClass('d-none');

        timeout = setTimeout(() => {
            $('.search-menu-bar').css('overflow', 'visible');
            $.ajax({
                url: headerSearch+`?q=${encodeURIComponent(query)}`,
                method: 'GET',
                success: function (html) {
                    $resultBox.removeClass('d-none');
                    $resultBox.html(html).addClass('show');
                },
                error: function () {
                    $resultBox.html('<p class="text-red-600">Error loading results.</p>').addClass('show');
                },
                complete: function () {
                    $loader.addClass('d-none');
                }
            });
        }, 500);
    });

    $(document).on('click', function (e) {
        if (!$resultBox.is(e.target) && !$input.is(e.target) && $resultBox.has(e.target).length === 0) {
            $resultBox.removeClass('show').html('');
            $loader.addClass('d-none');
            $resultBox.addClass('d-none');
            $('.search-menu-bar').css('overflow', ' ');
            $input.val('');
        }
    });


    $(document).on('click', '.toggle-view-btn', function () {
        const $btn = $(this);
        const type = $btn.data('type');
        const query = $btn.data('query');

    // Match the list container by type
        const $list = $(`#${type}-list`);

    // Handle collapse (show less)
        if ($btn.data('expanded')) {
            const cached = $btn.data('initial-items');
            if (Array.isArray(cached)) {
                const html = cached.slice(0, 5).map(item => `
                <li>
                    <div class="img-cover">${item.image.url ? `<img src="${item.image.url}" alt="logo">` : ''}</div>
                    <a href="${item.url}">${item.title}</a>
                </li>
                `).join('');
                $list.html(html);
            }

        // Update button text
            const label = type === 'blog' ? 'Blog' : (type === 'our_events' ? 'Event' : 'Services');
            $btn.text(`View All`);
            $btn.data('expanded', false);
            return;
        }

    // Expanded: load all
        $.ajax({
            url: '/ajax-search-careers-insights',
            method: 'GET',
            data: {
                q: query,
                type: type,
                full: 1
            },
            success: function (data) {
                const items = data[type];
                if (!Array.isArray(items) || items.length === 0) {
                    $list.html('<li>No results found.</li>');
                    return;
                }

            // Cache original items
                $btn.data('initial-items', items);

            // Generate full HTML
                const html = items.map(item => `
                <li>
                    <div class="img-cover">${item.image.url ? `<img src="${item.image.url}" alt="logo">` : ''}</div>
                    <a href="${item.url}">${item.title}</a>
                </li>
                `).join('');
                $list.html(html);
                const label = type === 'blog' ? 'Blog' : (type === 'our_events' ? 'Event' : 'Services');
                $btn.text(`Show Less`);
                $btn.data('expanded', true);
            },
            error: function () {
                $list.html('<li class="text-danger">Something went wrong. Try again.</li>');
            }
        });
    });

});