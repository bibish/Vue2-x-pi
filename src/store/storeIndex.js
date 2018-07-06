import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './modules/TodoStore'
import AuthStore from './modules/AuthStore'
import EtodoStore from './modules/EtodoStore'
import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'
import statePlugin from '../plugins/states'
Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [statePlugin],
  modules: {
    TodoStore,
    EtodoStore,
    AuthStore,
    toast: createModule({
      dismissInterval: 1500
    })
  }
})

export default store
