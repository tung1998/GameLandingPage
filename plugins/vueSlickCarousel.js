import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
const clickOutside = {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
    document.body.addEventListener('contextmenu', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
    document.body.removeEventListener('contextmenu', el.clickOutsideEvent)
  }
}

const clickNotDrag = {
  bind (el, binding, vnode) {
    el.curenntClientX = false
    el.curenntClientY = false
    el.mousedownEvent = function (event) {
      if (event && event.which === 1) {
        el.curenntClientX = event.clientX
        el.curenntClientY = event.clientY
        el.firstChild.classList.add('pe-none')
        setTimeout(() => {
          el.firstChild.classList.remove('pe-none')
        }, 2000)
      }
    }
    el.mouseupEvent = function (event) {
      if (event && event.which === 1 &&
          el.curenntClientX <= event.clientX + 10 &&
          el.curenntClientX >= event.clientX - 10 &&
          el.curenntClientY <= event.clientY + 10 &&
          el.curenntClientY >= event.clientY - 10) {
        vnode.context[binding.expression](event)
        el.firstChild.classList.remove('pe-none')
      }
    }
    el.addEventListener('mousedown', (el.mousedownEvent))
    el.addEventListener('mouseup', el.mouseupEvent)
  },
  unbind (el) {
    el.removeEventListener('mousedown', (el.mousedownEvent))
    el.removeEventListener('mouseup', el.mouseupEvent)
    el.firstChild.classList.remove('pe-none')
  }
}

// Directive
Vue.directive('click-outside', clickOutside)
Vue.directive('click-not-drag', clickNotDrag)

Vue.component('VueSlickCarousel', VueSlickCarousel)
