let app = new Vue({
    el: '#app',
    data: {
        attrs: {
            size: 20,
            maxlength: 14,
            required: true,
        },
        text: 'Hello! everyone',
        attr: 'width',
        size: 100,
    },
    computed: {
        expensiveBooks: function(){
            return this.books.filter(function(b){
                return b.price >= 2500;
            })
        }
    },
    methods: {
        onclick: function(){
            Vue.set(this.list, 1, '茶パジャマ');
        },
    },
});