window.onload = init;//init is the function name which will load when the window is successfully loaded
//var div = document.getElementById("pets");

function init(){
    getPetData();//getPetData is another function
}

function getPetData(){
    var req = new XMLHttpRequest();//req is the XMLHttpRequest object, webbrowser has builtin tool called as XMLHttpRequest which establish the connection with the provide url here url is json/pets.json
    req.open("GET","randompets.json");//req calls the open method where we pass the type i.e. get or post and 2nd arg is url

    req.onreadystatechange = function(){
        var div = document.getElementById("pets");
        if(this.readyState == this.DONE && this.status == 200){
            if(this.responseText != null){
                div.innerHTML = this.responseText;
                console.log(this.responseText);
                var xyz = JSON.parse(this.responseText);
                console.log(xyz);
                console.log(xyz[1]);
                //div.innerHTML = xyz.length;
                div.innerHTML = xyz[0].type;//if you type only xyz[0] then in o/p u get something like [object Object]
                //div.insertAdjacentHTML('afterend',xyz[0].type);//--This is also correct
          
            }else{
                div.innerHTML = "Error : No data is present";
            }
        }
    };
    req.send();

}