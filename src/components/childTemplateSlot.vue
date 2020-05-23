<template>
    <div>
        child --a = {{a}} --- b = {{b}}
        <slot class="defalt-slot"></slot>
        <slot name="child-solt" class="name-slot"></slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'childTemplateSlot',
    props: {
        a: String,
        b: String
    },
    data() {
        return {
            info: {
                name: `child-${this.a}`,
                sex: `child-${this.b}`,
            },
            info2: {
                name: `child2-${this.a}`,
                sex: `child2-${this.b}`,
            }
        }
    },
    mounted() {
        console.log('childTemplateSlot', this)
    }
}
</script>