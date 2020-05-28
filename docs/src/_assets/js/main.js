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
  forEach(document.getElementsByClassName('menu__link'), function (menu) {
    const sibling = menu.nextElementSibling;

    if (sibling && sibling.classList.contains('menu__list')) {
      menu.addEventListener('click', function (e) {
        e.preventDefault()
        menu.parentNode.classList.toggle('is-active')
      })
    }
  })

  $sidebarEl = document.getElementById('sidebar')
  forEach(document.getElementsByClassName('js-sidebar-trigger'), function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      $sidebarEl.classList.toggle('is-open');
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
