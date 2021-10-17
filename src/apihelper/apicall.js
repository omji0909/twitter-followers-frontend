

export const  getfollowers =(userName)=>{

    
    console.log(JSON.stringify(userName));
 
      return fetch(`https://radiant-caverns-61279.herokuapp.com/f`,{
        method:"POST",
        
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
            
        },
        body:JSON.stringify(userName)
    }).then(data =>{
        console.log(data.body);
        
        return data.json();
    }).catch(err => {
        
        console.log(err)})
}



