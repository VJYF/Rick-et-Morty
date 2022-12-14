// const image = document.getElementsByClassName('Cardimage');

//const todosHTML = document.getElementById("todosHTML");
// const getTodos = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((Response) => Response.json())
//         .then((todos) => {
//             fetch("https://jsonplaceholder.typicode.com/users")
//                 .then((Response) => Response.json())
//                 .then((users) => {
//                     users.forEach((user) => {

//                         var newDiv = document.createElement("table");

//                         todos.forEach((todo) => {
//                             if (todo.userId == user.id) {
//                                 newDiv.innerHTML += `
                                
//                                 <tr class="headtr">
//                                 <th class="th">${todo.userId = user.id ? user.name : "ok"}</th>
//                                 <th class="th">${todo.id}</th>
//                                 <td class="td">${todo.title}</td>
//                                 <td class="td">${todo.completed}</td>
//                                 </tr>
//                                 `

//                                 todosHTML.appendChild(newDiv);
//                                 console.log(users.name);
//                             };
//                         })
//                     });
//                 });
//         });
// };
// getTodos();


const Appmain = document.getElementById('Appmain')
const Cardimg = document.getElementsByClassName('Cardimage');
const Cardname = document.getElementsByClassName('Cardimage');
const Cardtext2 = document.getElementsByClassName('Cardtext2');
// const locations = document.getElementById('location');

const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((Response) => Response.json())
    .then((characters) => {
        // console.log(characters['results'])
        // characters = characters['results']
        var main = document.createElement("div");
        characters["results"].forEach((character => {
            // console.log(character)
            searchPic = character.image;
            //console.log(searchPic)
 
                main.innerHTML += `
                        <section class="CharactersList">
                            <div id="character_card" class="Card CharactersListcard">
                                <div class="Cardmain">
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
                                    </div>`
                                    fetch("https://rickandmortyapi.com/api/episode/")
                                    .then((Response) => Response.json())
                                    .then((episodes) => {
                                        episodes['result'].forEach(episode => {
                                            
                                        `<ul class="EpisodesList" id="EpisodesList">
                                        </ul>`
                                        });
                                        
                                    })
                                    `
                            </div>    
                        </section>
                            `
            Appmain.appendChild(main);

            
        }));
    })
}
getCharacters();