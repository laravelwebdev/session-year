import SessionYear from './pages/Tool'
import { createVNode, render} from 'vue'

Nova.inertia('SessionYear', SessionYear)


Nova.booting((app, store) => {
    app.mixin({
        data() {
            return {
                toDestroy: [],
            }
        },
        async mounted() {
            if (this._.type?.__file?.endsWith('MainHeader.vue')) {
                const year = Nova.config('session_year').year;

                const container = document.createElement('div')
                container.className = 'relative z-50';

                const element = this._.vnode.el.querySelector('header > div:last-child > div:last-child > div');
                if (element) {
                    const vnode = createVNode(SessionYear, {
                        year: year,
                    })

                    vnode.appContext = app._context
                    render(vnode, container)
        
                    element.insertAdjacentElement('beforebegin', container)

                    this.toDestroy.push(container)
                }
            }
        },
        unmounted() {
            for (const element of this.toDestroy) {
                render(null, element)
            }

        },
    })
})