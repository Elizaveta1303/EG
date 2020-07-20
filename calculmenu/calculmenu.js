var wok ={
    prise:0,
    calories:0, 
    small:  {
        prise:150,
        calories:0,     
    },
    large: {
        prise:200,
        calories:0,
        proteins:0,
        fats:0,
        carbohydrates:0
       
    },
    noodles: {
        prise:0,
        calories:207,
        proteins:7,
        fats:3,
        carbohydrates:38
       
     },
     rice: {
        prise:0,
        calories:174,
        proteins:4,
        fats:1,
        carbohydrates:38
     },
     pork : {
        prise:60,
        calories: 135,
        proteins:8,
        fats:10,
        carbohydrates:19 
    },

    beef : {
        prise:80,
        calories:115,
        proteins:7,
        fats:9,
        carbohydrates:1 
    },
    chicken: {
        prise:40,
        calories:80,
        proteins:15,
        fats:4,
        carbohydrates:0 
    },
    vegetables :{
        prise:30,
        calories:35,
        proteins:1,
        fats:2,
        carbohydrates:4 
    },
    shrimp :{
        prise:80,
        calories:70,
        proteins:27,
        fats:1,
        carbohydrates:1 
    },    
    spicy_sauce: {
        prise:20,
        calories:5,
        proteins:1,
        fats:10,
        carbohydrates:5
    },
    sesame: {
        prise:10,
        calories:2,
        proteins:1,
        fats:3,
        carbohydrates:4 
    },

    calculate :function(size, base){
        this.prise=wok[size].prise;
        this.calories=wok[base].calories;
        this.proteins=wok[base].proteins;
        this.fats=wok[base].fats;
        this.carbohydrates=wok[base].carbohydrates;
        if (wok[size]=="small") {
            this.calories =this.calories *1;
            this.proteins=this.proteins *1;
            this.fats=this.fats *1;
            this.carbohydrates=this.carbohydrates *1;
        } else {
            this.calories=this.calories *2;
            this.proteins=this.proteins *2;
            this.fats=this.fats *2;
            this.carbohydrates=this.carbohydrates *2;
        }
       
        var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
        for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].id;
            this.prise+= wok[type].prise;
            this.calories+= wok[type].calories;
            this.proteins=wok[type].proteins;
            this.fats=wok[type].fats;
            this.carbohydrates=wok[type].carbohydrates;
            
        }
        console.log(this.prise);
        wok.result(this.prise,this.calories,this.proteins,this.fats,this.carbohydrates);
        
    },
    result: function(prise,calories, proteins, fats, carbohydrates){
        document.getElementById("prise").innerHTML = prise;
        document.getElementById("calories").innerHTML = calories;
        document.getElementById("proteins").innerHTML = proteins;
        document.getElementById("fats").innerHTML = fats;
        document.getElementById("carbohydrates").innerHTML = carbohydrates;
    },
    reset_all: function(){
        this.price=0;
        this.calories=0;
        this.proteins=0;
        this.fats=0;
        this.carbohydrates=0;
    }
}

    document.getElementById("form").addEventListener('submit', (e)=>{
        e.preventDefault();
        var size_=document.querySelector('input[name="size"]:checked').value;
        var base_=document.querySelector('input[name="base"]:checked').value;
        wok.calculate(size_, base_);
    })