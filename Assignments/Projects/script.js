var input =document.getElementById("movieinput");
var movieelement=document.getElementById("moviecontainer")
var searchbutton=document.getElementById("search-button");
var resultstatus=document.getElementById("error-msg")

searchbutton.addEventListener( "click" , function(){
    movieelement.innerHTML=""
    resultstatus.innerText="Loading..........🎥"
      
    
    let inputmovie=input.value;
    var callapi = new XMLHttpRequest();
    callapi.onreadystatechange = function(){
       if(this.readyState==4){
           resultstatus.innerText=" "
          let result=JSON.parse(this.responseText)
          console.log(result);
          if(result.Response=="True"){
        
           result.Search.map((item,i)=>{
            movieelement.innerHTML += `

             <div class="moviethumb">
            <img  class="image"  
             src= ${item.Poster}/>
           <p> <b>Title : </b>${item.Title}</p>
           <p> <b>Releasing Year : </b> ${item.Year}</p>
           <p> <b>Type : </b>${item.Type}</p>
           </div>
            `
           
             })
            }
            else if(result.Response=="False"){
                resultstatus.innerText="404 Movies Not Found !!!"

            }
             
}

    

    }
    callapi.open("GET", `https://omdbapi.com/?apikey=45f0782a&s=${inputmovie}`,true);
    callapi.send();

    
})



