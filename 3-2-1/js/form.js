let app = new Vue({
    el: '#app',
    data: {
        myNameA: '匿名',
        osA: ['Windows','macOS'],
        osB: '',
        unit: '',
        message: '',
        temperature: 0,
        memo: '',
        myNameB: '匿名',
        mails: [],
    },
    methods: {
        onchange: function(){
            let _ = this.unit;
            console.log(_.name + ':'+ _.size);
        },
        onchangeFile: function(){
            let that = this,
                fl = this.$refs.upfile.files[0],
                data = new FormData();
            data.append('upfile', fl, fl.name);

            fetch('upload.php', {
                method: 'POST',
                body: data,
            }).then(function(response){
                return response.text();
            }).then(function(text){
                that.message = text;
            }).catch(function(error){
                window.alert('Error:' + error.message);
            })
        },
        onchangeNum: function(){
            console.log(this.temperature.toFixed(1));
        },
        onchangeTrim: function(){
            console.log('入力値->「'+ this.memo +'」');
        },
    },
});