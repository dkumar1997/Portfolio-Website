$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  })
  $('ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  })
})



function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 1290) {
        $('ul li').removeClass('fronthover');
    }
    else{
      $('ul li').addClass('fronthover')
    }
    
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});