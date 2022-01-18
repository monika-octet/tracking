<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-4">
          <img src="../assets/images/shipdelight.svg" alt="" srcset="">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-title">
              <h3>Tracking Setup</h3>
            </div>
            <div class="card-body">
              <h3 class="mt-4">Follow the Steps to Complete The Setup</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
              <h3 class="mt-5">Select the Tracking Page Template</h3>
              
              <b-form-radio-group
                name="template"
                v-model="selected"
                buttons
                class="template-selection"
              >
                <div>
                  <b-form-radio v-model="selected" name="template" value="1">
                    <img src="../assets/images/gt1.svg" alt="">
                  </b-form-radio>
                    <div class="d-flex align-items-start justify-content-between">
                      <p>Template 1<br><span>Active</span></p>
                      <b-link>Preview</b-link>
                    </div>
                </div>
                <div>
                  <b-form-radio v-model="selected" name="template" value="2">
                    <img src="../assets/images/gt2.svg" alt="">
                  </b-form-radio>
                    <div class="d-flex align-items-start justify-content-between">
                      <p>Template 2<br><span>Active</span></p>
                      <b-link>Preview</b-link>
                    </div>
                </div> 
                <div>
                  <b-form-radio v-model="selected" name="template" value="3">
                    <img src="../assets/images/gt2.svg" alt="">
                  </b-form-radio>
                    <div class="d-flex align-items-start justify-content-between">
                      <p>Template 3<br><span>Active</span></p>
                      <b-link>Preview</b-link>
                    </div>
                </div> 
                <div>
                  <b-form-radio v-model="selected" name="template" value="4">
                    <img src="../assets/images/gt2.svg" alt="">
                  </b-form-radio>
                    <div class="d-flex align-items-start justify-content-between">
                      <p>Template 4<br><span>Active</span></p>
                      <b-link>Preview</b-link>
                    </div>
                </div>  
              </b-form-radio-group>
              <div class="text-right mt-3">
                <b-button variant="success" to="/template">Next</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selected: '1',
  
    };
  },
  created() {},
  components: {},
  methods: {},
};
</script>
