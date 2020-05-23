<script>
/* eslint-disable */
export default {
    name: 'globalRender',
    props: {
        msg: String
    },
    render(h) {
        return h(
            'div',
            [
                '全局组件',
                h(
                    'div',
                    this.msg
                )
            ]
        )
    },
    mounted() {
    }
}
</script>