import Vue from 'Vue';
import Vuex from 'Vuex';
import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations
  });