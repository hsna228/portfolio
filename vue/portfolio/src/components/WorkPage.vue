<template>
  <div class="work">
    <b-row>
      <b-container>
        <div class="section__inner">
          <p class="subtitle">Works</p>
          <div class="section__content">
            <div
             v-for="item in items"
             :key="item.title">
              <figure
               class="thumbnail"
               :style="'background: url(' + item.img + ') center center / contain no-repeat;'">
                <figcaption>
                  <div class="figcaption__content">
                    <div class="figcaption__inner">
                      <p class="date">{{ item.date }}</p>
                      <p class="minititle">{{ item.title }}</p>
                      <div v-html="item.explanation"></div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div><!--.section__content-->
        </div><!--//.section__inner-->
      </b-container>
    </b-row>
  </div><!--//.work-->
</template>

<script>
import works from '@/assets/works.json';

export default {
  name: 'WorkPage',
  data() {
    return {
      items: works,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section__content {
  margin-top: 5rem;
}
.date {
  text-align: left;
}
.minititle {
  font-size: 2rem;
}
.thumbnail {
  height: 30rem;
  width: 50rem;
  margin: 0 auto;
}
figure {
  position: relative;
  overflow: hidden;
  width: 300px;
}
figcaption {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  -webkit-transition: .3s;
  transition: .3s;
  opacity: 0;
  color: rgba(255,255,255,0.5);
}
figure:hover figcaption {
  opacity: 1;
}
.figcaption__content {
  padding: 5rem;
  height: 100%;
  width: 100%;
}
.figcaption__inner {
  height: 100%;
  width: 100%;
  padding: 5rem 5rem;
}
@media screen and (min-width: 770px) and (max-width: 992px) {
  .thumbnail {
    width: 40rem;
    height: 25rem;
  }
  .figcaption__content {
    padding: 3rem;
  }
  .figcaption__inner {
    padding: 2rem;
  }
}
@media screen and (max-width: 770px) {
  .thumbnail {
    width: 25rem;
    height: 15rem;
  }
  .figcaption__content {
    padding: 1.5rem;
  }
  .figcaption__inner {
    padding: 1rem;
  }
}
@media only screen and (max-width: 430px) {
  .thumbnail {
    width: 15rem;
    height: 10rem;
  }
  .minititle {
    font-size: 1rem;
  }
  .date {
    font-size: .5rem;
  }
  .figcaption__inner {
    font-size: .5rem;
  }
  .section__content {
    margin-top: 3rem;
  }
}
</style>
