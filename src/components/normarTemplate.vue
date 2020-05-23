<template>
    <!-- 通过模版模版功能写一个组件，之后在通过render方法来写template部分，最后做对比 -->
    <div class="wrap" :class="[isDesign && 'wrap-design']" style="color: #ccc" :style="{backGroundColor: bg}" @click="goTo" id="normal" data-type="normar-type" :type="innerType">
        <div>{{count}}</div>
        <div>{{newCount}}</div>
        <div>{{msg}}</div>
        <div>
            <button @click.stop="incr">+</button>
            <button @click.stop="decr">-</button>
        </div>
        <div>
            <span v-if="count % 2">奇数</span>
            <span v-else>偶数</span>
        </div>
        <div>
            <img src="../assets/logo.png" alt="">
        </div>
        <ul>
            <li v-for="(item, index) in count" :key="index">{{item}}</li>
        </ul>
        <div @click.stop="emitHandle">
            emit
        </div>
        <div title='aaa'>
            <a href="www.baidu.com">我是一个超链接</a>
            <input type="text" maxlength="10" value="1111">
            <ChildTemplate a="a" b="b"></ChildTemplate>
            <ChildRender a="a" b="b"></ChildRender>
        </div>
        <div>
            <globalRender msg="globalRender"></globalRender>
            <globalTemplate msg="globalTemplate"></globalTemplate>
        </div>
        <div class="default-solt">
            <!-- 匿名slot -->
            <slot></slot>
        </div>
        <div class="name-slot">
            <!-- 具名slot -->
            <slot name="my-slot"></slot>
        </div>
        <div>
            <ChildRenderSlot a="aa" b="bb">
                <div>child render default solt </div>
                <div slot="child-solt">child render child-solt solt </div>
            </ChildRenderSlot>
            <ChildTemplateSlot a="aa" b="bb">
                <div>child template default solt </div>
                <div slot="child-solt">child template child-solt solt </div>
            </ChildTemplateSlot>
        </div>
        <div>
            scope slot
            <ChildRenderSlot a="aa" b="bb">
                <div slot-scope="slotScope3">child render default solt {{slotScope3.info.name}}  --- {{slotScope3.info.sex}}</div>
                <div slot="child-solt" slot-scope="slotScope4">child render child-solt solt  {{slotScope4.info.name}}  --- {{slotScope4.info.sex}} </div>
            </ChildRenderSlot>
            <ChildTemplateSlot a="aa" b="bb">
                <div slot-scope="slotScope">child template default solt {{slotScope.info.name}}  --- {{slotScope.info.sex}}</div>
                <div slot="child-solt" slot-scope="slotScope2">child template child-solt solt {{slotScope2.info.name}}  --- {{slotScope2.info.sex}} </div>
            </ChildTemplateSlot>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import ChildRender from './childRender'
import ChildTemplate from './childTemplate'
import ChildRenderSlot from './childRenderSlot'
import ChildTemplateSlot from './childTemplateSlot'

export default {
    name: 'normalTemplate',
    components: {
        ChildRender,
        ChildTemplate,
        ChildRenderSlot,
        ChildTemplateSlot
    },
    props: {
        msg: String
    },
    data() {
        return {
            isDesign: true,
            count: 0,
            innerType: 'normal'
        }
    },
    computed: {
        bg() {
            return '#fff'
        },
        newCount() {
            return `新count${this.count}`
        }
    },
    methods: {
        goTo() {
            console.log('goto', this.$listeners)
            // this.$emit('click')
        },
        incr() {
            this.count += 1
            this.$emit('incr', this.count)
        },
        decr() {
            this.count -= 1
        },
        emitHandle() {
            this.$emit('my-emit')
        }
    }
}

// var render = function() {
//   var _vm = this
//   var _h = _vm.$createElement
//   var _c = _vm._self._c || _h
//   return _c(
//     "div",
//     {
//       staticClass: "wrap",
//       class: [_vm.isDesign && "wrap-design"],
//       staticStyle: { color: "#ccc" },
//       style: { backGroundColor: _vm.bg },
//       attrs: { id: "normal", "data-type": "normar-type", type: _vm.innerType },
//       on: { click: _vm.goTo }
//     },
//     [
//       _c("div", [_vm._v(_vm._s(_vm.count))]),
//       _c("div", [_vm._v(_vm._s(_vm.newCount))]),
//       _c("div", [_vm._v(_vm._s(_vm.msg))]),
//       _c("div", [
//         _c(
//           "button",
//           {
//             on: {
//               click: function($event) {
//                 $event.stopPropagation()
//                 return _vm.incr($event)
//               }
//             }
//           },
//           [_vm._v("+")]
//         ),
//         _c(
//           "button",
//           {
//             on: {
//               click: function($event) {
//                 $event.stopPropagation()
//                 return _vm.decr($event)
//               }
//             }
//           },
//           [_vm._v("-")]
//         )
//       ]),
//       _c("div", [
//         _vm.count % 2
//           ? _c("span", [_vm._v("奇数")])
//           : _c("span", [_vm._v("偶数")])
//       ]),
//       _vm._m(0),
//       _c(
//         "ul",
//         _vm._l(_vm.count, function(item, index) {
//           return _c("li", { key: index }, [_vm._v(_vm._s(item))])
//         }),
//         0
//       ),
//       _c(
//         "div",
//         {
//           on: {
//             click: function($event) {
//               $event.stopPropagation()
//               return _vm.emitHandle($event)
//             }
//           }
//         },
//         [_vm._v("\n        emit\n    ")]
//       )
//     ]
//   )
// }
// var staticRenderFns = [
//   function() {
//     var _vm = this
//     var _h = _vm.$createElement
//     var _c = _vm._self._c || _h
//     return _c("div", [
//       _c("img", { attrs: { src: require("../assets/logo.png"), alt: "" } })
//     ])
//   }
// ]
</script>

<style>

</style>