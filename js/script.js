// goUpButton
function goUp()
{
    $('body, html').animate(
        {
            scrollTop: 0
        }, 
    )
}
$('.up').on('click', goUp);

// burger

const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    document.querySelector('.up').classList.toggle('off');
    document.querySelector('.chat').classList.toggle('off');
    document.querySelector('.fa-bars-staggered').classList.toggle('off');
    document.querySelector('.fa-x').classList.toggle('off');
    document.querySelector('.burgerActive').classList.toggle('on');
});



$('.burgerActive nav div:nth-child(1)').on('click', function () {
    const $height = $('.nav').offset().top;

    $('body, html').animate(
        {
            scrollTop: $height
        }, 
    )
    $('.up').toggleClass('off');
    $('.chat').toggleClass('off');
    $('.fa-bars-staggered').toggleClass('off');
    $('.fa-x').toggleClass('off');
    $('.burgerActive').toggleClass('on');
    
});

$('.burgerActive nav div:nth-child(2)').on('click', function () {
    const $height = $('section.practiceArea').offset().top;

    $('body, html').animate(
        {
            scrollTop: $height
        }, 
    )
    $('.up').toggleClass('off');
    $('.chat').toggleClass('off');
    $('.fa-bars-staggered').toggleClass('off');
    $('.fa-x').toggleClass('off');
    $('.burgerActive').toggleClass('on');
    
});
$('.burgerActive nav div:nth-child(3)').on('click', function () {
    const $height = $('section.vision').offset().top;

    $('body, html').animate(
        {
            scrollTop: $height
        }, 
    )
    $('.up').toggleClass('off');
    $('.chat').toggleClass('off');
    $('.fa-bars-staggered').toggleClass('off');
    $('.fa-x').toggleClass('off');
    $('.burgerActive').toggleClass('on');
    
});
$('.burgerActive nav div:nth-child(4)').on('click', function () {
    const $height = $('section.attorneys').offset().top;

    $('body, html').animate(
        {
            scrollTop: $height
        }, 
    )
    $('.up').toggleClass('off');
    $('.chat').toggleClass('off');
    $('.fa-bars-staggered').toggleClass('off');
    $('.fa-x').toggleClass('off');
    $('.burgerActive').toggleClass('on');
    
});

$('.burgerActive nav div:nth-child(5)').on('click', function () {
    const $height = $('section.contact').offset().top;

    $('body, html').animate(
        {
            scrollTop: $height
        }, 
    )
    $('.up').toggleClass('off');
    $('.chat').toggleClass('off');
    $('.fa-bars-staggered').toggleClass('off');
    $('.fa-x').toggleClass('off');
    $('.burgerActive').toggleClass('on');
    
});

// scrollEffects

let $scrollPosition = 0;
const $elementHeight = $('.practiceArea .areas div').height();
const $area1 = $('.practiceArea .areas div:nth-child(1)').offset().top;
const $area2 = $('.practiceArea .areas div:nth-child(2)').offset().top;
const $area3 = $('.practiceArea .areas div:nth-child(3)').offset().top;
const $area4 = $('.practiceArea .areas div:nth-child(4)').offset().top;
const $area5 = $('.practiceArea .areas div:nth-child(5)').offset().top;
const $area6 = $('.practiceArea .areas div:nth-child(6)').offset().top;
const $vision = $('.vision').offset().top;
const $visionElementHeight = $('.vision h1').height() + 75;
const $ourAttor = $('.attorneys').offset().top;
const $partner1 = $('.attorneys .partners div:nth-child(1) div.img').offset().top;
const $partner2 = $('.attorneys .partners div:nth-child(2) div.img').offset().top;
const $partner3 = $('.attorneys .partners div:nth-child(3) div.img').offset().top;
const $imgHeight = $('.attorneys .partners div:nth-child(1) .img').height();
const $h2Height = $('.attorneys .partners div:nth-child(1) h2').height() +50;
const $contact = $('.contact').offset().top;
const $contactHeight = $('.contact div h1').height();
if ($scrollPosition == 0)
    {
        $('.welcome div').addClass('onWelcome');
        $('.practiceArea div h1').addClass('onArea');
        }

$(document).on('scroll', function () {
    $scrollPosition = $(document).scrollTop();
     const $windowHeight = $(window).height()
    if ($scrollPosition > $area1 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(1) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(1) h2').addClass('onArea');
    }
    if ($scrollPosition > $area2 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(2) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(2) h2').addClass('onArea');
    }
    if ($scrollPosition > $area3 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(3) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(3) h2').addClass('onArea');
    }
    if ($scrollPosition > $area4 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(4) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(4) h2').addClass('onArea');
    }
    if ($scrollPosition > $area5 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(5) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(5) h2').addClass('onArea');
    }
    if ($scrollPosition > $area6 - $windowHeight + $elementHeight)
    {
        $('.practiceArea .areas div:nth-child(6) i').addClass('onArea');
        $('.practiceArea .areas div:nth-child(6) h2').addClass('onArea');
    }
    if ($scrollPosition > $vision - $windowHeight + $visionElementHeight)
    {
        $('.vision h1').addClass('onVision');
    }
    if ($scrollPosition > $ourAttor - $windowHeight + $visionElementHeight)
    {
        $('.attorneys h1').addClass('onAttorneys');
    }
    if ($scrollPosition > $partner1 - $windowHeight + $imgHeight + $h2Height)
    {
        $('.attorneys .partners div:nth-child(1) h2').addClass('onAttorneys');
        $('.attorneys .partners div:nth-child(1) h3').addClass('onAttorneys');
    }
    if ($scrollPosition > $partner2 - $windowHeight + $imgHeight + $h2Height)
    {
        $('.attorneys .partners div:nth-child(2) h2').addClass('onAttorneys');
        $('.attorneys .partners div:nth-child(2) h3').addClass('onAttorneys');
    }
    if ($scrollPosition > $partner3 - $windowHeight + $imgHeight + $h2Height)
    {
        $('.attorneys .partners div:nth-child(3) h2').addClass('onAttorneys');
        $('.attorneys .partners div:nth-child(3) h3').addClass('onAttorneys');
    }
    if ($scrollPosition > $contact - $windowHeight + $contactHeight)
    {
        $('.contact div h1').addClass('onContact');
        }
})
