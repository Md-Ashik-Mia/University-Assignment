xmlr = new XMLHttpRequest();
var jdata;
xmlr.onload = function() {
    // document.getElementById("demo").innerHTML =this.responseText;
    jdata = JSON.parse(this.responseText);

}

xmlr.open('GET', 'https://md-ashik-mia.github.io/University-Assignment/ashik.json', true);
xmlr.send();





function fetchData(){
        console.log(jdata[0])

       var Food =jdata[0].foods.likes
       console.log(Food)

    saveItem=''
       for(item of Food){
        saveItem=saveItem+" "+item;
       }
        console.log(saveItem)

        document.getElementById("demo").innerHTML=`Hello My Name is ${jdata[0].FirstName} ${jdata[0].LastName} i do like ${saveItem}`

}



