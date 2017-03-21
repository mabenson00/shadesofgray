$(document).ready(function() {

function blinker() {
    $('.blink-me').fadeOut(500);
    $('.blink-me').fadeIn(500);
}

setInterval(blinker, 1000); //Runs every second

  var selected =[]

 $('.cell'). on('click', function(e) {
  var bg = $(this).css('background-color')
  if (selected.length >0) {
    selected.forEach(function(element) {
      $(element).css('color', bg)
      $(element).fadeIn(0)
      $(element).removeClass("blink-me")
      $('span'+element).html(bg+", "+rgb2hex(bg))
      $('span'+element).css('color', bg)
    })
  } else {
    $('.paragraph').css('color', bg)
    $('.title').css('color', bg)
    $('.subhead').css('color', bg)
    $('span').html(bg+", "+rgb2hex(bg))
  }
  selected =[]
 })

  $('.title'). on('click', function(e) {
  selected.push('.title')
  $('.title').addClass("blink-me")
 })

  $('.paragraph'). on('click', function(e) {
  selected.push('.paragraph')
  $('.paragraph').addClass("blink-me")
 })

  $('.subhead'). on('click', function(e) {
  selected.push('.subhead')
  $('.subhead').addClass("blink-me")
 })


function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}



});


