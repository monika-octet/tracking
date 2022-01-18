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
        <h1>Setup URL</h1>
        <hr class="my-4">
        <p>Enter your Domain and Subdomain:</p>
        <b-input-group class="mt-3 select-subdomain">
          <template #append>
            <b-form-select v-model="select" :options="options"></b-form-select>
          </template>
          <b-form-input></b-form-input>
        </b-input-group>
        <p class="mt-3">e.g.  <b>yoururl.YourDomain.com</b></p>
        <p class="mt-4">
          Your URL will be<br>
          <b>Example.YourDomain.com</b>
        </p>
        <div class="d-flex align-items-center justify-content-end mt-5">
          <b-button variant="outline-secondary" class="mr-3">Back</b-button>
          <b-button variant="success" v-b-modal.modal-1>Submit</b-button>
        </div>
      </div>
      
    </div>
    <b-modal id="modal-1" centered size="lg">
      <template #modal-header>
        <div class="text-center w-100 modalHeader">
          <img src="../assets/images/thumb.svg" alt="" class="mb-3">
          <h5>URL Setup Completed Successfully</h5>
        </div>
      </template>
      <p class="text-center mb-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </p>
      <template #modal-footer>
        <hr class="w-100 mb-3"/>
      
        <b-button size="sm" variant="success" @click="finalScreen()"> Next </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>


export default {
  name: "setup",
  data() {
    return {
      select: 1,
        options: [
          { value: 1, text: 'Select Subdomain', disabled: true },
          { value: 2, text: 'Track.link' },
          { value: 3, text: 'Courier.link' }
        ]
    };
  },
  created() {},
  components: {},
  methods: {
    finalScreen(){
      this.$router.push({ name: 'final' })
    }
  },
};
</script>
