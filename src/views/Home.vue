<template>
  <Layout>
    <Header>
      <div class="layout-logo">EDU BOSS</div>
      <Dropdown>
        <Avatar icon="ios-person" /><span class="name">111名字</span>
        <DropdownMenu slot="list">
          <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <Menu accordion width="auto" :active-name="activeName" :open-names="openName" @on-select="selectMenu">
          <template v-for="(item,index) in menuList">
            <Submenu :name="item.name" :key="index" v-if="item.children">
              <template slot="title">
                <Icon :type="item.icon"></Icon>{{item.label}}
              </template>
              <MenuItem v-for="(li,inx) in item.children" :key="inx" :name="li.name" :to="li.path">
              <Icon :type="li.icon"></Icon>{{li.label}}</MenuItem>
            </Submenu>
            <MenuItem :name="item.name" :key="index" v-else :to="item.path">
            <Icon :type="item.icon"></Icon>{{item.label}}
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout class="content-wrap">
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem v-for="(item,index) in BreadcrumbList" :key="index">{{item}}</BreadcrumbItem>
        </Breadcrumb>
        <Content>
          <router-view />
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
      activeName: '',
      openName: [],
      BreadcrumbList: [],
      menuList: [
        {
          name: '1',
          label: '权限管理',
          icon: 'md-cog',
          children: [
            {
              name: '1-1',
              icon: 'md-contacts',
              label: '角色管理',
              path: '/role'
            },
            {
              name: '1-2',
              icon: 'logo-buffer',
              label: '菜单管理',
              path: '/menu-list'
            },
            {
              name: '1-3',
              icon: 'md-folder',
              label: '资源管理',
              path: '/resource'
            }
          ]
        },
        {
          name: '2',
          label: '课程管理',
          icon: 'md-school',
          path: '/course'
        },
        {
          name: '3',
          label: '用户管理',
          icon: 'md-person',
          path: '/user'
        },
        {
          name: '4',
          label: '广告管理',
          icon: 'ios-navigate',
          children: [
            {
              name: '4-1',
              icon: 'md-paper',
              label: '广告列表',
              path: '/advert-space'
            },
            {
              name: '4-2',
              icon: 'md-list-box',
              label: '广告位列表',
              path: '/advert'
            }
          ]
        }
      ]
    }
  },
  created () {
    const route = this.$route
    this.selectMenu('2')
    if (route.name !== 'course') {
      this.$router.push('/course')
    }
  },
  methods: {
    selectMenu (name: string): void {
      this.BreadcrumbList = []
      const arr = name.split('-')
      this.openName = [arr[0]]
      this.activeName = name

      const firstName: object = this.menuList[Number([arr[0]]) - 1]
      this.BreadcrumbList = [firstName.label]
      if (arr.length > 1) {
        this.BreadcrumbList.push(firstName.children[Number([arr[1]]) - 1].label)
      }
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
}
.ivu-layout-content {
  padding: 24px;
  background: #fff;
}
.ivu-layout-sider {
  background-color: #fff;
}
.layout-logo {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100px;
  height: 30px;
  color: #fff;
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
.name {
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  color: #fff;
}

</style>
