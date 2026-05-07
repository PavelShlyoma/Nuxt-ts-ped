export default defineNuxtPlugin((nuxtApp) => {
    function throttle<T>(func: () => void, wait: number): (() => void) {
        let inThrottle = false;
        return function (): void {
            if (!inThrottle) {
                func.apply(func);
                inThrottle = true;
                setTimeout(() => {
                    inThrottle = false;
                }, wait);
            }
        };
    }
    nuxtApp.vueApp.directive('scroll', {
        mounted(el) {
            let lastScrollTop: number = 0;
            window.addEventListener('scroll', throttle(() => {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (scrollTop < 45) {
                    el.classList.remove('el-scroll');
                } else if (scrollTop > lastScrollTop) {
                    el.classList.remove('el-scroll');
                } else {
                    el.classList.add('el-scroll');
                }

                lastScrollTop = scrollTop;
            }, 200))
        },
        getSSRProps(binding, vnode) {
            return {};
        }
    });
});