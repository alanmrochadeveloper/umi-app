import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-'
  },
  nodeModulesTransform: {
    type: 'none'
  },
  routes,
  fastRefresh: {},
  layout: {
    navTheme: 'light',
    layout: 'mix',
    contentWidth: 'fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'Umi CRM',
    locale: true,
    pwa: false,
    logo: 'https://img.icons8.com/ios-filled/50/ffffff/customer-insight.png',
    iconfontUrl: ''
  },
  theme: {
    'primary-color': '#1895bb'
  }
})
