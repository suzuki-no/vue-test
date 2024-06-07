let app = new Vue({
    el: '#app',
    data: {
        messageA: `<h3>WingsProject</h3>
        <img src="../lib/food_tokuho.png" alt="log">`,
        name: '匿名',
        color: {
            backgroundColor: 'Aqua',
            color: 'Red',
        },
        size: {
            fontSize: '1.5em',
        },
        url: 'https://wings.msn.to/',
        colord: true,
        isChange: true,
        colorClass: 'color',
        frameClass: 'frame',
        messageB: 'Hello! everyone',
    },
    computed: {
    },
    methods: {
    },
});