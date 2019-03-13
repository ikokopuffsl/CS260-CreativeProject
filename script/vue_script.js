var app = new Vue({
    el: '#pricing-app',
    data: {
      cart: [],
      option1Status: false,
      option2Status: false,  
      option3Status: false,
      option1Text: "Family Session",
      option1Price: 1000,
      option2Text: "Full Wedding Session",
      option2Price: 10000,
      option3Text: "Single Portrait Session",
      option3Price: 500,
      totalCost: 0,
    },
    computed: {

    },
    watch: {
        option1Status(value, oldvalue) {
            if (value == true) {
                console.log("1 - true");
                this.addToCart({status: true, text: this.option1Text, price: this.option1Price});
            }
            else {
                console.log("1 - false");
                this.removeFromCart(this.option1Text);
            }
        },
        option2Status(value, oldvalue) {
            if (value == true) {
                console.log("2 - true");
                this.addToCart({status: true, text: this.option2Text, price: this.option2Price});
            }
            else {
                console.log("2 - false");
                this.removeFromCart(this.option2Text);
            }
        },
        option3Status(value, oldvalue) {
            if (value == true) {
                console.log("3 - true");
                this.addToCart({status: true, text: this.option3Text, price: this.option3Price});
            }
            else {
                console.log("3 - false");
                this.removeFromCart(this.option3Text);
            }
        },



    },
    methods: {
        addToCart(option) {
            this.cart.push(option)
            this.computeCost();
        },
        removeFromCart(option) {
            console.log("remove");
            console.log(this.cart);
            this.cart = this.cart.filter(item => item.text != option);
            this.computeCost();
        },
        computeCost() {
            this.totalCost = 0;
            let i = 0;
            for (i = 0; i < this.cart.length; i++) {
                this.totalCost += this.cart[i].price;
            }
        },
        submission() {
            alert("Thank you for your purchase!");
        }
    }
});