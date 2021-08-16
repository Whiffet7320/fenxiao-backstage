import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    lbtPage: 1, //轮播图列表
    lbtPageSize: 10,
    page: 1, //商品详情
    pageSize: 10,
    flPage: 1, //分类列表
    flPageSize: 10,
    shangpinEditform: null,
    quanbudingdanPage: 1, //全部订单列表
    quanbudingdanPageSize: 10,
    pinglunliebiaoPage: 1, //评论列表
    pinglunliebiaoPageSize: 10,
    ruzhuxinxiPage: 1, //入驻信息
    ruzhuxinxiPageSize: 10,
    yhqPage: 1, //优惠券列表
    yhqPageSize: 10,
    userPage: 1, //用户列表
    userPageSize: 10,
    wenzhangPage: 1, //文章列表
    wenzhangPageSize: 10,
    wenzhangObj: null, //文章详情
    quanbupingtaishujuPage: 1, //全部平台数据列表
    quanbupingtaishujuPageSize: 10,
    pingtaiyonghuzhucePage: 1, //平台用户注册列表
    pingtaiyonghuzhucePageSize: 10,
    YonghutixianbiaoPage: 1, //用户提现列表
    YonghutixianbiaoPageSize: 10,
    WodetuanduiPage:1,//我的团队
    WodetuanduiPageSize: 10,
    xialaPage:1,//会员下级列表
    xialaPageSize: 10,
  },
  mutations: {
    userInfo(state, str) {
      state.userInfo = str;
    },
    page(state, str) {
      state.page = str;
    },
    pageSize(state, str) {
      state.pageSize = str;
    },
    lbtPage(state, str) {
      state.lbtPage = str;
    },
    lbtPageSize(state, str) {
      state.lbtPageSize = str;
    },
    flPage(state, str) {
      state.flPage = str;
    },
    flPageSize(state, str) {
      state.flPageSize = str;
    },
    shangpinEditform(state, str) {
      state.shangpinEditform = str;
    },
    quanbudingdanPage(state, str) {
      state.quanbudingdanPage = str;
    },
    quanbudingdanPageSize(state, str) {
      state.quanbudingdanPageSize = str;
    },
    pinglunliebiaoPage(state, str) {
      state.pinglunliebiaoPage = str;
    },
    pinglunliebiaoPageSize(state, str) {
      state.pinglunliebiaoPageSize = str;
    },
    ruzhuxinxiPage(state, str) {
      state.ruzhuxinxiPage = str;
    },
    ruzhuxinxiPageSize(state, str) {
      state.ruzhuxinxiPageSize = str;
    },
    yhqPage(state, str) {
      state.yhqPage = str;
    },
    yhqPageSize(state, str) {
      state.yhqPageSize = str;
    },
    userPage(state, str) {
      state.userPage = str;
    },
    userPageSize(state, str) {
      state.userPageSize = str;
    },
    wenzhangPage(state, str) {
      state.wenzhangPage = str;
    },
    wenzhangPageSize(state, str) {
      state.wenzhangPageSize = str;
    },
    wenzhangObj(state, str) {
      state.wenzhangObj = str;
    },
    quanbupingtaishujuPage(state, str) {
      state.quanbupingtaishujuPage = str;
    },
    quanbupingtaishujuPageSize(state, str) {
      state.quanbupingtaishujuPageSize = str;
    },
    pingtaiyonghuzhucePage(state, str) {
      state.pingtaiyonghuzhucePage = str;
    },
    pingtaiyonghuzhucePageSize(state, str) {
      state.pingtaiyonghuzhucePageSize = str;
    },
    YonghutixianbiaoPage(state, str) {
      state.YonghutixianbiaoPage = str;
    },
    YonghutixianbiaoPageSize(state, str) {
      state.YonghutixianbiaoPageSize = str;
    },
    WodetuanduiPage(state, str) {
      state.WodetuanduiPage = str;
    },
    WodetuanduiPageSize(state, str) {
      state.WodetuanduiPageSize = str;
    },
    xialaPage(state, str) {
      state.xialaPage = str;
    },
    xialaPageSize(state, str) {
      state.xialaPageSize = str;
    },
  },
  actions: {

  },
});