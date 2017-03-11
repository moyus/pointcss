(function () {
  var forEach = function (items, fn) {
    var len = items.length
    for (var i = 0; i < len; i++) {
      fn(items[i], i, items)
    }
  }

  var modalify = function (triggerEl) {
    var modalId = triggerEl.getAttribute('data-target')
    var modal = document.getElementById(modalId)
    var modalCloseEls = document.querySelectorAll('#' + modalId + ' .js-modal-close')
    triggerEl.addEventListener('click', function (e) {
      e.preventDefault()
      modal.classList.toggle('is-active');
    })

    forEach(modalCloseEls, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault()
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
