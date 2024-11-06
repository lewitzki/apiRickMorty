let arrayCharacters = [];

function getCharacters() { 
    fetch("https://rickandmortyapi.com/api/character/?page=19",
        {
            method: "GET",

        }
    )
    .then((response) => response.json())
    .then((data)=> {
        arrayCharacters = data.results;
        appendCharacters(arrayCharacters);   
        
    })
    .catch((error) =>{
        console.error("error", error);
    });
}

getCharacters();

function appendCharacters(Characters) {
    let place = document.querySelector("#data-output");
    let out = "";

    for (let Character of Characters) {
        out += `<ul>
                    <img src="${Character.image}" alt="">
                    <li> Nome: ${Character.name}</li>
                    <li> Status: ${Character.status}</li>
                    <li> Espécie:  ${Character.species}</td>
                    <li> Gênero: ${Character.gender}</li>
                    <li> Origem: ${Character.origin.name}</li>
                    <li> Localização: ${Character.location.name}</li>
                </ul>
            `;
    }
    place.innerHTML = out;
}
