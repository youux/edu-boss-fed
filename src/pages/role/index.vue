<template>
  <div>
    <div class="online">
      <Form inline :model="searchKey" :label-width="70">
        <FormItem label="角色名称">
          <Input v-model="searchKey.name" placeholder="角色名称"></Input>
        </FormItem>
        <FormItem>
          <Button icon="md-search"  class="mar-r" @click="search(true)">查询</Button>
          <Button type="success" icon="md-refresh" @click="search(false)">重置</Button>
        </FormItem>
      </Form>
      <Button icon="md-add" type="primary">新建角色</Button>
    </div>
    <Table border :columns="columns1" :data="RolePages.records">
      <template slot-scope="{  }" slot="action">
        <Button class="mar-r" size="small">分配菜单</Button>
        <Button class="mar-r" size="small">分配资源</Button>
        <Button class="mar-r" size="small">编辑</Button>
        <Button size="small">删除</Button>
      </template>
    </Table>
    <div class="page-end" v-if="RolePages.pages>1">
      <Page :total="RolePages.total" :current="searchKey.current" :page-size="searchKey.size" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { getRolePages } from '@/services/role'

export default Vue.extend({
  name: 'role',
  data() {
    return {
      searchKey: {
        name: '',
        current: 1,
        size: 50
      },
      RolePages: {},
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
          key: 'name'
        },
        {
          align: 'center',
          title: '描述',
          key: 'description'
        },
        {
          align: 'center',
          title: '添加时间',
          key: 'createdTime'
        },
        {
          align: 'center',
          width: 300,
          title: '操作',
          key: 'action',
          slot: 'action'
        }
      ]
    }
  },
  created() {
    this.submit(this.searchKey)
  },
  methods: {
    async submit(key: any) {
      const { data } = await getRolePages(key)
      if (data.code === '000000') {
        this.RolePages = data.data
      }
    },
    search(type: boolean) {
      let Bool = false
      if (type) {
        if (this.searchKey.name) {
          Bool = true
        }
      } else {
        if (this.searchKey.name) {
          this.searchKey.name = ''
          Bool = true
        }
      }
      if (Bool) {
        this.submit(this.searchKey)
      }
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
