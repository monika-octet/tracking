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
          <div class="card">
            <div class="card-title">
              <h3>Tracking Setup</h3>
            </div>
            <b-tabs content-class="p-3" nav-wrapper-class="tab-list">
              <b-tab active>
                <template #title> Tracking Template </template>
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
