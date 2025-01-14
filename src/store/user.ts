// initial state
import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({//存储状态信息，比如用户信息（包括以下的actions,mutations可以在vuex官网中查看）
    loginUser: {
      userName: "未登录"
    }
  }),
  actions: {//执行异步操作，触发mutations
    async getLoginUser({ commit, state }, payload) {
      // 从远程请求获取登录信息
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN
        });
      }
    }
  },
  mutations: {//定义啦更新变量的方法
    updateUser(state, payload) {
      state.loginUser = payload;
    }
  }
} as StoreOptions<any>;
