(function () {
  /*----------------------------------------------------------------------------*/
  /* Helpers
  /*----------------------------------------------------------------------------*/
  var forEach = function (items, fn) {
    var len = items.length
    for (var i = 0; i < len; i++) {
      fn(items[i], i, items)
    }
  }

  /*----------------------------------------------------------------------------*/
  /* Navigation
  /*----------------------------------------------------------------------------*/
  forEach(document.getElementsByClassName('navigation'), function (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.classList.contains('navigation__label')) {
        e.target.parentNode.classList.toggle('is-open')
      }
    })
  })
  
  /*----------------------------------------------------------------------------*/
  /* Modal
  /*----------------------------------------------------------------------------*/
  var Mask = {
    elm: document.querySelector('.mask'),
    show: function () {
      if (!Mask.elm) {
        Mask.elm = document.createElement('div')
        Mask.elm.className = 'mask'
        document.body.appendChild(Mask.elm)
        document.body.classList.add('is-masking')
      }
    },
    hide: function () {
      if (Mask.elm) {
        document.body.removeChild(Mask.elm)
        document.body.classList.remove('is-masking')
        Mask.elm = null
      }
    }
  }

  function modalify(triggerEl) {
    var modalId = triggerEl.getAttribute('data-target')
    var modal = document.getElementById(modalId)
    var modalCloseEls = document.querySelectorAll('#' + modalId + ' .js-modal-close')
    triggerEl.addEventListener('click', function (e) {
      e.preventDefault()
      Mask.show()
      modal.classList.remove('hidden')
    })

    forEach(modalCloseEls, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        Mask.hide()
        modal.classList.add('hidden')
      })
    })
  }

  forEach(document.querySelectorAll('.js-modal-trigger'), modalify)

})()
