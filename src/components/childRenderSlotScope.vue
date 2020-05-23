<script>
/* eslint-disable */
export default {
    name: 'childRenderSlotScope',
    props: {
        a: String,
        b: String
    },
    data() {
        return {
            info: {
                name: `child-render-${this.a}`,
                sex: `child-render-${this.b}`,
            },
            info2: {
                name: `child2-render-${this.a}`,
                sex: `child2-render-${this.b}`,
            }
        }
    },
    render(h) {
        return h(
            'div',
            [
                `child --a = ${this.a} --- b = ${this.b} `,
                this.$scopedSlots.default({
                    info: this.info
                }),
                this.$scopedSlots['child-solt']({
                    info: this.info2
                })
            ]
        )
    },
    mounted() {
        console.log('child render this', this)
    }
}
</script>