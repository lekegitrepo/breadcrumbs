import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import First from '@/components/first-child';
import Second from '@/components/second-child';
import Third from '@/components/third-child';
import Fourth from '@/components/fourth-child';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/first',
      name: 'First',
      component: First,
      meta: {
        breadcrumb: [
          { name: 'First page' }
        ]
      }
    },
    {
      path: '/second',
      name: 'Second',
      component: Second,
      meta: {
        breadcrumb: [
          { name: 'First page', link: 'first' },
          { name: 'Second page' }
        ]
      }
    },
    {
      path: '/third',
      name: 'Third',
      component: Third,
      meta: {
        breadcrumb: [
          { name: 'First page', link: 'first' },
          { name: 'Second page', link: 'second' },
          { name: 'Third page' }
        ]
      }
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: Fourth,
      meta: {
        breadcrumb: [
          { name: 'First page', link: 'first' },
          { name: 'Second page', link: 'second' },
          { name: 'Third page', link: 'third' },
          { name: 'Fourth page' }
        ]
      }
    },
  ],
});
