<template>
  <Layout>
    <Card>
      <div slot="title" class="title">EDU BOSS 管理系统</div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.phone" placeholder="手机号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button long :loading="loading" type="primary" @click="handleSubmit('formInline')">
            <span v-if="!loading">登录</span>
            <span v-else>登录中...</span>
          </Button>
        </FormItem>
      </Form>
    </Card>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { loginTo } from '@/services/login'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      formInline: {
        phone: '18201288771',
        password: '111111'
      },
      ruleInline: {
        phone: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '请输入6位数以上的密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    handleSubmit(name: string) {
      this.loading = true;
      (this.$refs[name] as any).validate(
        async (valid: boolean) => {
          if (valid) {
            // 登录
            const { data } = await loginTo(this.formInline)
            if (data.state === 1) {
              this.setUser(data.content)
              this.$Message.success('登录成功')
              this.$router.push(this.$route.query.redirect as string | '/')
            } else {
              this.$Message.error(data.message)
            }
          } else {
            this.$Message.error('验证失败')
          }
          this.loading = false
        }
      )
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
