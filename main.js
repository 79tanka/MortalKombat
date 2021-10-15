const arena=document.querySelector('.arenas');
const randomButton=document.querySelector('.button');

const player1={
    number:'1',
    name:'Sonya',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['bazuka','gun','superGun'],
    attack: function(){console.log(this.name+' fight..')},
}
const player2={
    number:'2',
    name:'Kitana',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife','gun'],
    attack: function(){console.log(this.name+' fight..')},
}

let turn=0;
randomButton.textContent=player1.name+', lets fight..';
randomButton.addEventListener('click',()=>{
    turn++; 
    if(turn%2===0){ 
        playerFight(player2,player1,1);
        randomButton.textContent=player1.name+', let\'s fight..';
    }else{  
        playerFight(player1,player2,2);
        randomButton.textContent=player2.name+', let\'s fight..';
    }
})

function  randomDamage(){
    return Math.ceil(Math.random()*20);
}

function playerFight(fighter, player, num){
    
    player.hp-=randomDamage();
    if (player.hp<=0){
        player.hp=0;
        life[`${num}`-1].textContent='';
        life[`${num}`-1].style.width=player.hp+'%';
        arena.appendChild(showWinner(fighter));
        randomButton.disabled = true;
        return;
    }    
    life[`${num}`-1].textContent=player.hp;
    life[`${num}`-1].style.width=player.hp+'%';
}
function showWinner(winnerPlayer){
    const winner=document.createElement('div');
    winner.classList.add('winner');
    winner.innerText=winnerPlayer.name+' wins';
    return winner;
}

function createPlayer({number,hp,name,img}){
    const playerdiv=document.createElement('div');
    playerdiv.classList.add(`player${number}`);
    playerdiv.innerHTML=`
    
        <div class="progressbar">
            <div class="life">${hp}</div>
            <div class="name">${name}</div>
        </div>
        <div class="character">
            <img src=${img} />
        </div>
    `;
    return playerdiv;
}

    arena.appendChild(createPlayer(player1));
    arena.appendChild(createPlayer(player2));
    const life=document.querySelectorAll('.life');