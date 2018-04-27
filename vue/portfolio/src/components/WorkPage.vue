<template>
  <div class="work row">
    <div class="section__inner width_100">
      <p class="subtitle">Works</p>
      <div class="thumbnail-area section__content width_100 row">
        <div
          class="thumbnail"
          v-for="item in items"
          :key="item.title">
          <figure
            class="thumbnail-img width_100"
            :style="'background: url(' + item.img + ') center center / contain no-repeat;'">
            <figcaption class="width_100"></figcaption>
          </figure>
          <div class="thumbnail-content">
            <div class="thumbnail-content__inner">
        <!--      <p class="date">{{ item.date }}</p>
              <p class="title">{{ item.title }}</p>
              <div
                class="summary"
                v-html="item.explanation"></div>  -->
            </div>
          </div>
        </div>
      </div><!--.section__content-->
    </div><!--//.section__inner-->
  </div><!--//.work-->
</template>

<script>
import works from '@/assets/works.json';

export default {
  name: 'WorkPage',
  data() {
    return {
      items: works,
      containerHeight: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work {
  text-align: center;
  padding-top: 180px;
}
.section__content {
  margin-top: 5rem;
}
.thumbnail-area {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: distribute;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.thumbnail {
  width: 30%;
  flex: 0 1 auto;
  margin-bottom: 1rem;
}
.thumbnail-img {
  height: 15rem;
  overflow: hidden;
  cursor: pointer;
  margin: 0;
}
figcaption {
  z-index: 1;
  height: 15rem;
  background: rgba(0,0,0,0.3);
  -webkit-transition: .3s;
  transition: .3s;
  opacity: 0;
}
figure:hover figcaption {
  opacity: 1;
}
.thumbnail-content__inner {
  text-align: left;
}
.thumbnail-content .date {
  font-size: .8rem;
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .thumbnail-img,
  figcaption {
    height: 10rem;
  }
}
@media screen and (max-width: 768px) {
  .thumbnail {
    width: 100%;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .thumbnail-img,
  figcaption {
    height: 20rem;
  }
}
@media only screen and (max-width: 430px) {
  .section__content {
    margin-top: 3rem;
  }
  .thumbnail-img,
  figcaption {
    height: 15rem;
  }
}
</style>
