import { createSlice } from "@reduxjs/toolkit"

const initState = {
                players  : [{id:1,name : 'Anne'},
                            {id:2,name : 'Ludmilla'},
                            {id:3,name : 'Betsy'},
                            {id:4,name : 'Alyss-Aëlle'}],
                position : 0 ,
}

export const player = createSlice({
    name:'player',
    initialState:initState,
    reducers:{
        addPlayer:(state,action)=>{ //  ajouter un joueur

          // ajoute un élément à la fin d'un tableau et retourne la nouvelle taille du tableau.
            state.players.push(action.payload) ;
            return state ;
        },

       delPlayer:(state,action)=>{ //  s un joueur

            const newPlayers = state.players.filter(item=>item.id != action.payload.id) ;

            const newState = {
                players : newPlayers,
                position: state.position,
            }

            return newState ;
        },

       resetPlayer:(state,action)=>{ //  vide la liste

            return initState ;
        },

        nextPlayer:(state,action) =>{

            console.log("action.payload" , action.payload)
            const newState = { ...state , position: action.payload  }
            return newState ;

        },
    }

})

export const {  addPlayer, delPlayer , resetPlayer , nextPlayer } = player.actions ;

export default player.reducer;