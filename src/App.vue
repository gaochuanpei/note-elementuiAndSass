<template>
  <div id="app">
    <el-header>
      <el-button-group>
        <el-button @click="changeUrl" v-for="item in urlArr" :key="item">{{ item }}</el-button>
      </el-button-group>
    </el-header>
    <router-view></router-view>
    
    <!-- transition的el新增动画 el-fade-x / el-zome-x / el-collapse-transition-->
    <div>
      <!-- 简单元素 -->
      <transition>
        <div v-if="ok">toggled content</div>
      </transition>

      <!-- 动态组件 -->
      <transition name="fade" mode="out-in" appear>
        <component :is="view" :msg="view"></component>
      </transition>

      <!-- 事件钩子 -->
      <div id="transition-demo">
        <transition @after-enter="transitionComplete">
          <div v-show="ok" id="main">toggled content</div>
        </transition>
      </div>
      <el-button @click="ok = !ok" type="primary" plain>button</el-button>
    </div>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$router)
    
  },
  data () {
    return {
      view: 'HelloWorld',
      urlArr: ['form表单', 'base基础', 'notice提示', 'others'],
      ok: true,
    }
  },
  methods: {
    transitionComplete: function (el) {
      // 传入 'el' 这个 DOM 元素作为参数。
      console.log('123', el)
    },
    
    changeUrl (event) {
      console.log(event.target.innerText)
      let path = event.target.innerText.match(/[a-zA-Z]+/)[0]
      this.$router.push({
        path: path + 'Case',
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
