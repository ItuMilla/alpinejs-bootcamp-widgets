document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {
        return {
            airtimeUsage:'',
            availableAmount:0.00,
            airtimeMessage:'',
            calculate() {

                const amount= enoughAirtime(this.airtimeUsage,this.availableAmount);
                this.airtimeMessage=amount;
            }
        }

    });

})
