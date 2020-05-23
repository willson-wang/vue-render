<script>
/* eslint-disable */
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
                        )
                    ]
                )
            ]
        )
    }
} 
</script>