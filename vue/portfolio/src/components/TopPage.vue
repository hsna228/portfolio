<template>
  <div class="top container">
    <div class="welcome-board">
      <div
        class="section__inner"
        v-html="msg"></div>
      <div class="circle loader"><span></span></div>
    </div>
  </div><!--//.top-->
</template>

<script>
export default {
  name: 'TopPage',
  data() {
    return {
      msg: "Hi, I'm Aya, <br> a Front-end Developer",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  text-align: left;
  flex-grow: 1;
  padding-left: 3rem;
  padding-top: 180px;
}
.welcome-borad {
  font-size: 2rem;
  background-image: url(/static/img/bgImg.png);
}
.fa-code {
  color: #15aabf;
}

/*=== animation ===*/
div.circle {
    position: fixed;
    z-index: -10;
    width: 100%;
    height: 100%;
    overflow: visible;
    background-color: #f7f7f7;
}
@-webkit-keyframes loader {
   0%,100% {
        width: 150px;
        height: 150px;
    }
    50% {
      width: 300px;
      height: 300px;
    }
}
@keyframes loader {
    0%,100% {
        width: 150px;
        height: 150px;
    }
    50% {
      width: 300px;
      height: 300px;
    }
}
@-webkit-keyframes loaderInverse {
   0%,100% {
        width: 300px;
        height: 300px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
}
@keyframes loaderInverse {
    0%,100% {
        width: 300px;
        height: 300px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
}
.loader {
    position: absolute;
    top: 50%;
    right: 0;
    width: 80px;
    height: 80px;
    -webkit-transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
    transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
    -webkit-animation: loader 10s infinite ease-in-out;
    animation: loader 10s infinite ease-in-out;
    border-radius:50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    background-color: rgba(0,0,0,0.2);
}
.loader span {
    position: fixed;
    display: block;
    width: 40px;
    height: 40px;
    left: 50%;
    margin-left:-20px;
    bottom: 10%;
    margin-top:20px;
    border-radius:50%;
    -webkit-animation: loaderInverse 10s infinite ease-in-out both;
    animation: loaderInverse 10s infinite ease-in-out both;
    background: rgba(0,0,0,0.3);
}
.loader span:nth-child(1) {
    top: 0;
    left: 0;
}
</style>
