/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import axios from 'axios';

const state = {
  user: {},
};

const getters = {
  // getToken: state => state.user.token,
};

const actions = {
  userSignup({ commit }, user) {
    return axios({
      method: 'POST',
      url: `${process.env.VUE_APP_ROOT_API}/auth/register/`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: {
        user,
      },
    }).then((res) => {
      commit('setLoginDetails', {
        username: res.data.username,
        email: res.data.email,
      });
    });
  },
  userLogin({ commit }, user) {
    return axios({
      method: 'POST',
      url: `${process.env.VUE_APP_ROOT_API}/auth/login/`,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: {
        user,
      },
    }).then((res) => {
      console.log(res.data);
      commit('setLoginDetails', {
        username: res.data.username,
        email: res.data.email,
      });
    });
  },
};

const mutations = {
  setLoginDetails(state, { username, email }) {
    state.user.email = email;
    state.user.username = username;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
