(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS

  function updateElement () {
    if (options.position === 'off' || !options.domain) return

    var positionParts = options.position.split('_')

    // create the HTML for insertion
    var sitelockDiv = document.createElement('div')
    sitelockDiv.id = 'sitelock_shield_logo'
    sitelockDiv.setAttribute('style', positionParts[0] + ': 0pt; ' + positionParts[1] + ': 0pt; position: fixed;')

    var sitelockImage = document.createElement('img')
    sitelockImage.id = 'sl_shield_image'
    sitelockImage.border = '0'
    sitelockImage.src = '//shield.sitelock.com/shield/' + options.domain
    sitelockDiv.appendChild(sitelockImage)
    document.body.appendChild(sitelockDiv)

    var vendorScript = document.createElement('script')
    vendorScript.src = 'https://shield.sitelock.com/sitelock_float.js'

    document.head.appendChild(vendorScript)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
