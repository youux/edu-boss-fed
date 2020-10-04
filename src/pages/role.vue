<template>
  <div>
    <div class="online">
      <Form inline :model="formItem" :label-width="70">
        <FormItem label="角色名称">
          <Input v-model="formItem.input" placeholder="角色名称"></Input>
        </FormItem>
        <FormItem>
          <Button type="success" class="mar-r" icon="md-refresh">重置</Button>
          <Button icon="md-search">查询</Button>
        </FormItem>
      </Form>
      <Button icon="md-add" type="primary">新建角色</Button>
    </div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{  }" slot="action">
        <Button class="mar-r" size="small">分配菜单</Button>
        <Button class="mar-r" size="small">分配资源</Button>
        <Button class="mar-r" size="small">编辑</Button>
        <Button size="small">删除</Button>
      </template>
    </Table>
    <div class="page-end"><Page :total="100" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'role',
  data () {
    return {
      formItem: {
        input: ''
      },
      columns1: [
        {
          width: 80,
          align: 'center',
          title: '编号',
          key: 'id'
        },
        {
          align: 'center',
          title: '角色名称',
          key: 'age'
        },
        {
          align: 'center',
          title: '描述',
          key: 'address'
        },
        {
          align: 'center',
          title: '添加时间',
          key: 'address'
        },
        {
          align: 'center',
          width: 300,
          title: '操作',
          key: 'action',
          slot: 'action'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
    }
  }
})
</script>

<style lang='scss' scoped>
.online {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.ivu-form-item {
  margin-bottom: 0;
}

</style>
