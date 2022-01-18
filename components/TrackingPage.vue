<template>
  <div class="content-wrap">
    <div>
      <div class="d-flex justify-content-between tracking-page-header">
        <p>Tracking Page Template</p>
        <b-link to="/preview/1" target="_blank">See Full Preview</b-link>
      </div>
      <div class="body-center" :style="{ backgroundColor: backgroundColor }">
        <div class="tracking-page-wrap">
          <img src="../assets/images/logo-page.png" alt="" />
          <div class="text-gap">
            <h1>Track Your Orders Easily</h1>
            <p>
              Enter your AWB tracking number or Order ID or Mobile Number to
              track your order
            </p>
          </div>
          <hr />
          <div class="mt-4">
            <b-form-group>
              <b-form-radio-group v-model="selected">
                <b-form-radio value="1" v-if="orderNumber"
                  >Order ID</b-form-radio
                >
                <b-form-radio value="2" v-if="awbNumber"
                  >AWB Number</b-form-radio
                >
                <b-form-radio value="3" v-if="mobileNumber"
                  >Mobile Number</b-form-radio
                >
              </b-form-radio-group>
            </b-form-group>
            <b-form-input
              v-model="text"
              class="my-4"
              placeholder="Enter Order ID/ AWB number/ Mobile Number to Search"
            ></b-form-input>
            <b-button
              variant="primary"
              :style="{ backgroundColor: buttonColor }"
              >Submit</b-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="right-content">
      <h3>Upload Logo</h3>
      <vue-dropzone class="mt-2" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot="true">
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">
              Choose file
            </h3>
          </div>
      </vue-dropzone>
      <hr />
      <h3>Track Order By</h3>
      <b-form-checkbox v-model="awbNumber" name="check-button" switch>
        AWB Number
      </b-form-checkbox>
      <hr />
      <b-form-checkbox v-model="orderNumber" name="check-button" switch>
        Order Number
      </b-form-checkbox>
      <hr />
      <b-form-checkbox v-model="mobileNumber" name="check-button" switch>
        Mobile Number
      </b-form-checkbox>
      <hr />
      <h3>Color</h3>

      <div class="d-flex align-items-center mt-3">
        <verte
          v-model="buttonColor"
          picker="square"
          model="hex"
          :showHistory="false"
        ></verte>
        <p class="mb-0 ml-2">Button Color</p>
      </div>
      <div class="d-flex align-items-center mt-2">
        <verte
          v-model="backgroundColor"
          picker="square"
          model="hex"
          :showHistory="false"
        ></verte>
        <p class="mb-0 ml-2">Background Color</p>
      </div>
      <hr />
      <h3>Text</h3>
      <vue-editor v-model="content" :editor-toolbar="customToolbar" />

      <div class="d-flex align-items-center justify-content-end mt-3">
        <b-button variant="light" class="ml-3">Back</b-button>
        <b-button variant="success" class="ml-3" v-b-modal.modal-1
          >Next</b-button
        >
      </div>
    </div>
    <b-modal id="modal-1" centered size="lg">
      <template #modal-header>
        <div class="text-center w-100 modalHeader">
          <h5>Are You Sure You Want to Update Changes?</h5>
        </div>
      </template>
      <p class="text-center mb-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      </p>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="outline-secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="success" @click="setupDomain()"> Yes </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Verte from "verte";
import "verte/dist/verte.css";
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "home",
  data() {
    return {
      selected: "1",
      sendingFeedback: false,
      feedbackSent: false,

      awbNumber: true,
      orderNumber: true,
      mobileNumber: true,

      buttonColor: "#E94646",
      backgroundColor: "#EDEDED",
      content: "Your Order Is",
      customToolbar: [
        [
          "bold",
          "italic",
          "underline",
          "link",
          { list: "bullet" },
          { align: "" },
          { align: "center" },
          { align: "right" },
          "image",
        ],
        [{ header: [] }, { color: [] }],
      ],
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" },
          addRemoveLinks: false,
      }
    };
  },
  created() {},
  components: { Verte, vueDropzone: vue2Dropzone },
  methods: {
    setupDomain(){
      this.$router.push({ name: 'setup-domain' })
    }
  },
};
</script>
