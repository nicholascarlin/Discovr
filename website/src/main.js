import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).mount('#app')

import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

library.add(
    faSearch
)

Vue.component('font-awesome-icon', FontAwesomeIcon);

