// Livestream URL update
var $livestreamIframe = document.getElementById('livestream_iframe')
var $gebarentolkLink = document.getElementById('gebarentolk_link')
var $gebarentolkButton = document.getElementById('gebarentolk_button')

var now = new Date()

for (var i = 0; i < streams.length; i++) {
  var stream = streams[i]

  var from = new Date(stream.from)
  if (now >= from) {
    var urls = {
      regulier: 'https://www.youtube.com/embed/' + stream.ids.regulier,
      gebarentolk: 'https://youtu.be/' + stream.ids.gebarentolk
    }

    $livestreamIframe.src = urls.regulier
    $gebarentolkLink.href = urls.gebarentolk
    $gebarentolkButton.href = urls.gebarentolk

    break
  }
}

// Animated icons
var icons = ['phone', 'mail']
icons.forEach(function (icon) {
  var lottie = bodymovin.loadAnimation({
    container: document.getElementById('care_' + icon + '_icon'),
    path: 'images/lottie/' + icon + '.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
  })

  var $container = document.getElementById('care_' + icon)
  $container.addEventListener('mouseenter', function () { lottie.play() })
  $container.addEventListener('mouseleave', function () { lottie.stop() })
})
