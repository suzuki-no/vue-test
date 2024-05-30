let app = new Vue({
    el: '#app',
    data: {
        email: 'Y-Suzuki@exapmple.com',
        current: new Date().toLocaleString(),
    },
    /*
    ** 算出プロパティは
    ** 1.引数NG
    ** 2.取得したデータの加工のみ
    ** 3.値はキャッシュされる
    */
    computed: {
        localEmail: function(){
            return this.email.split('@')[0].toLowerCase();
        },
        randomc: function(){
            return Math.random();
            //return this.current;
        },
    },
    /*
    ** メソッドはボタンクリックなどで常に評価する
    */
    methods: {
        localEmailMethod: function(){
            return this.email.split('@')[0].toLowerCase();
        },
        onclick: function(){
            this.current = new Date().toLocaleString();
        },
        randomm: function(){
            return Math.random();
        },
    },
});
