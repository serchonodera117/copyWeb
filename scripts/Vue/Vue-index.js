let App = {
   data(){
        return {
            myVar:  "div-page",

        }
   }
};

let buldApp = Vue.createApp(App).mount('#div-page');