const arena=document.querySelector('.arenas');

const player1={
    name:'Sonya',
    hp:80,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['bazuka','gun','superGun'],
    attack: function(){console.log(name+'fight..')},
}
const player2={
    name:'Kitana',
    hp:90,
    img:'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife','gun'],
    attack: function(){console.log(name+'fight..')},
}

function createPlayer(player,{hp,name,img}){
    const playerdiv=document.createElement('div');
    playerdiv.classList.add(`${player}`);
    playerdiv.innerHTML=`
    
        <div class="progressbar">
            <div class="life">${hp}</div>
            <div class="name">${name}</div>
        </div>
        <div class="character">
            <img src=${img} />
        </div>
    `;
    
    arena.appendChild(playerdiv);
}
 createPlayer('player1',player1);
 createPlayer('player2',player2);