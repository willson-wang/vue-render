<template>
    <!-- 通过模版模版功能写一个组件，之后在通过render方法来写template部分，最后做对比 -->
    <div class="wrap" :class="[isDesign && 'wrap-design']" style="color: #ccc" :style="{backGroundColor: bg}" @click="goTo" id="normal" data-type="normar-type" :type="innerType">
        <div>{{count}}</div>
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
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'normalTemplate',
    components: {},
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
</script>

<style>

</style>