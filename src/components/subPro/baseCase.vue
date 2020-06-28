<template>
  <div>
    <!-- 按钮el-button + el-dialog demp -->
    <div>
      <el-button @click="visible = true" type="primary" round>Button</el-button>
      <el-button @click="visible = true" type="primary" circle disabled>None</el-button>
      <el-button @click="visible = true" type="primary" circle icon="el-icon-message" size="mini"></el-button>
      <el-button type="text">word-button</el-button>
      <el-button-group>
        <el-button type="primary">button1</el-button>
        <el-button type="warning">button2</el-button>
        <el-button type="success" :loading="true">button2</el-button>
      </el-button-group>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
      </el-dialog>
    </div>

    <!-- 链接el-link -->
    <div>
      <el-link type="success" icon="el-icon-search">el-link</el-link>
      <el-link type="success" :underline="false">el-link<i class="el-icon-search el-icon--right"></i></el-link>
      <el-link type="success" target="_blank" disabled>el-link</el-link>
    </div>

    <!-- 图标el-icon -->
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-search">...</i>
    </div>

    <!-- 布局容器container -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>

    <!-- 24栏布局 el-row + el-col -->
    <div>
      <el-row type="flex" class="row-bg">
        <el-col :span="6" class="grid-content bg-purple"></el-col>
        <el-col :span="6" class="grid-content bg-purple-light"></el-col>
        <el-col :span="6" class="grid-content bg-purple"></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6" class="grid-content bg-purple"></el-col>
        <el-col :span="6" class="grid-content bg-purple-light"></el-col>
        <el-col :span="6" :lg="12" class="grid-content bg-purple hidden-lg-only"></el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'baseCase',
  data () {
    return {
      visible: false,
    }
  },
}
</script>

<style scoped>
</style>