import type { App } from 'vue';

// plugins/i18n.js
export default {
  install: (app: App) => {
    app.directive('element-transition', (el, binding, vnode) => {
      el.style.position = 'absolute';
      const group = binding.arg || 'default';
      const currentEl = document.getElementsByClassName(`v-transition-element-${group}`)[0] as any;

      if (currentEl) {
        currentEl.classList.remove(`v-transition-element-${group}`);
        const enterEl = document.getElementsByClassName('v-enter-active')[0];

        const transitionTimes = getComputedStyle(enterEl).transition.match(/(\d+\.|\d+)+/g);
        const transitionDuration = transitionTimes?.[0];
        const transitionDelay = transitionTimes?.[1];
        const transitionTimingFunction = binding.value || 'cubic-bezier(.2,1,.5,1)';
        const transitionProperties = ['width', 'height', 'transform'];
        currentEl.style.transition = transitionProperties.map(property => `${property} ${transitionDuration}s ${transitionTimingFunction} ${transitionDelay}s`).join(', ');

        const {
          width,
          height,
          opacity,
          transform,
          top,
          bottom,
          left,
          right
        } = getComputedStyle(el);
        if (vnode.type === 'img') currentEl.src = el.src;
        currentEl.innerHTML = el.innerHTML;

        const elBCR = el.getBoundingClientRect()
        const currentElBCR = currentEl.getBoundingClientRect()
        const elTop = window.pageYOffset + elBCR.top
        const currentElBCRTop = window.pageYOffset + currentElBCR.top
        const heightDiff = elBCR.height - currentElBCR.height
        const widthDiff = elBCR.width - currentElBCR.width
        const translateX = `${elBCR.x - currentElBCR.x + widthDiff / 2}px`
        // const translateX = `${elBCR.x - currentElBCR.x + (widthDiff > 0 ? widthDiff / 2 : 0)}px`
        const translateY = `${elTop - currentElBCRTop + heightDiff / 2}px`

        currentEl.style.width = width;
        currentEl.style.height = height;
        currentEl.style.opacity = opacity;
        currentEl.style.transform = `translate(${translateX}, ${translateY})`;
        // currentEl.style.top = top;
        // currentEl.style.bottom = bottom;
        // currentEl.style.left = left;
        // currentEl.style.right = right;
      }
      el.classList.add(`v-transition-element-${group}`);
    })
  }
}