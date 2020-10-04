<template>
  <div>
    <div class="online">
      <div></div>
      <Button icon="md-add" type="primary">新建广告</Button>
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
  name: 'advert',
  data () {
    return {
      columns1: [
        {
          width: 80,
          align: 'center',
          title: 'ID',
          key: 'id'
        },
        {
          align: 'center',
          title: '广告名称',
          key: 'age'
        },
        {
          align: 'center',
          title: '广告位置',
          key: 'address'
        },
        {
          align: 'center',
          title: '广告图片',
          key: 'address'
        },
        {
          align: 'center',
          title: '时间',
          key: 'address'
        },
        {
          align: 'center',
          title: '上线/下线',
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
