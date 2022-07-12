var salesApp = new Vue({
    el: "#sales",
    data: {
        rates: {},
        years: [],
    },
    methods:{
        generaranios: function(){
            var anioActual=new Date().getFullYear();
            for (var index = anioActual; index <= anioActual; index--){
                this.years.push(index);
            }
            console.log(this.years);
        }
    },
    mounted:function() {
        this.generaranios()
    },
});


$.ajax({
    url: "https://ha.edu.uy/api/rates",
    success: function (ratesFromAPI) {
        console.log(ratesFromAPI);
        salesApp.rates = ratesFromAPI;
    }
});
