let App = {
   data(){
        return {
            isTabLeftMenuVisible: true,
        }
   }
};

let buldApp = Vue.createApp(App).mount('#div-page');