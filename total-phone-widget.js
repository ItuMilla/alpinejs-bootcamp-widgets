document.addEventListener('alpine:init', () => {
    Alpine.data('totalbillWidget', function () {
        return {
            airtimeUsage: '',
             airtimeMessage: '',
             calculate1(){
             this.airtimeMessage = totalPhoneBill(this.airtimeUsage)
          }
        }
    });  
       
})