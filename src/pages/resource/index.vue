<template>
  <div>
    <div class="online">
      <Form inline :model="formItem" :label-width="70">
        <FormItem label="资源名称">
          <Input v-model="formItem.input" placeholder="资源名称"></Input>
        </FormItem>
        <FormItem label="资源路径">
          <Input v-model="formItem.input" placeholder="资源路径"></Input>
        </FormItem>
        <FormItem label="资源分类">
          <Select v-model="formItem.select">
            <Option value="0">全部</Option>
            <Option value="1">上架</Option>
            <Option value="2">下架</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="success" class="mar-r" icon="md-refresh">重置</Button>
          <Button icon="md-search">查询</Button>
        </FormItem>
      </Form>
      <div>
        <Button class="mar-r">资源分类</Button>
        <Button icon="md-add" type="primary">新建资源</Button>
      </div>
    </div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{  }" slot="action">
        <Button type="success" size="small" v-if="true">上架</Button>
        <Button type="error" size="small" v-else>下架</Button>
        <Button class="gap" size="small">编辑</Button>
        <Button size="small">内容管理</Button>
      </template>
    </Table>
    <div class="page-end"><Page :total="100" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'resource',
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
          title: '课程名称',
          key: 'age'
        },
        {
          align: 'center',
          title: '价格',
          key: 'address'
        },
        {
          align: 'center',
          title: '排序',
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
