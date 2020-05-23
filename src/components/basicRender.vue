<script>
/* eslint-disable */
import ChildRender from './childRender'
import ChildTemplate from './childTemplate'
import ChildRenderSlot from './childRenderSlot'
import ChildTemplateSlot from './childTemplateSlot'

export default {
    name: 'basicRender',
    props: {
        msg: String
    },
    data() {
        return {
            isDesign: true,
            count: 0,
            innerType: 'normal',
            arr: [0]
        }
    },
    computed: {
        bg() {
            return '#fff'
        },
        newCount() {
            return `新count${this.count}`
        }
    },
    methods: {
        goTo() {
            console.log('goto', this)
            // this.$emit('click')
        },
        incr() {
            this.count += 1
            this.arr.push(this.count)
        },
        decr() {
            this.count -= 1
            this.arr.pop()
        },
        emitHandle() {
            this.$emit('my-emit')
        }
    },
    mounted() {
        console.log('this', this)
    },
    render(h) {
        return h(
            'div',
            {
                class: [
                    'warp',
                    this.isDesign && 'wrap-design'
                ],
                style: {
                    color: '#333',
                    backGroundColor: this.bg
                },
                props: {
                    a: 1
                },
                attrs: {
                    id: 'Test',
                    'data-type': "normar-type",
                    type: this.innerType
                },
                on: {
                    click: this.goTo
                }
            },
            [
                h(
                    'div',
                    [
                        `basicRender${this.count}`,
                    ]
                ),
                h(
                    'div',
                    [
                        `新${this.newCount}`,
                    ]
                ),
                h(
                    'div',
                    [
                        `${this.msg}`,
                    ]
                ),
                h(
                    'div',
                    [
                        h(
                            'button',
                            {
                                on: {
                                    click: this.incr,
                                }
                            },
                            [
                                '+'
                            ]
                        ),
                        h(
                            'button',
                            {
                                on: {
                                    click: this.decr,
                                }
                            },
                            [
                                '-'
                            ]
                        )
                    ]
                ),
                h(
                    'div',
                    [
                        h(
                            'span',
                            [
                                this.count % 2 ? '奇数' : '偶数'
                            ]
                        )
                    ]
                ),
                h(
                    'div',
                    [
                        h(
                            'img',
                            {
                                attrs: {
                                    src: require('../assets/logo.png'),
                                    alt: ''
                                }
                            }
                        )
                    ]
                ),
                h(
                    'ul',
                    [
                        this.arr.map((item, key) => {
                            return h(
                                'li',
                                {
                                    key
                                },
                                [
                                    item
                                ]
                            )
                        }) 
                    ]
                ),
                h(
                    'div',
                    {
                        on: {
                            click: this.emitHandle
                        },
                        domProps: {
                            innerHTML: 'emit'
                        }
                    }
                ),
                h(
                    'div',
                    {
                        attrs: {
                            title: 'aaa'
                        }
                    },
                    [
                        h(
                            'a',
                            {
                                domProps: {
                                    href: 'www.baidu.com'
                                }
                            },
                            [
                                '我是一个超链接'
                            ]
                        ),
                        h(
                            'input',
                            {
                                attrs: {
                                    type: 'text',
                                    maxlength: 10,
                                    value: '1111'
                                }
                            }
                        ),
                        h(
                            ChildTemplate,
                            {
                                props: {
                                    a: 'a',
                                    b: 'b'
                                },
                                class: [
                                    'child-warp',
                                    this.isDesign && 'child-wrap-design'
                                ],
                                style: {
                                    color: '#ccc',
                                    backGroundColor: this.bg
                                },
                                attrs: {
                                    id: 'child-Test',
                                    'data-type': "normar-type",
                                    type: this.innerType
                                },
                            }
                        ),
                        h(
                            ChildRender,
                            {
                                props: {
                                    a: 'a',
                                    b: 'b'
                                },
                                class: [
                                    'child-warp',
                                    this.isDesign && 'child-wrap-design'
                                ],
                                style: {
                                    color: '#ccc',
                                    backGroundColor: this.bg
                                },
                                attrs: {
                                    id: 'child-Test',
                                    'data-type': "normar-type",
                                    type: this.innerType
                                },
                            }
                        ),
                        h(
                            'div',
                            [
                                h(
                                    'globalRender',
                                    {
                                        props: {
                                            msg: 'globalRender render'
                                        }
                                    }
                                ),
                                h(
                                    'globalTemplate',
                                    {
                                        props: {
                                            msg: 'globalTemplate render'
                                        }
                                    }
                                )
                            ]
                        )
                    ]
                ),
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
                ),
                h(
                    'div',
                    [
                        'scope slot',
                        h(
                            ChildRenderSlot,
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
                            ChildTemplateSlot,
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