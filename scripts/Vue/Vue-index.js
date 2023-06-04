let App = {
   data(){
        return {
            isTabLeftMenuVisible: true,
            routes:{
                cards: 'pages/cards.html',
                menu: 'pages/menus.html',
                buttoms: '',
                images: '',
            }
        }
   },
   methods: {
     changeIframe(id){
        let iframe = document.getElementById('iframe-pages');
        switch(id) {
            case 'o1': iframe.src =this.routes.cards; break;
            case 'o2': iframe.src = this.routes.menu; break;
            case 'o3': iframe.src = this.routes.buttoms; break;
            case 'o4': iframe.src = this.routes.images; break;
            default: iframe.src = ''; break;
        }
     }
   }
};

let buldApp = Vue.createApp(App).mount('#div-page');