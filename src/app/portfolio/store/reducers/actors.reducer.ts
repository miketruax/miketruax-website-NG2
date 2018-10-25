import  * as ActorActions  from '../actions/actor.actions';

export type ActorState = Object

//Initializes state for store
//movieNum allows for verification all movies have been retreived
//initializing at -1 prevents populating any information prior to iterating through movies
const initialState: ActorState = {actors: [], movieNum: -1, movies: []};


export function actorReducer(state = initialState, action: any): any{
  switch (action.type) {
      //Clears all actors

      case ActorActions.CLEAR_ACTORS: {
        return {actors: [], movieNum: action.payload, movies: []}
      }

      //Adds movie to list and decrements movieNum when an API call is finished
      case ActorActions.ADD_ACTORS : {
        return {actors: state['actors'].concat(action.payload.actors), movieNum: state['movieNum']-1, movies: state['movies'].concat(action.payload.movies)}
      }


      case ActorActions.COMBINE_ACTORS : {
        //If still movies left to retrieve (movieNum > 0) will return current state
        if(state['movieNum'] >0){
         return state
        }
        //Only executes when movieNum is 0 signifying all movies have been called successfully
        else{
          //reduces actors list by iterating through the actors array on state
          //the reduce then verifies that the value (val) exists in the actors array after the initial occurence
          //if it does exist again AND isn't already in the accumulator (dupl) it's pushed to dupl
          //after iteration, 'reduced' is set to either the accumulated array or an empty array
          let reduced = state['actors'].reduce(function(dupl, val, idx, arr) {
            if (arr.indexOf(val, idx + 1) !== -1 && dupl.indexOf(val) === -1) {
              dupl.push(val);
            }
            return dupl;
          }, []);
          //returns reduced array with all other data remaining the same
          return {actors: reduced, movieNum: state['movieNum'], movies: state['movies']}
        }

      }
      //catch all for actions
      default:
        return state;
    }
  };

  export const getAllActors = (state: ActorState) => state