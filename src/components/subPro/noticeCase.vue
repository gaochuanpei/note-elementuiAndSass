<template>
  <div style="margin: 20px 0">
      <!-- message消息框 -->
      <div>
          <el-button @click="openMessage">弹出消息提示</el-button>
          <el-button @click="openByNode">打开消息提示—by Node</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'noticeCase',
  methods: {
      openMessage () {
          this.$message({//this.$message.success
              message: '这是一条提示消息',
              showClose: true,
              center: true,
              type: 'success',
          })
      },
      openByNode () {
          let h = this.$createElement;
          this.$message({
              message: h('p', null, [
                  h('span', null, '内容可以是'),
                  h('i', {style: 'color: teal'}, 'Vnode')
              ])
          })
      },
  }
}
</script>

<style scoped>
</style>