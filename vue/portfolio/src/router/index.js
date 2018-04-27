import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '@/components/TopPage';
import AboutPage from '@/components/AboutPage';
import WorkPage from '@/components/WorkPage';
import ContactPage from '@/components/ContactPage';
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css'; // bootstrap CSS
// import 'bootstrap-vue/dist/bootstrap-vue.css'; // bootstrap-vue CSS

Vue.use(Router);
// Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage,
    }, {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    }, {
      path: '/works',
      name: 'WorkPage',
      component: WorkPage,
    }, {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage,
    },
  ],
});
