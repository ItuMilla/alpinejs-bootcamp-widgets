document.addEventListener('alpine:init', () => {

    Alpine.data('greetWidget', function(){
        return {
                name : '',
                message : '',
                showGreeting : false,
                greetMe() {
            
                this.message = greet(this.name);
                    //console.log(greetingMessage);
                    //this.message = greetingMessage;
                    
                    setTimeout (() => {
                        this.message = '';
                    }, 3000);
                }
            }  
        });
})