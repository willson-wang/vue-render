<template>
    <div>
        全局组件
        <div>{{msg}}</div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'globalTemplate',
    props: {
        msg: String
    },
    mounted() {
    }
}
</script>