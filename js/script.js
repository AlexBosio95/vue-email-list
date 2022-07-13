
const app = new Vue ({
    el : '#app',
    data: {
        emailRandome: [],
        isShow: false,
    },

    methods: {
        getRandomeEmail: function(){

            const numberEmail = 9

            this.emailRandome = []

            this.isShow = false
            
        
            for (let i = 0; i <= numberEmail; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const result = response.data.response
                this.emailRandome.push(result)

                if (numberEmail === (this.emailRandome.length + 1)) {
                    this.isShow = true
                }
            });
            }
            
        }
    },



})