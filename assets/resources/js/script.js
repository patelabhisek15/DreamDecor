//NAVIGATION
var util = {
    mobileMenu() {
      $("#nav").toggleClass("nav-visible");
    },
    windowResize() {
      if ($(window).width() > 800) {
        $("#nav").removeClass("nav-visible");
      }
    },
    scrollEvent() {
      var scrollPosition = $(document).scrollTop();
      
      $.each(util.scrollMenuIds, function(i) {
        var link = util.scrollMenuIds[i],
            container = $(link).attr("href"),
            containerOffset = $(container).offset().top,
            containerHeight = $(container).outerHeight(),
            containerBottom = containerOffset + containerHeight;
  
        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });
    }
  };
  
  $(document).ready(function() {
    
    util.scrollMenuIds = $("a.nav-link[href]");
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);
    
  });

  //SLIDER

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } 
//SELECT

$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});



  

/*Dropdown Menu*/
// $('.dropdown').click(function () {
//   $(this).attr('tabindex', 1).focus();
//   $(this).toggleClass('active');
//   $(this).find('.dropdown-menu').slideToggle(300);
// });
// $('.dropdown').focusout(function () {
//   $(this).removeClass('active');
//   $(this).find('.dropdown-menu').slideUp(300);
// });
// $('.dropdown .dropdown-menu li').click(function () {
//   $(this).parents('.dropdown').find('span').text($(this).text());
//   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
// });
// /*End Dropdown Menu*/


// $('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
// msg = '<span class="msg">Hidden input value: ';
// $('.msg').html(msg + input + '</span>');
// });