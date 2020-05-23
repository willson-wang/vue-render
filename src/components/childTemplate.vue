<template>
    <div>
        child --a = {{this.a}} --- b = {{this.b}}
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'childTemplate',
    props: {
        a: String,
        b: String
    },
    mounted() {
    }
}
</script>