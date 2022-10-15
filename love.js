function percent(){
    var name = document.getElementById("name").value;
    var name1 = document.getElementById("lovename").value;
    if(name == ""){
        alert("Enter your name");
    }
    else if(name.length<=5){
        alert("Minimun length is 5");
    }
    else if(!isNaN(name)){
        alert("No. are not allowed");
    }
    else if(name1 == ""){
        alert("Enter your name");
    }
    else if(name1.length<=5){
        alert("Minimun length is 5");
    }
    else if(!isNaN(name1)){
        alert("No. are not allowed");
    }
    else{
         var lovedata = Math.random()*100;
        var Lovefloor= Math.floor(lovedata);
        document.getElementById("percentdata").value=Lovefloor + "%";
    }
}