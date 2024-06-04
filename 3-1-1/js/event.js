let app = new Vue({
    el: '#app',
    data: {
        message: '',
        onfocusColor: false,
        onchangetext: 'ここに入力',
        onchangeColor: false,
        pathA: '../lib/food_tokuho.png',
        resultA: '',
        resultB: '',
        pathB: '../lib/no_image.jpg',
    },
    methods: {
        onclick: function(){
            this.message = new Date().toLocaleString();
        },
        onfocus: function(){
            this.onfocusColor = true;
        },
        onblur: function(){
            this.onfocusColor = false;
        },
        onchange: function(){
            console.log(this)
            this.onchangeColor = true;
        },
        onmouseenter: function(){
            this.path = '../lib/food_energy_bar.png';
        },
        onmouseleave: function(){
            this.path = '../lib/food_tokuho.png';
        },
        onmuseinA: function(e){
            this.resultA += 'Enter:' + e.target.id + '<br />';
        },
        onmouseoutA: function(e){
            this.resultA += 'Levave:' + e.target.id + '<br />';
        },
        onmuseinB: function(e){
            this.resultB += 'Enter:' + e.target.id + '<br />';
        },
        onmouseoutB: function(e){
            this.resultB += 'Levave:' + e.target.id + '<br />';
        },
        onerror: function(){
            this.pathB = '../lib/no_image_yoko.jpg';
        },
    },
});