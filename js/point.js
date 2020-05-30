!(function () {
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
  /* Toggle
  /*----------------------------------------------------------------------------*/
  function Toggle(elementOrSelector) {
    if (typeof elementOrSelector === 'string') {
      this.trigger = document.querySelector(elementOrSelector)
    } else if (elementOrSelector instanceof Element) {
      this.trigger = elementOrSelector
    } else {
      throw Error('Invalid trigger selector or element!')
    }

    if (!this.trigger) {
      throw Error('Trigger element does not exist!')
    }
    
    var targetId          = this.trigger.dataset.target
    var toggleServiceName = this.trigger.dataset.toggle
    var enterServiceName  = this.trigger.dataset.enter
    var leaveServiceName  = this.trigger.dataset.leave

    if (
      typeof toggleServiceName !== 'undefined' ||
      typeof enterServiceName !== 'undefined' ||
      typeof leaveServiceName !== 'undefined'
    ) {
      if (toggleServiceName) {
        this.type = 'toggle'
        this.service = Toggle.services[toggleServiceName]
      } else if (leaveServiceName) {
        this.type = 'leave'
        this.service = Toggle.services[leaveServiceName]
      } else if (enterServiceName) {
        this.type = 'enter'
        this.service = Toggle.services[enterServiceName]
      }
    } else {
      this.type = 'toggle'
      this.service = Toggle.services.default
    }

    if (typeof targetId !== 'undefined') {
      this.target = document.getElementById(targetId)
    } else {
      this.target = this.trigger
    }

    if (!this.service || !this.target || this.trigger.__toggler__) return
    
    var self = this;
    function listener(e) {
      if (self.type === 'toggle') {
        self.toggle(e)
      } else if (self.type === 'enter') {
        self.enter(e)
      } else if (self.type === 'leave') {
        self.leave(e)
      }
    }
    this.trigger.addEventListener('click', listener)
    this.listener = listener
    this.trigger.__toggler__ = this
    if (this.service.init) {
      this.service.init.call(this);
    }
  }

  Toggle.prototype.destroy = function () {
    if (this.service.destroy) {
      this.service.destroy.call(this);
    }
    this.trigger.removeEventListener('click', this.listener)
    this.trigger.__toggler__ = null
    this.trigger = null
    this.target = null
    this.listener = null
  }

  Toggle.prototype.toggle = function (e) {
    this.service.render.call(this, 'toggle', e)
  }

  Toggle.prototype.enter = function (e) {
    this.service.render.call(this, 'enter', e)
  }

  Toggle.prototype.leave = function (e) {
    this.service.render.call(this, 'leave', e)
  }

  Toggle.services = {
    default: {
      render: function (action) {
        if (action === 'leave') {
          this.target.classList.remove('is-active')
        } else if (action === 'enter') {
          this.target.classList.add('is-active')
        } else {
          this.target.classList.toggle('is-active')
        }
      }
    }
  }

  Toggle.init = function init(elementOrSelector) {
    if (!elementOrSelector) {
      forEach(document.querySelectorAll('[data-toggle]'), function (trigger) {
        new Toggle(trigger)
      })
      forEach(document.querySelectorAll('[data-enter]'), function (trigger) {
        new Toggle(trigger)
      })
      forEach(document.querySelectorAll('[data-leave]'), function (trigger) {
        new Toggle(trigger)
      })
    } else {
      new Toggle(elementOrSelector)
    }
  }

  Toggle.register = function register(option) {
    Toggle.services[option.name] = {
      init: option.init,
      render: option.render
    }
  }

  /*----------------------------------------------------------------------------*/
  /* Modal
  /*----------------------------------------------------------------------------*/
  Toggle.register({
    name: 'modal',
    render: function(action) {
      if (action === 'leave') {
        this.target.classList.add('hidden')
      } else if (action === 'enter') {
        this.target.classList.remove('hidden')
      } else {
        this.target.classList.toggle('hidden')
      }
    }
  })

  /*----------------------------------------------------------------------------*/
  /* Dropdown
  /*----------------------------------------------------------------------------*/
  Toggle.register({
    name: 'dropdown',
    init: function() {
      var self = this;
      if (this.target !== this.trigger) return
      var sibling = this.trigger.parentNode.firstElementChild
      while(sibling) {
        if (sibling !== this.trigger && sibling.classList.contains('dropdown__content')) {
          this.target = sibling;
          break;
        }
        sibling = sibling.nextElementSibling
      }
      
      function clickoutHandler(e) {
        if (!self.target.contains(e.target) && !self.trigger.contains(e.target)) {
          self.leave()
        }
      }

      document.addEventListener('click', clickoutHandler)
      this.clickoutHandler = clickoutHandler
    },
    destroy: function() {
      document.removeEventListener('click', this.clickoutHandler)
    },
    render: function(action) {
      if (action === 'leave') {
        this.target.classList.add('hidden')
      } else if (action === 'enter') {
        this.target.classList.remove('hidden')
      } else {
        this.target.classList.toggle('hidden')
      }
    }
  })

  /*----------------------------------------------------------------------------*/
  /* Menu
  /*----------------------------------------------------------------------------*/
  Toggle.register({
    name: 'menu',
    render: function(action, e) {
      if (!e) return

      var el = e.target
      while (el && el !== e.currentTarget) {
        if (el.classList.contains('menu__link')) {
          if (
            el.nextElementSibling &&
            el.nextElementSibling.classList.contains('menu__list')
          ) {
            if (action === 'leave') {
              el.parentNode.classList.remove('is-active')
            } else if (action === 'enter') {
              el.parentNode.classList.add('is-active')
            } else {
              el.parentNode.classList.toggle('is-active')
            }
          }
          break;
        }

        el = el.parentNode
      }
    }
  })

  Toggle.init()
  window.Toggle = Toggle

})();
