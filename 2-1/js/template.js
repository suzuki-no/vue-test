let app = new Vue({
    el: '#app',
    data: {
        current: new Date(),
    },
    beforeCreate: function(){
        console.log('beforeCreate...');
    },
    created: function(){
        let that = this;
        this.timer = setInterval(function(){
            that.current = new Date();
        }, 1000);
    },
    beforeMount: function(){
        console.log('beforeMount...');
    },
    mounted: function(){
        console.log('mounted...');
    },
    beforeUpdate: function(){
        console.log('beforeUpdate...');
    },
    updated: function(){
        console.log('updated...');
    },
    beforeDestroy: function(){
        clearInterval(this.timer);
    },
    destroyed: function(){
        console.log('destroyed...');
    },
});