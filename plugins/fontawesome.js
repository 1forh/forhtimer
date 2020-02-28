import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSearch, faPlus, faArrowsAlt, faBold, faItalic } from '@fortawesome/free-solid-svg-icons';

// allow Nuxt to handle css
config.autoAddCss = false;

// add icons to use in project
library.add(faSearch, faPlus, faArrowsAlt, faBold, faItalic);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
