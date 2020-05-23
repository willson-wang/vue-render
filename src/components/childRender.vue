<script>
/* eslint-disable */
export default {
    name: 'childRender',
    props: {
        a: String,
        b: String
    },
    render(h) {
        return h(
            'div',
            [
                `child --a = ${this.a} --- b = ${this.b} `
            ]
        )
    },
    mounted() {
    }
}
</script>