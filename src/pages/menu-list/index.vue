<template>
  <div>
    <div class="online">
      <div></div>
      <Button icon="md-add" type="primary" @click="add">新建菜单</Button>
    </div>
    <Table border :columns="columns1" :data="UserPermissions">
      <template slot-scope="{  }" slot="action">
        <Button class="mar-r" size="small">编辑</Button>
        <Button size="small">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { getUserPermissions, getPermissionsAll } from '@/services/menu-list'

export default Vue.extend({
  name: 'menu-list',
  data() {
    return {
      searchKey: {
        pageNum: 1,
        pageSize: 5
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
          title: '菜单名称',
          key: 'hname'
        },
        {
          align: 'center',
          title: '菜单级数',
          key: 'level'
        },
        {
          align: 'center',
          title: '前端图标',
          key: 'icon'
        },
        {
          align: 'center',
          title: '排序',
          key: 'orderNum'
        },
        {
          align: 'center',
          width: 140,
          title: '操作',
          key: 'action',
          slot: 'action'
        }
      ],
      UserPermissions: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    add() {
      this.$router.push('/add-menu-item')
    },
    async init() {
      const { data } = await getUserPermissions({})
      if (data.state === 1) {
        const Data = data.content.resourceList
        const key = data.content.menuList
        Data.forEach((element: any) => {
          key.forEach((e: any) => {
            if (element.updatedBy === e.updatedBy) {
              element.hname = e.name
            }
          })
        })
        this.UserPermissions = Data
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
