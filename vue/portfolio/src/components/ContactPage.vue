<template>
  <div class="contact row">
    <div class="section__inner width_100">
      <p class="subtitle">Contact</p>
      <div class="section__content width_100">
        Feel free to contact me on
        <a
          :href="$store.state.slackUrl"
          target="slack">Slack</a>
        or
        <a
          :href="$store.state.linkedinUrl"
          target="lnikedin">LinkedIn</a>
      </div><!--//.section__content-->
    </div><!--//.section__inner-->
  </div><!--//.contact-->
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  text-align: center;
  flex-grow: 1;
  padding-top: 180px;
}
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
a:hover {
  color: var(--font-color);
}
</style>
