// Animated icons
['phone', 'mail'].forEach(function (icon) {
  var lottie = bodymovin.loadAnimation({
    container: document.getElementById('care_' + icon + '_icon'),
    path: 'images/lottie/' + icon + '.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
  })

  var container = document.getElementById('care_' + icon)
  container.addEventListener('mouseenter', function () { lottie.play() })
  container.addEventListener('mouseleave', function () { lottie.stop() })
})
