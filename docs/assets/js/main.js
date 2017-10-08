(function () {
  var forEach = function (items, fn) {
    var len = items.length
    for (var i = 0; i < len; i++) {
      fn(items[i], i, items)
    }
  }

  var $mask = document.querySelector('.mask')
  var showMask = function () {
    if (!$mask) {
      $mask = document.createElement('div')
      $mask.className = 'mask'
      document.body.appendChild($mask)
    }
  }
  var hideMask = function () {
    if ($mask) {
      document.body.removeChild($mask)
      $mask = null
    }
  }

  var modalify = function (triggerEl) {
    var modalId = triggerEl.getAttribute('data-target')
    var modal = document.getElementById(modalId)
    var modalCloseEls = document.querySelectorAll('#' + modalId + ' .js-modal-close')
    triggerEl.addEventListener('click', function (e) {
      e.preventDefault()
      showMask()
      document.body.classList.add('is-masking')
      modal.classList.add('is-active')
    })

    forEach(modalCloseEls, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        hideMask()
        document.body.classList.remove('is-masking')
        modal.classList.remove('is-active')
      })
    })
  }

  // cache selectors
  var $modalTriggers = document.querySelectorAll('.js-modal-trigger')
  forEach($modalTriggers, function (el) {
    modalify(el)
  })

})()
