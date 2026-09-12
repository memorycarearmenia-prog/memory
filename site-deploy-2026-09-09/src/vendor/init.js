$(document).ready(function(){
    $("#ploader_wrap").show();
    $('#search').submit(function (e) {
        e.preventDefault();
        if($('#search input[type=text]').val().length>2){
            location.href = '/' + $('input[name=lang]').val() + '/search/' + $('input[name=q]').val() + '/';
        }else{
            return false;
        }
    });

    const deBounce = (callback, delay = 250) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };

    const lSearch = () => {
            let _data = {
                lang: document.getElementsByName("lang")[0].value,
                kw: document.getElementsByName("kw")[0].value,
                category: document.getElementsByName("category")[0].value,
                sdate: document.getElementsByName("sdate")[0].value,
                edate: document.getElementsByName("edate")[0].value
            }
            
            const translations = {
                "am":{
                    "enter":"Մուտքագրեք նվազագույնը 3 նիշ",
                    "nf":"Ոչինչ գտնված չէ"
                },
                "ru":{
                    "enter":"Введите минимум 3 символа",
                    "nf":"Ничего не найдено"
                },
                "en":{
                    "enter":"Enter at least 3 characters",
                    "nf":"Nothing found"
                }
            }

            let kwr;
            kwr = document.getElementsByClassName('kwr')[0];
            let datah = translations[document.getElementsByName("lang")[0].value]['enter'];
            if(document.getElementsByName("kw")[0].value.length >= 3){
                    fetch(window.location.href, {
                        method: "POST",
                        headers: {"Content-type": "application/json; charset=UTF-8"},
                        body: JSON.stringify(_data)
                    })
                    .then(response => response.json())
                    .then(jsoned => {
                        if (jsoned.status === "success") {
                            kwr.innerHTML = jsoned.message;
                            kwr.classList.remove("fade-in","rerror");
                        } else {
                            kwr.innerHTML = `<p>${translations[document.getElementsByName("lang")[0].value]['nf']}</p>`;
                            kwr.classList.remove("fade-in","rsuccess");
                        }
                    })
                    .catch(err => console.log(err))
            }else if(document.getElementsByName("kw")[0].value.length == 0){
                kwr.innerHTML = ``;	
            }else{
                kwr.innerHTML = `<p>${datah}</p>`;
            }
    };

    let searchfield = document.querySelector(".kw")
    if(searchfield){
        searchfield.addEventListener("keyup", deBounce(lSearch, 1000))
    }

    let category = document.querySelector("#category")
    if(category){
        category.addEventListener("change", deBounce(lSearch, 1000))
    }

    let sdate = document.querySelector("#sdate")
    if(sdate){
        sdate.addEventListener("change", deBounce(lSearch, 1000))
    }

    let edate = document.querySelector("#edate")
    if(edate){
        edate.addEventListener("change", deBounce(lSearch, 1000))
    }

    async function updateSessionUI() {
        const enter = document.querySelector("li.enter");
        const account = document.querySelector("li.account");
        const register = document.querySelector("li.register");
        const logout = document.querySelector("li.logout");

        const loggedIn = await checkSession();

        //console.log("Session status:", loggedIn);

        if (loggedIn) {
            if (enter) {
                enter.style.display = "none";
            }
            if (register) {
                register.style.display = "none";
            }
            if (logout) {
                logout.style.display = "block";
            }
            if (account) {
                account.style.display = "block";
            }
        } else {
            if (enter) {
                enter.style.display = "block";
            }
            if (register) {
                register.style.display = "block";
            }
            if (logout) {
                logout.style.display = "none";
            }
            if (account) {
                account.style.display = "none";
            }
        }
    }

    updateSessionUI();

    /* Slider */
    if(document.querySelector('.mySwiper')){
        const swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1200,
        effect: "fade",
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
        fadeEffect: {
        crossFade: true
        }
        });

        document.querySelector('.nav-left').onclick = () => swiper.slidePrev();
        document.querySelector('.nav-right').onclick = () => swiper.slideNext();

        const progressWrap = document.querySelector('.progress');
        const slides = document.querySelectorAll('.swiper-slide');

        slides.forEach(() => {
            progressWrap.innerHTML += `<div><span></span></div>`;
        });

        const bars = document.querySelectorAll('.progress span');

        function runProgress(index) {

        bars.forEach((bar) => {
            bar.style.transition = "none";
            bar.style.width = "0%";
        });

        void bars[index].offsetWidth;

        bars[index].style.transition = "width 5s linear";
        bars[index].style.width = "100%";
        }

        swiper.on('slideChangeTransitionStart', () => {
            runProgress(swiper.realIndex);
        });

        runProgress(0);
    }

    const swiper = new Swiper(".reviews", {
        loop: true,
        speed: 800,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        /*
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    const partners = new Swiper(".partners", {
        loop: true,
        speed: 800,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        /*
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });

    $(".accordion .accord-header").click(function() {
        var total = $(this).height();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(500);
            $(this).removeClass('accord-opened');
        } else {
            $(".accordion .accord-content").slideUp(500);
            $(this).next("div").slideToggle(500);
            $(".accord-header").removeClass('accord-opened');
            $(this).addClass('accord-opened');
        }
    });

    /* Users registration */
    const rform = document.querySelector('#register');
    if(rform){
        rform.addEventListener('submit', async (event) => {
            event.preventDefault();
            const lang = document.getElementsByName("lang")[0].value;
            const formData = new FormData(rform);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(`/${lang}/account/register/`, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("lres")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(result.link);
                        }, 3000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Users activation code */
    const activate = document.querySelector('#activate');
    if(activate){
        activate.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(activate);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("actres")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(result.link);
                        }, 3000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Users password reset */
    const prform = document.querySelector('#reset');
    if(prform){
        prform.addEventListener('submit', async (event) => {
            event.preventDefault();
            const lang = document.getElementsByName("lang")[0].value;
            const formData = new FormData(prform);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(`/${lang}/account/reset/`, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("resres")
                    resp.innerHTML = result.message;
                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(`/${lang}/account/login/`);
                        }, 5000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Users login */
    const lform = document.querySelector('#login');
    if(lform){
        lform.addEventListener('submit', async (event) => {
            event.preventDefault();
            const lang = document.getElementsByName("lang")[0].value;
            const formData = new FormData(lform);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(`/${lang}/account/login/`, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("lres")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(result.link);
                        }, 1000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }
 
    /* Users password change */
    const npform = document.querySelector('#newpass');
    if(npform){
        npform.addEventListener('submit', async (event) => {
            event.preventDefault();
            const lang = document.getElementsByName("lang")[0].value;
            const formData = new FormData(npform);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("npres")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(`/${lang}/account/login/`);
                        }, 3000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Users data update */
    const pedit = document.querySelector('#personal-edit');
    if(pedit){
        pedit.addEventListener('submit', async (event) => {
            event.preventDefault();
            const lang = document.getElementsByName("lang")[0].value;
            const formData = new FormData(pedit);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("per")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(`/${lang}/account/index/`);
                        }, 2000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Package order */
    const package_order = document.querySelector('#package-order');
    if(package_order){
        package_order.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(package_order);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("poresp")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            //window.location.replace(`/${lang}/account/index/`);
                        }, 2000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    /* Package pay */
    const package_pay = document.querySelector('#package-pay');
    if(package_pay){
        package_pay.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(package_pay);
            const body = new URLSearchParams(formData);

            try {
                const response = await fetch(`/am/account/mypackages/pay/`, {
                    method: 'POST',
                    body
                });

                if (response.ok) {
                    const result = await response.json();
                    let resp = document.getElementById("pay_res")
                    resp.innerHTML = result.message;

                    if (result.status === "success") {
                        setTimeout(()=>{
                            window.location.replace(result.link);
                        }, 2000);
                    }
                } else {
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        });
    }

    $.fn.BeerSlider = function ( options ) {
        options = options || {};
        return this.each(function() {
            new BeerSlider(this, options);
        });
    };
    $('.beer-slider').BeerSlider({start: 50});

    $("#search div img").click(function(e) {
        e.preventDefault();
        $(".search").slideToggle(800);
    })

    $("#oc").click(function(e) {
        e.preventDefault();
        $(".df").slideToggle(800);
    })

    $("#doco").click(function(e) {
        e.preventDefault();
        $(".doco").slideToggle(800);
    })

    $("#m").click(function(e) {
        e.preventDefault();
        $(".vmenu ul").slideToggle(800);
    })

    $(".info_pages ul:not([class*='arlist'])").addClass("arlist");


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    $('.igallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $(document).on('click', '.popup-modal-close', function (e) {
    	e.preventDefault();
    	$.magnificPopup.close();
    });

    $('.popup-modal').magnificPopup({
    	type: 'inline',
    	preloader: false,
    	focus: '#email',
    	modal: true
    });

    $('body').prepend('<a href="javascript:void(0)"><img src="/img/icons/ar-up.svg" class="back-to-top"></a>');
    
    $('img.back-to-top').click(function() {
    	$('body, html').animate({
    		scrollTop: 0
    	}, 'slow');
    	return false;
    });

    $('.si').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        },
        callbacks: {
            open: function() {
            },
            close: function() {
                console.log("closed");
                //$(".pitem>img").css('transform','translateY(0%)');
                //$(".pitem figcaption").css('transform','translateY(100%)');
            }
        }
    });

});


/* Contact form */
let contform = document.querySelector("#cform")
if(contform){
    contform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let _data = {
            lang: document.getElementsByName("lang")[0].value,
            namesurname: document.getElementsByName("namesurname")[0].value,
            phone: document.getElementsByName("phone")[0].value,
            email: document.getElementsByName("email")[0].value,
            message: document.getElementsByName("message")[0].value
        }
        fetch(window.location.href, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(_data)
        })
            .then(response => response.json())
            .then(jsoned => {
                let resp = document.getElementById("respct")
                resp.innerHTML = jsoned.message

                if (jsoned.status === "success") {
                    resp.classList.remove("fade-in","rerror");
                    resp.classList.add("fade-in","rsuccess");
                    setTimeout(()=>{ resp.classList.remove("fade-in")}, 1000);
                    setTimeout(()=>{ document.body.classList.add("sent"); }, 3000);
                    setTimeout(()=>{
                        document.querySelectorAll('input[type="text"], textarea').forEach(input => {
                            input.value = '';
                        });
                    }, 3000);
                } else {
                    resp.classList.remove("fade-in","rsuccess");
                    resp.classList.add("fade-in","rerror");
                    setTimeout(()=>{ resp.classList.remove("fade-in")}, 1000);
                }
            })
            .catch(err => console.log(err))
    });
}

/* Form */
let form = document.querySelector("#cf")
if(form){
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let _data = {
            lang: document.getElementsByName("lang")[0].value,
            name: document.getElementsByName("name")[0].value,
            email: document.getElementsByName("email")[0].value,
            message: document.getElementsByName("message")[0].value
        }
        fetch(window.location.href, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(_data)
        })
            .then(response => response.json())
            .then(jsoned => {
                let resp = document.getElementById("cfr")
                resp.innerHTML = jsoned.message

                if (jsoned.status === "success") {
                    resp.classList.remove("fade-in","rerror");
                    resp.classList.add("fade-in","rsuccess");
                    setTimeout(()=>{ resp.classList.remove("fade-in")}, 1000);
                    setTimeout(()=>{ document.body.classList.add("sent"); }, 3000);
                    setTimeout(()=>{
                        document.querySelectorAll('input[type="text"], textarea').forEach(input => {
                            input.value = '';
                        });
                    }, 3000);
                } else {
                    resp.classList.remove("fade-in","rsuccess");
                    resp.classList.add("fade-in","rerror");
                    setTimeout(()=>{ resp.classList.remove("fade-in")}, 1000);
                }
            })
            .catch(err => console.log(err))
    });
}

$(window).resize(function () {
    var $this = $(this), w = $this.width();
    if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
        }
    }
})

