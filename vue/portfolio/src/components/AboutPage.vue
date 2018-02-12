<template>
  <div class="about">
    <b-row>
      <b-container>
        <div class="section__inner">
          <p class="subtitle">About</p>
          <div class="section__content">
            <div class="sentences" v-html="msg">
            </div><!--//.sentences-->
            <div>
              <p class="minititle">How Can I Help</p>
              <div class="thumbnail">
                <div class="circle-thumbnail">
                  <i class="fas fa-code"></i>
                </div>
                <div>
                  <p class="thumbnail-title">Development</p>
                  <ul class="thumbnail-content">
                    <li>HTML/CSS/Javascript</li>
                    <li>Javascript Framework <br> (jQuery, Angular, Vue.js)</li>
                    <li>Node.js</li>
                  </ul>
                </div>
              </div><!--//.thumbnail-->
            </div>
          </div><!--//.section__content-->
        </div><!--//.section__inner-->
      </b-container>
    </b-row>
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
.thumbnail {
  width: 20rem;
  margin: 0 auto;
  padding: 3rem;
  border: .5px solid rgb(21, 170, 191);
}
.circle-thumbnail {
  height: 10rem;
  width: 10rem;
  margin: 0 auto;
  border: 1px solid rgb(21, 170, 191);
  border-radius: 50%;
}
.fa-code {
  color: #15aabf;
  height: 100%;
  width: 100%;
  padding: 30px;
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
@media only screen and (max-width: 430px) {
  .thumbnail {
    width: 15rem;
  }
  .thumbnail-content {
    margin-left: -2.5rem;
  }
}
</style>
