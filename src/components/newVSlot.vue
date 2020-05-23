<template>
    <div>
        新的slot语法
        <div class="default-slot">
            <!-- 匿名插槽 -->
            <slot></slot>
        </div>
        <div class="name-slot">
            <!-- 具名插槽 -->
            <slot name="test"></slot>
        </div>
        <div>
            <!--具名作用域插槽 -->
            <slot name="test2" :info="test"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newVSlot',
    data() {
        return {
            test: {
                name: 'xiaoming',
                age: 18,
            }
        }
    },
}
</script>