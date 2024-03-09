const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() //preventDefault is used to prevent form default actions.

  const height =  parseInt(document.querySelector('#height').value)
      const weight = parseInt(document.querySelector('#weight').value)

    //   const weightGuide = document.querySelector('.guide')

      const result = (document.querySelector('.results'))

      if(height === '' || height < 0 || isNaN(height)){
          result.innerHTML = `Please give a valid Height ${height}`;  
      }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid Weight ${weight}`;
      } else{
        // bmi formula
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        

        // Result time.
        if(bmi < 18.6){
             result.innerHTML= `You are Under weight: ${bmi}`;
             result.style.color = "black";
             result.style.backgroundColor = "Yellow";
             
        } else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `You are Normal: ${bmi}`;
              result.style.backgroundColor = "Green";
              result.style.color = "aliceblue"
            style.color = "Green"
        } else if(bmi > 24.9){
            result.innerHTML = `Do Exercise you are Overweight: ${bmi}`;
              result.style.backgroundColor = "red";
                 
                 
            console.log(bmi);
        }
        
       
        
      }
    
})