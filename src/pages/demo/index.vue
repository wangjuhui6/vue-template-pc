<template>
  <div class="demo">
    <el-button
      @click="get()"
    >
      我是按钮
    </el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import { getPolicy } from '@/api/login.js'

Vue.use(Button)

export default {

  name: 'demo',

  data () {
    return {}
  },

  methods: {
    async get () {
      const data = await getPolicy().then(res => {
        console.log(res)
        return res.data
      })
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.demo{}
</style>
