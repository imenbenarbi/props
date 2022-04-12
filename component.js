import React from 'react' ;


 

function Component (props)

{
     function  handelclick (e){
          e.preventDefault();
         alert(`name of profile user is ${props.name}` ) ;}
    return(
    <div>
    <p>the full name is<span> {props.name}</span> and the bio 
    {props.bio} and profession is<span> {props.profession}</span>
    </p>
    <p><img src={"https://www.noviscore.fr/partition-musique-de-film/image-james-bond.jpg"}/>{props.children}</p>
    <button onClick={handelclick}>alert the name</button>
    </div>
    )
    
}

export default Component  ;