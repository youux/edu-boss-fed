<template>
  <div>
    <div class="online">
      <Form inline :model="formItem" :label-width="70">
        <FormItem label="手机号">
          <Input v-model="formItem.input" placeholder="手机号"></Input>
        </FormItem>
        <FormItem label="注册时间">
          <DatePicker :value="formItem.value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="注册时间"></DatePicker>

        </FormItem>
        <FormItem>
          <Button type="success" class="mar-r" icon="md-refresh">重置</Button>
          <Button icon="md-search">查询</Button>
        </FormItem>
      </Form>
    </div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{  }" slot="action">
        <Button class="gap" size="small" type="error">禁用</Button>
        <Button size="small">分配角色</Button>
      </template>
    </Table>
    <div class="page-end"><Page :total="100" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'user',
  data () {
    return {
      formItem: {
        input: '',
        select: '0'
      },
      columns1: [
        {
          width: 60,
          align: 'center',
          title: 'ID',
          key: 'id'
        },
        {
          align: 'center',
          title: '头像',
          key: 'id'
        },
        {
          align: 'center',
          title: '用户名',
          key: 'age'
        },
        {
          align: 'center',
          title: '手机号',
          key: 'address'
        },
        {
          align: 'center',
          title: '注册时间',
          key: 'address'
        },
        {
          width: 80,
          align: 'center',
          title: '状态',
          key: 'tag'
        },
        {
          align: 'center',
          width: 210,
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
