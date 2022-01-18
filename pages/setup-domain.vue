<template>
  <div>
    <header class="d-flex justify-content-between align-items-center domain-header">
      <div>
        <b-link to="/template"><img src="../assets/images/back-arrow.svg" class="mr-2"/>Back</b-link>
      </div>
      <img src="../assets/images/shipdelight.svg" alt="">
      <div></div>
    </header>
    <div class="domain-center">
      <div class="domain-wrap">
        <h1>Setup your Tracking URL</h1>
        <hr class="my-4">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <div>
            <b-link class="link-box" to="/your-domain">Use your domain</b-link>
            <b-link class="link-box" to="/setup-url">Use our domain</b-link>
          </div>
          <b-link class="link" to="/not-now">Not Now</b-link>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>


export default {
  name: "setup",
  data() {
    return {
    };
  },
  created() {},
  components: {},
  methods: {},
};
</script>
