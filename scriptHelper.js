// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let div = document.getElementById('missionTarget');

  div.innerHTML = `
  <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
  `
}

function validateInput(testInput) {
         let numberInput = Number(testInput);
    
             if (testInput=== ""){
             
               return "Empty";
           } else if(isNaN(numberInput)) {
         
                return "Not a number";
           } else if(isNaN(numberInput)=== false) {
         
                return "Is a number";
           }

     //   });
        
    

   
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

          

         let pilotStatus= document.getElementById('pilotStatus');

         let copilotStatus= document.getElementById('copilotStatus');

          let fuelStatus= document.getElementById('fuelStatus');

          let cargoStatus= document.getElementById('cargoStatus');

          let launchStatus= document.getElementById('launchStatus');

          
          if (validateInput(pilot)=== "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel)=== "Empty" || validateInput(cargoLevel)=== "Empty"){
            window.alert('all feilds are required');
             
              
          } else if (validateInput(pilot)=== "Is a number" || validateInput(copilot)=== "Is a number" || validateInput(fuelLevel)=== "Not a number" || validateInput(cargoLevel)=== "Not a number"){
            window.alert('make sure to enter valid information for all feilds');
              //preventDefault();
              
         } else if (Number(fuelLevel)>= 10000 && Number(cargoLevel)> 10000 ) {
              list.style.visibility= "visible";
              pilotStatus.innerHTML= `pilot ${pilot} is ready`;
              copilotStatus.innerHTML= `copilot ${copilot} is ready`;
              cargoStatus.innerHTML= 'Cargo mass too heavy for launch';
            
              launchStatus.style.color= 'red';
              launchStatus.innerHTML= 'Shuttle Not Ready for Launch';
             

          } else if (Number(fuelLevel)<10000 && Number(cargoLevel)<= 10000) {
             list.style.visibility= "visible";
             pilotStatus.innerHTML= `pilot ${pilot} is ready`;
             copilotStatus.innerHTML= `copilot ${copilot} is ready`;
              fuelStatus.innerHTML= 'Fuel level is not enough for launch';
              
              launchStatus.style.color= 'red';
              launchStatus.innerHTML= 'Shuttle Not Ready for Launch';
             
          } else if (Number(fuelLevel)>= 10000 && Number(cargoLevel)<= 10000){
            list.style.visibility= "visible";
            pilotStatus.innerHTML= `pilot ${pilot} is ready`;
            copilotStatus.innerHTML= `copilot ${copilot} is ready`;
            fuelStatus.innerHTML= 'Fuel level is high enough for launch';
            cargoStatus.innerHTML= 'Cargo mass is low enough for launch';
            launchStatus.innerHTML= 'Shuttle  Ready for Launch';
            
            launchStatus.style.color= 'green';
            
            

          }
            
        } 
    
        

    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json() 
        
        });

    return planetsReturned;
    };
  


function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length)
    return planets[index];   
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
