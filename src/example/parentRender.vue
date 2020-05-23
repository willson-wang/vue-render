<script>
/* eslint-disable */
import ChildRenderSlot from '../components/childRenderSlot'
import ChildTemplateSlot from '../components/childTemplateSlot'

export default {
    name: 'parentRender',
    render(h) {
        return h(
            'div',
            [
                h(
                    'div',
                    [
                        this.$slots.default
                    ]
                ),
                h(
                    'div',
                    [
                        this.$slots['my-slot']
                    ]
                ),
                h(
                    'div',
                    [
                        h(
                            ChildRenderSlot,
                            {
                                props: {
                                    a: '1',
                                    b: '2'
                                }
                            },
                            [
                                h(
                                    'div',
                                    [
                                        'child render default solt render'
                                    ]
                                ),
                                h(
                                    'div',
                                    {
                                        slot: 'child-solt',
                                    },
                                    [
                                        'child render child-slot solt render'
                                    ]
                                )
                            ]
                        ),
                        h(
                            ChildTemplateSlot,
                            {
                                props: {
                                    a: '3',
                                    b: '4'
                                }
                            },
                            [
                                h(
                                    'div',
                                    [
                                        'child template default solt render'
                                    ]
                                ),
                                h(
                                    'div',
                                    {
                                        slot: 'child-solt',
                                    },
                                    [
                                        'child template child-solt solt render'
                                    ]
                                )
                            ]
                        )
                    ]
                )
            ]
        )
    }
} 
</script>