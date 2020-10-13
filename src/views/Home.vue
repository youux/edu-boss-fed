<template>
  <Layout>
    <Header>
      <div class="layout-logo">EDU BOSS</div>
      <Dropdown trigger="click" @on-click="handleSelect" v-if="userInfo.userName">
        <Avatar :src="userInfo.portrait" /><span class="name">{{userInfo.weixinNickName}}</span>
        <DropdownMenu slot="list">
          <DropdownItem name="edit">退出</DropdownItem>
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
              <MenuItem v-for="(li,inx) in item.children" :key="inx" :name="li.path" :to="li.path">
              <Icon :type="li.icon"></Icon>{{li.label}}
              </MenuItem>
            </Submenu>

            <MenuItem :name="item.path" :key="index" v-else :to="item.path">
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
import { getUserInfo } from '@/services/login'
interface MenuProp {
  name?: string;
  icon?: string;
  label?: string;
  path?: string;
  children?: MenuProp;
}

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      userInfo: {},
      activeName: '',
      activeLabel: '',
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
  async created() {
    const { data } = await getUserInfo({ Authorization: this.$store.state.user.access_token })
    if (data.state) {
      this.userInfo = data.content
    }

    // 默认页面
    const route = this.$route
    this.selectMenu(route.path)
  },
  methods: {
    // 导航
    selectMenu(path: string): void {
      this.activeName = path
      const menu = JSON.parse(JSON.stringify(this.menuList))
      this.loopData(menu, path)
      const arr = this.activeLabel.split('-')
      const key = arr.map((item) => Number(item) - 1)
      this.openName = ([key[0].toString()] as any)
      this.BreadcrumbList = [menu[key[0]].label] as any
      if (key.length > 1) {
        this.BreadcrumbList = [menu[key[0]].label, menu[key[0]].children[key[1]].label] as any
      }
    },
    loopData(data: MenuProp[], key: string): void | string {
      for (let i = 0; i < data.length; i++) {
        const element = data[i]
        if (element.path === key) {
          this.activeLabel = element.name as string
        } else if (element.children) {
          this.loopData(element.children as any, key)
        }
      }
    },
    // header操作
    handleSelect(name: string) {
      if (name === 'edit') {
        window.localStorage.clear()
        this.$router.go(0)
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
.ivu-menu {
  height: 100%;
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
