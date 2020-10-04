<template>
  <Layout>
    <Header>
      <div class="layout-logo"></div>
      <Poptip>
        <Avatar icon="ios-person" />
        <ul class="center" slot="content">
          <li>退出</li>
        </ul>
      </Poptip>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <Menu theme="light" width="auto"  :active-name="activeName" :open-names="openName">
          <template v-for="(item,index) in menuList">
            <Submenu :name="item.name" :key="index" v-if="item.children">
              <template slot="title">
                <Icon :type="item.icon"></Icon>{{item.label}}
              </template>
              <MenuItem v-for="(li,inx) in item.children" :key="inx" :name="li.name">{{li.label}}</MenuItem>
            </Submenu>
            <MenuItem :name="item.name" :key="index" v-else>
              <Icon :type="item.icon"></Icon>{{item.label}}
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout class="content-wrap">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  data () {
    return {
      activeName: '1-2',
      openName: ['1'],
      menuList: [
        {
          name: '1',
          label: 'Item 1',
          icon: 'ios-navigate',
          children: [
            {
              name: '1-1',
              label: 'Option 1'
            },
            {
              name: '1-2',
              label: 'Option 2'
            },
            {
              name: '1-3',
              label: 'Option 3'
            }
          ]
        },
        {
          name: '2',
          label: 'Item 2',
          icon: 'ios-navigate',
          children: [
            {
              name: '2-1',
              label: 'Option 1'
            },
            {
              name: '2-2',
              label: 'Option 2'
            }
          ]
        },
        {
          name: '3',
          label: 'Item 3',
          icon: 'ios-navigate',
          children: [
            {
              name: '3-1',
              label: 'Option 1'
            }
          ]
        },
        {
          name: '4',
          label: 'Item 4',
          icon: 'ios-navigate'
        }
      ]
    }
  }
})
</script>

<style lang='scss' scoped>
.ivu-layout {
  min-height: 100%;
}
.ivu-layout-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 80px;
}
.ivu-layout-content {
  padding: 24px;
  background: #fff;
}
.ivu-layout-sider {
  background-color: #fff;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  background: #5b6270;
}
.center {
  cursor: pointer;
  text-align: center;
}
.ivu-breadcrumb {
  margin: 24px 0;
}
.content-wrap {
  padding: 0 24px 24px;
}

</style>
