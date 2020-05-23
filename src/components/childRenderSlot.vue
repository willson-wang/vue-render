<script>
/* eslint-disable */
export default {
    name: 'childRenderSlot',
    props: {
        a: String,
        b: String
    },
    render(h) {
        return h(
            'div',
            [
                `child --a = ${this.a} --- b = ${this.b} `,
                this.$scopedSlots.default,
                this.$scopedSlots['child-solt']
            ]
        )
    },
    mounted() {
        console.log('child render this', this)
    }
}
</script>