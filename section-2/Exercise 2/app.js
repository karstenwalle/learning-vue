new Vue({
        el: '#exercise',
        data: {
            two: '',
            three: ''
        },
        methods: {
            alertMe: function(){
                window.alert('!!!')
            },
            keyListenTwo: function(event){
                this.two = event.target.value
                return this.two
            },
            keyListenThree: function(event){
                this.three = event.target.value
                return this.three
            }
        }
    });
