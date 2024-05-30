let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: 'TEST',
        },
    },
    created: function(){
        let that = this;
        /*
        this.timer = setTimeout(function(){
            that.author.company = 'これは描画されないパターン';
            that.author.sex = 'male';
            that.author.age = '18';
        }, 3000);
        */
       /*
        this.timer = setTimeout(function(){
            Vue.set(that.author, 'company', 'これは描画されるパターン');
            Vue.set(that.author, 'sex', 'male');
            Vue.set(that.author, 'age', '18');
        }, 3000);
        */
       /** */
        that.author = Object.assign({}, that.author, 
            {
                company: '配列のパターン',
                sex: 'male',
                age: '18',
            }
        );
        
    },
    beforeDestroy: function(){
        //clearInterval(this.timer);
    },
});