$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		$('img.back-to-top').fadeIn('slow');
	} else {
		$('img.back-to-top').fadeOut('slow');
	}
});
$(window).load(function(){
    $("#ploader_wrap").fadeOut(500);
});


const radios = document.querySelectorAll('.city');

if (radios.length) {

    function setCookie(name, value, days = 30) {
        const expires = new Date();
        expires.setDate(expires.getDate() + days);

        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return decodeURIComponent(parts.pop().split(';').shift());
        }
        return null;
    }

    function saveFilter() {
        const selected = document.querySelector('.city:checked');

        if (selected) {
            setCookie('city', selected.value);
        }
    }

    const city = getCookie('city');

    if (city) {
        const radio = document.querySelector(`.city[value="${city}"]`);
        if (radio) {
            radio.checked = true;
        }
    } else {
        radios[0].checked = true;
        saveFilter();
    }

    radios.forEach(radio => {
        radio.addEventListener('change', saveFilter);
    });
}

async function checkSession() {
    try {
        const response = await fetch('/am/account/session/', {
            method: 'POST',
            credentials: 'include'
        });

        const data = await response.json();
        return data.loggedIn === true;

    } catch (error) {
        console.error('Error fetching session:', error);
        return false;
    }
}

function togglePassword(id, element) { 
    const input = document.getElementById(id); 
    const img = element.querySelector("img"); 
    if (input.type === "password") { 
        input.type = "text"; 
        img.src = "/img/icons/see.svg"; 
    } else { 
        input.type = "password"; 
        img.src = "/img/icons/nsee.svg"; 
    } 
}

function togglePasswords(id, element) { 
    const input = document.getElementById(id); 
    if (input.type === "password") { 
        input.type = "text"; 
    } else { 
        input.type = "password"; 
    } 
}

document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.flip-card');
      
      cards.forEach(card => {
        card.addEventListener('click', (event) => {
          card.classList.toggle('flipped');
          event.stopPropagation(); 
        });
      });

      window.addEventListener('click', () => {
        cards.forEach(card => {
          card.classList.remove('flipped');
        });
      });
})



const sp = document.querySelectorAll('.sp');
if(sp.length > 0){
    sp.forEach(link => {
        link.addEventListener('click', function() {
            const hrefValue = this.getAttribute('href');
            if (hrefValue) {
                document.cookie = `link=${encodeURIComponent(hrefValue)}; path=/; max-age=86400`;
            }
        })
    })
}