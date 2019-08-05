// 异步调用 mutation 里面的方法
import Axios from '../http/http'
import { userInfoApi } from '../http/apis'


/**
 * 设置用户信息
 * @param context
 * @returns {Promise<any>}
 */
export const getUserInfo = async ({ state, commit }) => {
  let user
  if (state.user) {
    user = state.user
  } else {
    const res = await Axios.post(userInfoApi)
    commit('setUserInfo', res)
    user = res
  }
  return new Promise((resolve) => {
    resolve(user)
  })
}

