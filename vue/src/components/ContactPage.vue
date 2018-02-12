<template>
  <div class="contact">
    <b-row>
      <b-container>
        <div class="section__inner">
          <p class="subtitle">Contact</p>
          <div class="section__content">
            Find me on
            <a
              :href="$store.state.facebookUrl"
              target="_blank">Facebook</a>
            or
            <a
              :href="$store.state.linkedinUrl"
              target="_blank">LinkedIn</a>
          </div><!--//.section__content-->
        </div><!--//.section__inner-->
      </b-container>
    </b-row>
  </div><!--//.contact-->
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact .section__content {
  padding: 2rem;
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 3rem;
}
.form-group {
  margin-bottom: 2rem;
}
a {
  color: rgba(0,0,0,0.4);
  text-decoration: underline;
}
</style>
