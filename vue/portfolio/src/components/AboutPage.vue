<template>
  <div class="about row">
    <div class="section__inner width_100">
      <p class="subtitle">About</p>
      <div class="section__content width_100">
        <div class="sentences" v-html="msg">
        </div><!--//.sentences-->
        <div class="skills-area">
          <p class="minititle">How Can I Help</p>
          <div class="thumbnail-area row">
            <div class="thumbnail">
              <div class="thumbnail-circle">
                <i class="fas fa-code"></i>
                <p class="thumbnail-title">Development</p>
              </div>
              <div>
                <ul class="thumbnail-content">
                  <li>HTML/CSS/Javascript</li>
                  <li>Javascript Framework <br> (jQuery, Angular, Vue.js)</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div><!--//.thumbnail-->

            <div class="thumbnail">
              <div class="thumbnail-circle">
                <i class="fas fa-paint-brush"></i>
                <p class="thumbnail-title">Design</p>
              </div>
              <div>
                <ul class="thumbnail-content">
                  <li>UI Design with considering usability</li>
                </ul>
              </div>
            </div><!--//.thumbnail-->
          </div><!--//.thumbnail-area-->
        </div>
      </div><!--//.section__content-->
    </div><!--//.section__inner-->
  </div><!--//.about-->
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      msg: 'I\'m a front-end developer, based in Japan. <br>Currently working as a front-end developer at IBM Japan Systems Engineering Co.,Ltd. <br>My Works in this site are what I designed or developed on my own, not used in any projects.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  text-align: center;
  padding-top: 180px;
}
.section__content {
  margin-top: 3rem;
}
.sentences {
  margin-bottom: 8rem;
}
.minititle {
  color: rgb(21, 170, 191);
  font-size: 1.5rem;
}
.thumbnail-area {
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.thumbnail {
  width: 15rem;
  height: 20rem;
  flex: 0 1 auto;
  margin: 0 auto;
  padding: 2rem;
  border: .5px solid rgb(21, 170, 191);
  margin-bottom: 1rem;
}
.thumbnail-circle {
  margin: 0 auto;
}
.thumbnail-circle svg {
  color: #15aabf;
  padding: 30px;
  border-radius: 50%;
  border: 1px solid;
  height: 5rem;
  width: 5rem;
}
.thumbnail-title {
  text-align: center;
  color: #15aabf;
  margin-top: 1rem;
}
.thumbnail-content {
  width: 20rem;
  text-align: left;
}

.thumbnail-content li {
  width: 12rem;
}
@media only screen and (max-width: 430px) {
  .thumbnail {
    width: 15rem;
  }
  .thumbnail-content {
    margin-left: -2.5rem;
  }
}
</style>
