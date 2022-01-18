<template>
    <div class="body-center d-flex" :style="{ backgroundColor: backgroundColor }" style="height:100vh">
        <div class="tracking-page-wrap">
          <img src="../../assets/images/abcd.svg" alt="" />
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
              to="/preview/2"
              >Submit</b-button
            >
          </div>
        </div>
      </div> 
</template>

<script>
import Verte from "verte";
import "verte/dist/verte.css";

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
    };
  },
  created() {},
  components: { Verte },
  methods: {
    setupDomain(){
      this.$router.push({ name: 'setup-domain' })
    }
  },
};
</script>
