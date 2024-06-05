let app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                isbn: '1987-6-543-21',
                title: 'test titleA',
                price: 2800,
            },
            {
                isbn: '2987-6-543-21',
                title: 'test titleB',
                price: 2200,
            },
            {
                isbn: '3987-6-543-21',
                title: 'test titleC',
                price: 1800,
            },
            {
                isbn: '4987-6-543-21',
                title: 'test titleD',
                price: 2500,
            },
        ],
        book: {
            isbn: '1987-6-543-21',
            title: 'test titleA',
            price: 2800,
        },
        songs: [
            {
                title: '赤とんぼ',
                lyrics: '夕焼け小焼けの赤とんぼ...',
                composer: '山田耕作',
            },
            {
                title: '荒城の月',
                lyrics: '春高楼の花の宴...',
                composer: '瀧廉太郎',
            },
            {
                title: 'どんぐりころころ',
                lyrics: 'どんぐりころころどんぐりこ...',
                composer: '梁田貞',
            },
            {
                title: '七つの子',
                lyrics: 'カラスなぜなくの...',
                composer: '本居長与',
            },
        ],
        list: ['赤パジャマ','青パジャマ','黄パジャマ'],
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