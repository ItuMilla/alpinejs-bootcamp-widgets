document.addEventListener('alpine:init', () => {
    Alpine.data('totalbillWidget', function () {
        return {
            itemUsed: '',
             billMessage: '',
             billDue(){
             this.billMessage = totalPhoneBill(this.itemUsed)
             
             setTimeout (() => {
                this.billMessage='';
             }, 3000);
          }
        }
    });  
       
})