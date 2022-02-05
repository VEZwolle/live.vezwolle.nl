// Livestream URL update
updateCurrentLivestream()

// Check every 30 seconds
setInterval(function () { updateCurrentLivestream() }, 30000)

function updateCurrentLivestream () {
  var $livestreamIframe = document.getElementById('livestream_iframe')
  // var $gebarentolkLink = document.getElementById('gebarentolk_link')
  // var $gebarentolkButton = document.getElementById('gebarentolk_button')

  var now = new Date()

  for (var i = 0; i < streams.length; i++) {
    var stream = streams[i]

    var from = new Date(stream.from)
    if (now >= from) {
      if (!stream.ids) {
        $livestreamIframe.src = getComingSoonScreen(stream.poster)
        break
      }

      var urls = {
        regulier: 'https://www.youtube.com/embed/' + stream.ids.regulier + '?autoplay=1',
        gebarentolk: 'https://youtu.be/' + stream.ids.gebarentolk
      }

      if ($livestreamIframe.src === urls.regulier) {
        break // Url already set
      }

      $livestreamIframe.src = urls.regulier
      // $gebarentolkLink.href = urls.gebarentolk
      // $gebarentolkButton.href = urls.gebarentolk

      break
    }
  }
}

function getComingSoonScreen (poster) {
  poster = poster || 'comingsoon.jpg'

  var imageFolder = window.location.origin + '/images/'
  var imagePath = imageFolder + poster

  var html = '<body style="background: url(\'' + imagePath + '\') center / cover;"></body>'
  return 'data:text/html;charset=utf-8,' + escape(html)
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
