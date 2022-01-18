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
        <p>Instructions for: <b>Any DNS Provider</b></p>
        <ol>
          <li>Sign in to your domain name provider (e.g. godaddy.com)</li>
          <li>Copy the TXT record below into the DNS configuration for website.com<br>
              <b-input-group class="mt-3 site-key">
                <template #append>
                  <b-button>Copy</b-button>
                </template>
                <b-form-input placeholder="site-verification=PsZA0tyl99n1K06eSenJ3EsOpv1zTG"></b-form-input>
              </b-input-group>
            </li>
          <li>Press <b>verify</b> below</li>
        </ol>
        <p class="mt-5">Note: DNS changes may take some time to apply. If Search Console doesn’t find the record immediately, wait a day and then try to verify again</p>
        <div class="d-flex align-items-center justify-content-end mt-5">
          <b-button variant="outline-secondary" class="mr-3">Back</b-button>
          <b-button variant="success" v-b-modal.modal-1>Verify</b-button>
        </div>
      </div>
      
    </div>
    <b-modal id="modal-1" centered size="lg">
      <template #modal-header>
        <div class="text-center w-100 modalHeader">
          <img src="../assets/images/thumb.svg" alt="" class="mb-3">
          <h5>Your Domain is Successfully Verified</h5>
        </div>
      </template>
      <p class="text-center mb-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </p>
      <template #modal-footer>
        <hr class="w-100 mb-3"/>
      
        <b-button size="sm" variant="success" @click="setupLink()"> Next </b-button>
      </template>
    </b-modal>
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
  methods: {
    setupLink(){
      this.$router.push({ name: 'setup-url' })
    }
  },
};
</script>
