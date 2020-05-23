<script>
/* eslint-disable */
import ChildRenderSlotScope from '../components/childRenderSlotScope'
import ChildTemplateSlotScope from '../components/childTemplateSlotScope'

export default {
    name: 'parentRenderSlotScope',
    render(h) {
        return h(
            'div',
            [
                h(
                    'div',
                    [
                        'scope slot',
                        h(
                            ChildRenderSlotScope,
                            {
                                props: {
                                    a: '999',
                                    b: '888'
                                },
                                scopedSlots: {
                                    default: (props) => {
                                        return h(
                                            'div',
                                            [
                                                `child render default solt render ${props.info.name} xxx ${props.info.sex}`
                                            ]
                                        )
                                    },
                                    'child-solt': (props) => {
                                        return h(
                                            'div',
                                            [
                                                `child render child-slot solt render ${props.info.name} xxx ${props.info.sex}`
                                            ]
                                        )
                                    }
                                }
                            }
                        ),
                        h(
                            ChildTemplateSlotScope,
                            {
                                props: {
                                    a: '22',
                                    b: '44'
                                },
                                scopedSlots: {
                                    default: (props) => {
                                        return h(
                                            'div',
                                            [
                                                `child template default solt render ${props.info.name} xxx ${props.info.sex}`
                                            ]
                                        )
                                    },
                                    'child-solt': (props) => {
                                        return h(
                                            'div',
                                            [
                                                `child template child-solt solt render ${props.info.name} xxx ${props.info.sex}`
                                            ]
                                        )
                                    }
                                }
                            }
                        )
                    ]
                )
            ]
        )
    }
} 
</script>