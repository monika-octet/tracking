<template>
  <div class="wrapper">
    <div class="container">
      
      <div class="row">
        <div class="col-md-12 text-center mb-4">
          <img src="../assets/images/shipdelight.svg" alt="" srcset="" />
        </div>
      </div>
     
      <div class="row">
        <div class="col-md-12">
          <div class="card final">
            <div class="card-title">
              <h3>Tracking Setup</h3>
            </div>
             <div class="row setup-url">
               <div class="col-md-12 text-center d-flex align-items-center px-5">
                 <p class="mb-0 text-14">Tracking Page URL:</p>
                 <b-input placeholder="https://yourdomain.subdomain.com/" class="mb-0 ml-3" style="width:66%"></b-input>
                 <b-button variant="light" class="ml-3" to="/setup-domain">Change</b-button>
                 <b-button variant="light" class="ml-3" to="/preview/1" target="_blank">Preview</b-button>
               </div>
            </div>
            <b-tabs content-class="p-3" nav-wrapper-class="tab-list">
              <b-tab active>
                <template #title> Tracking Template </template>
                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret class="edit">
                  <template #button-content>
                    Edit <img src="../assets/images/down-arrow.svg" />
                  </template>
                  <b-dropdown-item href="/change-template">Change Template</b-dropdown-item>
                  <b-dropdown-item to="/template">Customize Template</b-dropdown-item>
                </b-dropdown>
                <TrackingTemplate></TrackingTemplate>
              </b-tab>

              <b-tab>
                <template #title> Tracking Page </template>
                <TrackingPage></TrackingPage>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackingTemplate from "../components/TrackingTemplate.vue";
import TrackingPage from "../components/TrackingPage.vue";


export default {
  name: "template",
  data() {
    return {
    };
  },
  created() {},
  components: {TrackingTemplate, TrackingPage},
  methods: {},
};
</script>
