<template>
  <div id="app" class="column">
    <!-- Navbar
    ================================================== -->
    <header
      class="navbar-area row"
      ref="header"
      :class="{ scrolled: scrolled }">
      <a class="app-logo" href="#/">Aya Hoshino</a>
      <nav>
        <ul>
            <li class="navbar-items">
                <a
                  class="navbar-link"
                  href="#/about"
                  :class="{ visited : nowPage == '/about' }">About</a>
            </li>
            <li class="navbar-items" style="margin-left:5rem;">
                <a
                  class="navbar-link"
                  href="#/works"
                  :class="{ visited : nowPage == '/works' }">Works</a>
            </li>
            <li class="navbar-items" style="margin-left:5rem;">
                <a
                  class="navbar-link"
                  href="#/contact"
                  :class="{ visited : nowPage == '/contact/' }">Contact</a>
            </li>
        </ul>
      </nav>
    </header>
    <router-view ref="container"/>
    <!-- Footer
    ================================================== -->
    <footer
     class="footer-area row">
      <div class="section__inner row">
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
      headerHeight: 0,
      containerOffset: 0,
      scrolled: false,
    };
  },
  computed: {
    nowPage() {
      return this.$route.path;
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0 && window.scrollY > this.headerHeight) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.headerHeight = this.$refs.header.clientHeight;
  },
};
</script>

<style>
:root {
  --font-color: #2c3e50;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  width: 100%;
  min-height: 100vh;
}
.row {
  display: flex;
  display: -webkit-flex;
  flex-flow: row;
  -webkit-flex-direction: row;
}
.column {
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  -webkit-flex-direction: column;
}
.width_100 {
  width: 100%;
}
.section__inner {
  padding: 3rem;
  padding-left: auto;
}

/* navbar */
.navbar-area {
  margin: 0;
  padding: .5rem 3rem;
  padding-right: 6rem;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 2;
}
.navbar-area.scrolled {
  background-color: aliceblue;
  font-weight: 500;
}
.navbar-area .app-logo {
  font-family: 'Sacramento', cursive;
  font-size: 4rem !important;
  padding-top: 1rem;
  margin-right: auto;
  color: var(--font-color);
  text-decoration: none;
}
.app-logo:hover {
  color: #888888;
}
.navbar-area ul,
.navbar-area li {
  display: flex;
}
.navbar-items {
  padding-top: 2rem;
  display: block;
  text-decoration: none;
  font-size: 1rem;
}
.navbar-link {
  text-decoration: none;
  color: var(--font-color);
}

/* footer */
.footer-area {
  height: auto;
}
.footer-area .section__inner {
  margin-left: auto;
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
.work .thumbnail-content .summary a {
  color: var(--font-color);
}
.work a.dribbbleLink {
  color: #e93e93 !important;
}

/*=== animation for navbar-items ===*/
@media only screen and (max-width: 767px) {
  .navbar-items li.active a,
  .navbar-link.visited,
  .navbar-link:active,
  .navbar-link:focus,
  .footer-social li.active a,
  .footer-social a:active,
  .footer-social a:focus {
    font-weight: 900;
    color: rgba(0,0,0,0.7);
  }
}
@media only screen and (min-width: 767px) {
  .navbar-link,
  .footer-social a {
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    padding: 10px;
    position: relative;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  .navbar-link:after,
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
  .navbar-items li.active a,
  .footer-social li.active a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
  .navbar-link:hover:after,
  .navbar-link.visited:after,
  .navbar-items li.active a:after,
  .footer-social a:hover:after,
  .footer-social li.active a:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }
  .navbar-link:active,
  .navbar-link:focus,
  .navbar-link.visited,
  .footer-social a:active,
  .footer-social a:focus {
    outline: none;
    text-decoration: none;
  }
}

/*=== responsive for navbar ===*/
@media screen and (max-width: 768px){
  .navbar-area {
    flex-direction: column;
  }
  .app-logo {
    width: 30rem;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .navbar-area {
    margin: 0 auto;
  }
  .app-logo {
    text-align: center;
  }
}
@media only screen and (max-width: 480px) {
  .app-logo {
    width: 25rem;
  }
  .navbar-area nav {
    margin-left: 2rem;
  }
}
</style>
