export default [
  {
    path: '/',
    redirect: '/app/login'
  },
  {
    path: '/app',
    component: '@/layouts/Header',
    routes: [
      {
        path: '/app/home',
        component: '@/pages/Home'
      },

      {
        exact: false,
        path: '/app/login',
        component: '@/pages/Login'
      },
      {
        path: '/app/product/:id',
        component: '@/pages/Product'
      },
    ]
  }
];
