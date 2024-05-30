let app = new Vue({
    el: '#app',
    data: {
        name: '',
        upperName: '',
        author: {
            toName: '',
            toUpperName: '',
        },
        beName: '',
        beUpperName: '',
        number: {
            num1: 0,
            num2: 0,
            sum: 0,
        },
    },
    created: function(){
        let that = this;
        //lodashメソッドを利用して遅延処理
        this.delayFunc = _.debounce(this.getUpper, 2000);
        this.toDelayFunc = _.debounce(this.getToUpper, 2000);
        
        this.beDelayFunc = _.debounce(this.getBeUpper, 2000);
        let beUnwatch = this.$watch('beName', function(newValue, oldValue){
            that.beDelayFunc();
        });

        this.numDelayFunc = _.debounce(this.getNumUpper, 2000);
        let numUnwatch = this.$watch(function(){
            return this.numFunc(this.number.num1) + this.numFunc(this.number.num2);
        }, function(newValue, oldValue){
            that.numDelayFunc();
        });
        
    },
    watch: {
        name: function(newValue, oldValue){
            this.delayFunc();
        },
        //入れ子のやり方
        'author.toName': function(newValue, oldValue){
            this.toDelayFunc();
        },
    },
    methods: {
        getUpper: function(){
            //実体の処理をする。
            this.upperName = this.name.toUpperCase();
        },
        getToUpper: function(){
            this.author.toUpperName = this.author.toName.toUpperCase();
        },
        getBeUpper: function(){
            this.beUpperName = this.beName.toUpperCase();
        },
        getNumUpper: function(){
            let n = this.number;
            this.number.sum = this.numFunc(n.num1) + this.numFunc(n.num2);
        },
        numFunc: function(val){
            return parseInt(val, 10);
        },
    },
});