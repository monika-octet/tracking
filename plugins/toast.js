import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Vue from 'vue';

const options = {
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    icon: true,
    rtl: false,
    hideProgressBar: true
};

Vue.use(Toast, options);