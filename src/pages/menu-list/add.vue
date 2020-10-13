<template>
  <div>
    <Form :model="addMenuItem" ref="addMenuItem" :rules="ruleValidate" :label-width="90" label-colon>
      <FormItem label="菜单名称" prop="name">
        <Input v-model="addMenuItem.name"></Input>
      </FormItem>
      <FormItem label="菜单路径" prop="href">
        <Input v-model="addMenuItem.href"></Input>
      </FormItem>
      <FormItem label="上级菜单" prop="parentId">
        <Select v-model="addMenuItem.parentId">
          <Option v-for="item in cityList" :value="item.value" :key="item.label">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="描述" prop="description">
        <Input v-model="addMenuItem.description"></Input>
      </FormItem>
      <FormItem label="前端图标" prop="icon">
        <Input v-model="addMenuItem.icon"></Input>
      </FormItem>
      <FormItem label="是否显示" prop="shown">
        <RadioGroup v-model="addMenuItem.shown">
          <Radio label="是"></Radio>
          <Radio label="否"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="排序" prop="orderNum">
        <Input type="number" v-model="addMenuItem.orderNum"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" class="mar-r" @click="onSubmit">提交</Button>
        <Button @click="handleReset('addMenuItem')">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { createOrUpdateMenu } from '@/services/menu-list'
export default {
  name: 'add-menu-item',
  data () {
    return {
      addMenuItem: {},
      ruleValidate: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ],
        href: [
          { required: true, message: '请输入菜单路径', trigger: 'blur' }
        ],
        parentId: [
          { required: true, message: '请选择上级菜单', trigger: 'change' }
        ],
        icon: [
          { required: true, message: '请输入前端图标', trigger: 'blur' }
        ],
        shown: [
          { required: true, message: '请选择是否显示', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' },
          { type: 'string', min: 20, message: '描述不能少于20个字', trigger: 'blur' }
        ]
      },
      cityList: [
        {
          value: '-1',
          label: 'New York'
        },
        {
          value: '-1',
          label: 'London'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$Modal.confirm({
        title: '提示',
        content: '是否提交数据',
        onOk: async () => {
          const { data } = await createOrUpdateMenu(this.addMenuItem)
          if (data.code === '000000') {
            this.$Message.success({
              background: true,
              content: data.mesg
            })
            this.$router.back()
          }
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
div {
  font-size: 14px;
}
</style>
