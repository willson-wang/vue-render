<template>
    <div>
        <ChildRenderSlotScope a="aa" b="bb">
            <div slot-scope="slotScope3">child render default solt {{slotScope3.info.name}}  --- {{slotScope3.info.sex}}</div>
            <div slot="child-solt" slot-scope="slotScope4">child render child-solt solt  {{slotScope4.info.name}}  --- {{slotScope4.info.sex}} </div>
        </ChildRenderSlotScope>
        <ChildTemplateSlotScope a="aa" b="bb">
            <div slot-scope="slotScope">child template default solt {{slotScope.info.name}}  --- {{slotScope.info.sex}}</div>
            <div slot="child-solt" slot-scope="slotScope2">child template child-solt solt {{slotScope2.info.name}}  --- {{slotScope2.info.sex}} </div>
        </ChildTemplateSlotScope>
    </div>
</template>

<script>
/* eslint-disable */
import ChildRenderSlotScope from '../components/childRenderSlotScope'
import ChildTemplateSlotScope from '../components/childTemplateSlotScope'

export default {
    name: 'parentTemplateScopeSlot',
    components: {
        ChildRenderSlotScope,
        ChildTemplateSlotScope
    }
}
</script>

<style>

</style>