// Livestream URL update
updateCurrentLivestream()

// Check every 30 seconds
setInterval(function () { updateCurrentLivestream() }, 30000)

function updateCurrentLivestream () {
  var $livestreamIframe = document.getElementById('livestream_iframe')
  var $gebarentolkLink = document.getElementById('gebarentolk_link')
  var $gebarentolkButton = document.getElementById('gebarentolk_button')

  var now = new Date()

  for (var i = 0; i < streams.length; i++) {
    var stream = streams[i]
    var nextStream = streams[i - 1] || null

    var from = new Date(stream.from)
    if (now >= from) {
      if (!stream.ids && nextStream) {
        $livestreamIframe.src = getComingSoonScreen(nextStream)
        break
      }

      var urls = {
        regulier: 'https://www.youtube.com/embed/' + stream.ids.regulier,
        gebarentolk: 'https://youtu.be/' + stream.ids.gebarentolk
      }

      if ($livestreamIframe.src === urls.regulier) {
        break // Url already set
      }

      $livestreamIframe.src = urls.regulier
      $gebarentolkLink.href = urls.gebarentolk
      $gebarentolkButton.href = urls.gebarentolk

      break
    }
  }
}

function getComingSoonScreen (nextStream) {
  var nextDate = new Date(nextStream.from)
  var nextTime = nextDate.getHours() + '.' + nextDate.getMinutes()

  var html = '<body style="background: #000; color: #fff; font-family: \'Ubuntu\', sans-serif; display: flex; justify-content: center; align-items: center;">'
  html += 'De uitzending is beschikbaar vanaf ' + nextTime + ' uur'
  html += '</body>'

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
