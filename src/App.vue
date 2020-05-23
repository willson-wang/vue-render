<template>
  <div id="app">
    <!-- <NewVSlot>
        <div>我是匿名插槽2.6之前写法，现已废弃，3.0中不会支持</div>
        <div slot="test">
            我是具名插槽
        </div>
        <div slot="test2" slot-scope="slotScope">
            我是具名作用域插槽{{slotScope.info.name}}---{{slotScope.info.age}}
        </div>
    </NewVSlot>
    <NewVSlot>
        <div>我是匿名插槽2.6之后写法，新特性</div>
        <template v-slot:test>
          <div>
              我是具名插槽
          </div>
        </template>
        <template v-slot:test2="test2">
          <div >
            我是具名作用域插槽{{test2.info.name}}---{{test2.info.age}}
          </div>
        </template>
    </NewVSlot>
    <NewVSlot>
        <div>我是匿名插槽2.6之后写法，新特性,缩写形式</div>
        <template #test>
          <div>
              我是具名插槽
          </div>
        </template>
        <template #test2="test2">
          <div >
            我是具名作用域插槽{{test2.info.name}}---{{test2.info.age}}
          </div>
        </template>
    </NewVSlot>
    <BasicRender msg="basicRender" @click.native="myClick" @onIncr="myIncr">
        <div>我是匿名slot需要插入的内容 render</div>
        <div slot="my-slot">我的具名solt插入的内容 render</div>
    </BasicRender>
    <div>---------</div>
    <NormalTemplate msg="normalTemplate" @click.native="componentClick" @my-emit="myEmit">
        <div>我是匿名slot需要插入的内容</div>
        <div slot="my-slot">我的具名solt插入的内容</div>
    </NormalTemplate>-->
    <!-- <Basic msg="basicTemplate" @click.native="componentClick" @my-emit="myEmit"></Basic>
    <div>-------</div>
    <BasicRender msg="basicRender" @click.native="myClick" @my-emit="myEmit"></BasicRender>
    <div>xxxxxx</div>-->
    <!-- <ParentTemplate></ParentTemplate>
    <div>-----</div>
    <ParentRender></ParentRender>-->
    <ParentTemplateScopeSlot></ParentTemplateScopeSlot>xxxxx
    <ParentRenderScopeSlot></ParentRenderScopeSlot>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import BasicRender from "./components/basicRender";
import NormalTemplate from "./components/normarTemplate";
import NewVSlot from "./components/newVSlot";

import Basic from "./example/basic";
import BasicRender from "./example/basicRender";
import ParentTemplate from "./example/parentTemplate";
import ParentRender from "./example/parentRender";
import ParentTemplateScopeSlot from "./example/parentTemplateScopeSlot";
import ParentRenderScopeSlot from "./example/parentRenderScopeSlot";
/* eslint-disable */

export default {
  name: "app",
  components: {
    BasicRender,
    HelloWorld,
    NormalTemplate,
    NewVSlot,
    Basic,
    ParentTemplate,
    ParentRender,
    ParentRenderScopeSlot,
    ParentTemplateScopeSlot
  },
  methods: {
    myClick() {
      console.log("myClick");
    },
    myIncr(num) {
      console.log("num", num);
    },
    componentClick() {
      // .native只能作用于组件上，意思就是在组件外层绑定一个原生事件，在父组件内能够直接定义回调函数，作用在普通的html标签上是没有用的
      console.log("componentClick");
    },
    myEmit() {
      console.log("myEmit");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
