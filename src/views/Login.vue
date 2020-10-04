<template>
  <Layout>
    <Card>
      <div slot="title" class="title">EDU BOSS 管理系统</div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="手机号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button long type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  data () {
    return {
      formInline: {
        user: '18201288771',
        password: '111111'
      },
      ruleInline: {
        user: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '请输入6位数以上的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name: string) {
      this.$refs[name].validate((valid: boolean) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('验证失败')
        }
      })
    }
  }
})
</script>

<style lang='scss' scoped>
.ivu-layout {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  min-height: 100%;
}
.ivu-card {
  width: 400px;
}
.title {
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
}
.ivu-form {
  padding: 10px 20px;
}
.ivu-form-item {
  &:last-child {
    margin-bottom: 0;
  }
}

</style>
