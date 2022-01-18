import vuescroll from "vuescroll";
import Vue from 'vue';

Vue.use(vuescroll, {
    ops: {
        vuescroll: {
            mode: "native",
            sizeStrategy: "percent",
            detectResize: true
        },
        scrollPanel: {
            initialScrollY: false,
            initialScrollX: false,
            scrollingX: true,
            scrollingY: true,
            speed: 300,
            easing: undefined,
            verticalNativeBarPos: "right"
        },
        rail: {
            background: "#fff",
            opacity: 0,
            size: "4px",
            specifyBorderRadius: false,
            gutterOfEnds: null,
            gutterOfSide: "2px",
            keepShow: true
        },
        bar: {
            showDelay: 500,
            onlyShowBarOnScroll: true,
            keepShow: true,
            background: "#c1c1c1",
            opacity: 1,
            hoverStyle: false,
            specifyBorderRadius: false,
            minSize: 0,
            size: "3px",
            disable: false
        }
    }
});