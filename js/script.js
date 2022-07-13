
const app = new Vue ({
    el : '#app',
    data: {
        emailRandome: [],
        isShow: false,
        numberMails: 10,
        isValid: true,
    },

    methods: {
        getRandomeEmail: function(){

            this.emailRandome = []
            this.isShow = false
            this.isValid = true

            if (!this.numberMails != Number){

                if (this.numberMails <= 0){
                    this.isValid = false;

                } else {

                    for (let i = 1; i <= this.numberMails; i++) {
                        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                        const result = response.data.response
                        this.emailRandome.push(result)
    
                        if (this.numberMails == this.emailRandome.length) {
                            this.isShow = true
                        }
                    })
    
                    }
                }
            }
            
            
        }
    },



})