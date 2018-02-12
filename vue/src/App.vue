<template>
  <div id="app">
    <!-- navbar -->
    <b-navbar toggleable="md">
      <a
       class="navbar-brand ml-auto"
       href="#/">Aya Hoshino</a>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/about">About</b-nav-item>
          <b-nav-item href="#/works">Works</b-nav-item>
          <b-nav-item href="#/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- navbar -->
    <router-view/>
    <footer
     class="section-footer"
     :class="{ fixed: nowPage == '/' || nowPage == '/contact' }">
      <div class="section__inner">
        <div class="footer-social">
          <li>
            <a
             :href="$store.state.dribbbleUrl"
             class="dribbble"
             target="_blank">
             <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a
             :href="$store.state.githubUrl"
             class="github"
             target="_blank">
             <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
             :href="$store.state.linkedinUrl"
             class="linkedin"
             target="_blank">
             <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
             :href="$store.state.facebookUrl"
             class="facebook"
             target="_blank">
             <i class="fab fa-facebook-f"></i>
            </a>
          </li>
        </div><!--//.footer-social-->
      </div><!--//.section__inner-->
    </footer>
  </div><!--//#app-->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    nowPage() {
      return this.$route.path;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.navbar {
  height: 10rem;
}
.navbar-brand {
  font-family: 'Sacramento', cursive;
  font-size: 4rem !important;
  padding-left: 6vw;
}
@media only screen and (max-width: 767px) {
  .navbar-brand {
    font-size: 2rem;
    width: 85%;
    text-align: right;
    top: 20px;
    position: fixed;
    z-index: -1;
  }
}
.navbar-toggler {
  position: fixed;
  top: 20px;
}
.ml-auto {
  margin-right: 5rem;
}
.ml-auto li.nav-item {
  margin-right: 1rem;
}
.section-footer.fixed {
  position: fixed;
  width: 100%;
  height: auto;
  bottom: 0;
}
.section__inner {
  padding: 3rem;
}
.footer-social {
  text-align: right;
  padding: 0 3.5rem;
}
.footer-social li {
  display: inline-block;
  margin-right: 10px;
}
.footer-social a {
  color: rgba(0,0,0,0.5);
}
.subtitle {
  font-size: 2rem;
}
.work a {
  color: rgba(255,255,255,0.6);
  text-decoration: underline;
}
.work a.dribbbleLink {
  color: #e93e93 !important;
}

/*=== animation for nav-items ===*/
@media only screen and (max-width: 767px) {
  .navbar-light .navbar-nav li.active a,
  .navbar-light .navbar-nav .nav-link:active,
  .navbar-light .navbar-nav .nav-link:focus,
  .footer-social li.active a,
  .footer-social a:active,
  .footer-social a:focus {
    font-weight: 900;
    color: rgba(0,0,0,0.7);
  }
}
@media only screen and (min-width: 767px) {
  .navbar-light .navbar-nav .nav-link,
  .footer-social a {
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    padding: 10px;
    position: relative;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  .navbar-light .navbar-nav .nav-link:after,
  .footer-social a:after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 7px;
    left: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .navbar-light .navbar-nav li.active a,
  .footer-social li.active a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
  .navbar-light .navbar-nav .nav-link:hover:after,
  .navbar-light .navbar-nav li.active a:after,
  .footer-social a:hover:after,
  .footer-social li.active a:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }
  .navbar-light .navbar-nav .nav-link:active,
  .navbar-light .navbar-nav .nav-link:focus,
  .footer-social a:active,
  .footer-social a:focus {
    outline: none;
    text-decoration: none;
  }
}
</style>
