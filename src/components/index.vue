<template>
  <el-container>
    <el-header
      class="nav nav-background app1"
      id="app1"
      style="height:50px;position: absolute;width:100%;z-index:99"
    >
      <el-row>
        <el-col :span="8">
          <img class="logo" src="http://cuc-d/img/cgn-logo.png" />
          &nbsp;&nbsp;
          <font class="logo-text">{{'呵呵呵是是啊'}}</font>
        </el-col>
        <el-col :span="8">&nbsp;&nbsp;</el-col>
        <el-col :span="8">
          <div style="float:right;">
            <!-- <font class="top-name" id="nowUser" >{{nowUser }}</font> -->
            &nbsp;
            <font>
              <!-- <span @click="triggerUser" style="color:#fff;cursor:default;" >切换用户</span> -->
            </font>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container style="height:100%;">
      <div>
        <el-aside
          class="aside left-menu"
          width="290px;"
          :class="{asideWidth:$store.state.app.width}"
        >
          <el-scrollbar style="height:100%;">
            <div @click="menuOper" class="nav-icon">
              <img src="http://cuc-d/img/icon_01.png" />
            </div>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              height="100%"
              router
              text-color="#ffffff"
              popper-append-to-body
              :collapse="$store.state.app.collapse"
              background-color="#073f7a"
              style="background-color:#004978"
            >
           <el-menu-item index="caerf">
          <i class="el-icon-menu"></i>
          <span slot="title">入职管理</span>
        </el-menu-item>
          <el-submenu v-for="(item, index) in menus" :index="''+index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(it, ind) in item.children" :index="'/'+it.path">{{it.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
      </div>
      <el-container
        style="margin-top:50px;"
        :class="[$store.state.app.collapse ? 'elContainer2' : 'elContainer1' ]"
      >
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      menus: [
        { name: "资料审核", children: [{ name: "待审核", path:'caert'}, { name: "已审核", path:'caers'}] }
      ]
    };
  },
  computed: {},
  methods: {
    // getBtnPermission:function(userId){
    //   let _this = this;
    //   //先判断是否有权限，然后在进行刷新  关注vuex存储数据的存活范围
    //   if(this.$store.state.user.perms == []){
    //     getPermission(userId).then((result) => {
    //       if(result.status == "200" && result.data.code == "0"){
    //         store.commit('setPerms',result.data.data);
    //         store.commit('setHasBtnPerm');

    //         this.$router.push({path: '/'});
    //       }else{
    //         alert(result.data.msg);
    //       }
    //     }).catch((err) => {
    //       alert(err);
    //     });
    //   }
    // },
    // 用户
    // getMenuPerm(user){
    //   let _this = this;
    //   let userId = user.substr(1,user.indexOf(']')-1);
    //   getMenuPermission(userId).then((result) => {
    //     if(result.status == "200" && result.data.code == "0"){
    //       // handleRoute(router,result.data.data)
    //       //处理路由和菜单  换一种方式处理
    //       // addDynamicRoutesAndMenuTree(result.data.data);
    //       store.commit('setNavTree',result.data.data);
    //       store.commit('setHasMenuPerm');
    //       _this.getBtnPermission(userId);
    //     }else{
    //       alert(result.data.msg);
    //     }
    //   }).catch((err) => {
    //     alert(err);
    //   });
    // },

    //获取当前用户
    // getNowUser(){
    //   let _this = this;
    //   getUserInfo({t:Math.random()}).then((result) => {
    //     if(result.status == "200" && result.data.code == "0"){
    //       _this.nowUser = result.data.data;
    //       _this.$root.NOW_USER = result.data.data;
    //       sessionStorage.setItem('user', result.data.data);
    //       _this.getMenuPerm(result.data.data);
    //       //自动跳转到 发起兑奖流程  路由判断是否有权限  由于是动态路由，如果没有权限会跳转404页面
    //       // _this.$router.push("flow_add");
    //     }else{
    //       _this.$alert(result.data.msg,_this.('cm.tips'));
    //     }
    //   }).catch((err) => {
    //     _this.$alert(err,_this.('cm.tips'));
    //   });
    // },
    //折叠和展开菜单操作
    menuOper() {
      store.commit("changeCollapse");
      store.commit("changeWidth");
    },
    //路由跳转 改变菜单栏颜色 高亮显示
    menuSelect(index) {
      this.activeIndex = index;
    }
    //切换用户功能
    // triggerUser:function(){
    //   let _this = this;
    //   this.$prompt("请输入域帐号",_this.('cm.tips'),{
    //     confirmButtonText: this.('te.confirm'),
    //     cancelButtonText: this.('te.cancel'),
    //     cancelButtonClass: 'btn-second',
    //     confirmButtonClass: 'btn-default',
    //   }).then(({value}) => {
    //       changeUser(value).then((result) => {
    //       if(result.status == "200" && result.data.code =="0"){
    //         sessionStorage.removeItem('user');
    //         _this.$router.go(0);
    //       }else{
    //         _this.$alert(result.data.msg,_this.('cm.tips'));
    //       }
    //     }).catch((err) => {
    //       _this.$alert(err,_this.('cm.tips'));
    //     });
    //   }).catch((err) => {
    //     //cancel operate

    //   });
    // },
    // initProcBaseInfo(){//初始化流程基本信息
    //   let _this = this;
    //   getProSetByFullName({fullName:'BMWS\\TestProcess'}).then((result) => {
    //           if(result.status == "200" && result.data.code == "0" ){
    //               let data = result.data.data.data;
    //               if(data.length > 0){
    //                   data = data[0];
    //                   store.commit('procName',data.procSetDescr);
    //                   store.commit('procId',data.lastProcVerID);
    //                   store.commit('procSetId',data.procSetID);
    //               }else{
    //                   _this.$alert("不存在流程全名为'BMWS\\TestProcess'的流程",_this.('cm.tips'));
    //               }
    //           }else{
    //               _this.$alert(result.data.msg,_this.('cm.tips'));
    //           }

    //       }).catch((err) => {
    //           _this.$alert(err,_this.('cm.tips'));
    //       });
    // }
  },
  watch: {
    //用于菜单栏高亮
    $route() {
      this.menuSelect(this.activeIndex);
    }
  },
  mounted() {}
};
</script>

<style lang="less">
.el-menu-item.is-active {
  background-color: #052b54 !important;
  color: #fff;
}
</style>



