document.addEventListener('alpine:init', () => {
    Alpine.data('wordCruchWidget', function () {
        return {
            sentence:'',            
            longWordMessage:'',
            shortWordMessage:'',
            sumMessage:'',
            sumLength:0,
            findLong() {
                this.longWordMessage = longestWord(this.sentence)
            },
            findShort(){
                this.shortWordMessage = shortestWord(this.sentence)
            },
            findSum(){
                this.sumMessage = wordLengths(this.sentence, this.sumLength);
            
           }
        }
    });  
       
})