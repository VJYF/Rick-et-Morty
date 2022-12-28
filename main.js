const Appmain = document.getElementById('Appmain');
character = "https://rickandmortyapi.com/api/character";
const getCharacters = () => {
    fetch(character)
    .then((Response) => Response.json())
    .then((characters) => {
        var main = document.createElement("div");
        characters["results"].forEach((character => {
            main.innerHTML += `
                        <section class="CharactersList" id="CharactersList">
                            <div id="character_card" class="Card CharactersListcard">
                                <div class="Cardmain" id="${character.name}">
                                    <div class="Cardimage-container">
                                        <img id="Cardimage" class="Cardimage" src="${character.image}">
                                    </div>
                                    <div class="Cardinfo">
                                        <h2 class="Cardname">${character.name}</h2>
                                        <p id="species" class="Cardtext">SPECIES - TYPE - GENDER</p>
                                        <b id="species" class="Cardtext2">${character.species} - ${character.type='     ' ? "NO TYPE" : character.type} - ${character.gender}</b>
                                        <p class="Cardtext">
                                            <span class="Cardlabel">Location: </span>
                                            <b id="location">${character.location.name}</b>
                                        </p>
                                        <p class="Cardtext">
                                            <span class="Cardlabel">Origine: </span>
                                            <b id="origine">${character.origin.name}</b>
                                        </p>
                                    </div>
                                    <p class="Cardepisodes">
                                    <b class="Cardlabel">Played in ${character.episode.length} episodes: </b>
                                    </p>
                                </div>
                            </div>    
                        </section>
                            `
            Appmain.appendChild(main);
        }));
    })
}

const getEpisodes = () => {
    fetch(character)
    .then((Response) => Response.json())
    .then((characters) => {
        characters.results.forEach((character => {
            character.episode.forEach(episode => {
                const CharactersList = document.getElementById(character.name);
                fetch(episode)
                .then((Response) => Response.json())
                .then((episodesbyid) => {
                    console.log(episodesbyid)
                    var CharactersListEpisodes = document.createElement("div");
                    CharactersListEpisodes.innerHTML +=
                    `
                    <ul>
                    <li>
                    <p>${episodesbyid.episode} - ${episodesbyid.name}</p>
                    </li>
                    </ul>
                    `
                    CharactersList.appendChild(CharactersListEpisodes);

                    });
                });
            }));
        });
}   

getCharacters();
getEpisodes();


function load(a) {  
    a += 1
    console.log("a : " + a); 
    character = "https://rickandmortyapi.com/api/character?page=" + a;
    console.log("page : " + character)
    getCharacters();
    getEpisodes();
  }