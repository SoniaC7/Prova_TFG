import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import VueStar from 'vue-star'

Vue.use(Vuetify,VueStar);

export default new Vuetify({

    theme: {
        themes: {
            light:{
                background: colors.orange
            },
            dark: {
                background: colors.orange
            }
        }
    },
    breakpoint: {
        mobileBreakpoint: 'xs' // This is equivalent to a value of 960
    }
});
