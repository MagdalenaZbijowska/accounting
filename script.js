//navbar

$(function () {
  $(document).scroll(function () {
    let $nav = $(".nav-item");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// navbar: Wrap every letter in a span

// Wrap every letter in a span
$('.ml14 .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({ loop: true })
  .add({
    targets: '.ml14 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: function (el, i) {
      return 150 + 25 * i;
    }
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//add classlist to paragraph

function addClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  if (re.test(o.className)) return
  o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('.foo-2', {
  origin: 'right',
  duration: 3000
});


sr.reveal('.foo-3', {
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', {
  duration: 10000
});

sr.reveal('.foo-5', {
  duration: 8000
});
sr.reveal('.foo-6', {
  origin: 'right',
  duration: 6000
});