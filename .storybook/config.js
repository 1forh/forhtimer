import { configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from 'storybook-addon-vue-info';
import { setDefaults } from 'storybook-addon-vue-info';
import { ButtonPlugin, FormPlugin, LinkPlugin, LayoutPlugin } from 'bootstrap-vue';

import '@/plugins/fontawesome';
import '@/plugins/global-components';

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

addDecorator(withA11y);
addDecorator(withInfo);

// @TODO: figure out why this doesn't work
setDefaults({
  docsInPanel: false,
  casing: 'kebab',
});

// plugins
Vue.use(Vuex);
Vue.use(ButtonPlugin);
Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(FormPlugin);

// components
Vue.component('nuxt-link', {
  props: ['to'],
  template: '<a href="#"><slot>NuxtLink</slot></a>',
});

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
