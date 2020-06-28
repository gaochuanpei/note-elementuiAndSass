<template>
  <div>
    <!-- dialog对话框 -->
    <div>
      <el-button @click="dialogVal = true" type="text">Open Dialog</el-button>
      <el-dialog
        title="我是title"
        :visible.sync="dialogVal">
        <span>这是一段信息</span>
        <span slot="footer">
          <el-button @click="dialogVal = false">取消</el-button>
          <el-button @click="dialogVal = false">确定</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- carousel走马灯 -->
    <div>
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 3" :key="item" :label="item + 'name'">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- backtop回到顶部 -->
    <div id="backtop">
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
export default {
  name: 'othersCase',
  data () {
    return {
      dialogVal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
$width: 10rem;
#backtop {
  width: $width;
  font: (20/24)px;
}
</style>