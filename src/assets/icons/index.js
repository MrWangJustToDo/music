import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';

// 全局注册svgicon组件  可以在任何地方使用
Vue.component('SvgIcon', SvgIcon);
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./', true, /\.svg$/);
// 类似于动态import
requireAll(req);
