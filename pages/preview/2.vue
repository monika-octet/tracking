<template>
    <div>
        <header class="d-flex justify-content-between align-items-center domain-header">
            <img src="../../assets/images/abcd.svg" alt="" />
            <b-link to="/preview/1">Track Order</b-link>
        </header>
        <div class="body-center" :style="{ backgroundColor: backgroundColor }">
        <div class="wrap-center">  
            <div class="left-part">
                <img
                src="../../assets/images/logo.png"
                class="img-fluid logo"
                v-if="logoButton"
                />
                <hr v-if="logoButton" />
                <div>
                <h5>Customer Name</h5>
                <p>Prashant Patil</p>
                <h5>Customer Contact</h5>
                <p>+91 99987-87122</p>
                <h5>Delivery Address</h5>
                <p>
                    915 North Plaza, South Motera, Nr 4D Square, Sabarmati, Ahmedabad -
                    380005
                </p>
                </div>
                <hr />
                <h5>Seller Name</h5>
                <p>Bewakoof India Brands Private Limited</p>
                <h5>Seller Support</h5>
                <p>+91 99******12 (See Number)</p>
                <p>support@bewakoof.com</p>
            </div>
            <div class="right-part">
                <div class="accordion c-accordion" role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                    <div v-b-toggle.accordion-main>
                        <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0">Tracking No.</p>
                            <h2 class="font-weight-bold mb-0">
                            <span>#341918713810</span>
                            </h2>
                        </div>

                        <div>
                            <img
                            src="../../assets/images/bluedart.svg"
                            class="img-fluid logo"
                            />
                        </div>
                        </div>
                    </div>
                    </b-card-header>

                    <b-card-body>
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="font-weight-medium mb-3" v-html="content"></h3>
                        <h1 class="font-weight-medium text-capitalize mb-1">
                            Delivered
                        </h1>
                        <h5 class="mb-3 font-weight-sb">as on 27 Aug 2021, Friday</h5>
                        <p>as on 29 Aug 2021, Friday</p>
                        </div>
                        <div class="order-link-wrap">
                        <div>
                            <div>
                            <b-link class="d-block mb-2" v-if="returnButton"
                                ><img src="../../assets/images/return-order.svg" />
                                <u class="link-black">Return Order</u></b-link
                            >

                            <b-link class="d-block" v-if="exchangeButton"
                                ><img src="../../assets/images/exchange-item.svg" />
                                <u class="link-black">Exchange Item</u></b-link
                            >

                            <hr v-if="exchangeButton || returnButton" />
                            </div>
                            <div>
                            <p class="mb-0">For Delivery Queries</p>
                            <b-link :style="{ color: buttonColor }"
                                >Contact Us</b-link
                            >
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <span>
                        <div class="my-3">
                        <p class="font-weight-medium mb-3" v-if="!selected">
                            How was your Delivery Experience?
                        </p>
                        <p class="font-weight-medium mb-3" v-if="selected">
                            Delivery Experience Submitted!
                        </p>
                        <b-form-group class="m-0 rating-wrap">
                            <b-form-radio-group
                            v-model="selected"
                            buttons
                            @change="sendFeedback"
                            :disabled="sendingFeedback || feedbackSent"
                            >
                            <template v-for="option in options">
                                <b-form-radio
                                :value="option.value"
                                :key="option.text"
                                class="rating"
                                >
                                <div :class="option.src" class="emoji"></div>
                                <p>{{ option.text }}</p>
                                </b-form-radio>
                            </template>
                            </b-form-radio-group>
                        </b-form-group>
                        </div>
                        <hr />
                    </span>
                    <p class="mt-3">Tracking History</p>
                    <div class="time-line">
                        <vue-scroll>
                        <div
                            class="d-flex align-items-center"
                            v-for="(tracking, index) in trackingDetails"
                            :key="index"
                        >
                            <div class="w-100px">
                            <h3>
                                <span v-if="tracking.updated_date">{{
                                tracking.updated_date
                                }}</span>
                                <span v-else>NA</span>
                            </h3>
                            <p class="text-11">
                                <span v-if="tracking.time">At {{
                                tracking.time
                                }}</span>
                                <span v-else>NA</span>
                            </p>
                            </div>
                            <p class="circle"></p>
                            <div>
                            <h3>
                                <span v-if="tracking.status">{{
                                tracking.status
                                }}</span>
                                <span v-else>NA</span>
                            </h3>
                            <p>
                                <span v-if="tracking.location">{{
                                tracking.location
                                }}</span>
                                <span v-else>NA</span>
                            </p>
                            </div>
                        </div>
                        </vue-scroll>
                    </div>
                    </b-card-body>
                </b-card>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import trackingDetails from "../../static/tracking.json";
import Verte from "verte";
import "verte/dist/verte.css";

export default {
  name: "home",
  data() {
    return {
      trackingDetails,
      selected: "",
      sendingFeedback: false,
      feedbackSent: false,
      options: [
        { text: "Bad", value: "1", src: "bad" },
        { text: "Ok", value: "2", src: "ok" },
        { text: "Average", value: "3", src: "avg" },
        { text: "Good", value: "4", src: "good" },
        { text: "Best", value: "5", src: "best" },
      ],
      logoButton: true,
      returnButton: true,
      exchangeButton: true,
      buttonColor: "#1A5EA2",
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
