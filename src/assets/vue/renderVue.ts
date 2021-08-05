

export const renderVue = (src: string, root: string): void => {
    document.getElementById('vue-script').innerHTML = `
        /* Vue */
        import App from '${src}';
        //const VueRouter  =  require('vue-router');

        
        
        new Vue({
            render: h => h(App),
         //  router,
        }).$mount('${root}')
    `
}