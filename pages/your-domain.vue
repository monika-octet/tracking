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
        <h1>Verify Domain Ownership</h1>
        <hr class="my-4">
        <p>Enter your Domain and Subdomain:</p>
        <b-input></b-input>
        <ul>
          <li>All URLs across all subdomains (m., www.)</li>
          <li>All URLs across https or http</li>
          <li>Requires DNS verification</li>
        </ul>
        <div class="d-flex align-items-center justify-content-end mt-5">
          <b-button variant="outline-secondary" class="mr-3">Back</b-button>
          <b-button variant="success" to="/verify-domain">Next</b-button>
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
