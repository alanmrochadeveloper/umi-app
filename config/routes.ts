export default [
  {
    path: '/',
    redirect: '/app/login',
  },
  {
    path: '/app',
    component: '@/layouts/Header',
    routes: [
      {
        path: '/app/home',
        component: '@/pages/Home',
      },

      {
        exact: false,
        path: '/app/login',
        component: '@/pages/Login',
      },
      {
        path: '/app/product/:id',
        component: '@/pages/Product',
      },
    ],
  },
  {
    path: '/login',
    component: '@/pages/Login',
    laytout: false,
  },
  {
    path: '/',
    name: 'home',
    icon: 'home',
    component: '@/pages/Home',
  },
  {
    path: '/customers',
    name: 'customers',
    icon: 'user',
    component: '@/pages/Customers',
  },
  {
    path: '/opportunities',
    name: 'opportunities',
    icon: 'AccountBook',
    component: '@/pages/Opportunities',
  },
  {
    path: '/reports',
    name: 'reports',
    icon: 'BarChartOutlined',
    component: '@/pages/Reports',
  },
  {
    path: '/opportunity/:id',
    component: '@/pages/OpportunityDetail',
  },
];
