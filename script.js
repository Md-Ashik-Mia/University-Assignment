xmlr = new XMLHttpRequest();
var jdata;
xmlr.onload = function() {
    // document.getElementById("demo").innerHTML =this.responseText;
    jdata = JSON.parse(this.responseText);

}

xmlr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xmlr.send();





function fetchData(){
        document.getElementById("demo").innerHTML =jdata[0].title;
    



}



