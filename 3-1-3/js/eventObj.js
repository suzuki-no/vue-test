let app = new Vue({
    el: '#app',
    data: {
        screenX: 0,
        screenY: 0,
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
    },
    methods: {
        onclickA(e){
            console.log(e);
        },
        onmousemove: function(e){
            let _ = this;
            _.screenX = e.screenX;
            _.screenY = e.screenY;
            _.pageX = e.pageX;
            _.pageY =e.pageY;
            _.clientX = e.clientX;
            _.clientY = e.clientY;
            _.offsetX = e.offsetX;
            _.offsetY =e.offsetY;
        },
        onclickB(val, e){
            console.log(val);
            console.log(e);
        },
    },
});