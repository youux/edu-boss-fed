<template>
  <div>
    <div class="online">
      <div></div>
      <Button icon="md-add" type="primary">新建菜单</Button>
    </div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{  }" slot="action">
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
  name: 'menu-list',
  data () {
    return {
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
          key: 'age'
        },
        {
          align: 'center',
          title: '菜单级数',
          key: 'address'
        },
        {
          align: 'center',
          title: '前端图标',
          key: 'address'
        },
        {
          align: 'center',
          title: '排序',
          key: 'address'
        },
        {
          align: 'center',
          width: 140,
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
