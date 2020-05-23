<template>
    <div>
        <div class="default-solt">
            <!-- 匿名slot -->
            <slot></slot>
        </div>
        <div class="name-slot">
            <!-- 具名slot -->
            <slot name="my-slot"></slot>
        </div>
        <ChildRenderSlot a="aa" b="bb">
            <div>child render default solt </div>
            <div slot="child-solt">child render child-solt solt </div>
        </ChildRenderSlot>
        <ChildTemplateSlot a="aa" b="bb">
            <div>child template default solt </div>
            <div slot="child-solt">child template child-solt solt </div>
        </ChildTemplateSlot>
    </div>
</template>

<script>
/* eslint-disable */
import ChildRenderSlot from '../components/childRenderSlot'
import ChildTemplateSlot from '../components/childTemplateSlot'

export default {
    name: 'parentTemplate',
    components: {
        ChildRenderSlot,
        ChildTemplateSlot
    }
}
</script>

<style>

</style>