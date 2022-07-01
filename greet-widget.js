document.addEventListener('alpine:init', () => {

    Alpine.data('greetWigdet', function(){
        return {
                name : '',
                message : '',
                showGreeting : false,
                greetMe() {
            
                    const greetingMessege = greet(this.name);
                    console.log(greetingMessage);
                    this.message = greetingMessage;
                    
                    setTimeout (() => {
                        this.message = '';
                    }, 3000);
                }
            }  
        });
})