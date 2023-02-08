// Action Creators
export function fetchAstronauts() {
  return function (dispatch){
    dispatch({type: "astronauts/astronautsLoading"})
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then(data=>{
        dispatch({type: "astronauts/astronautsLoaded", payload: data.people})
      })
  }
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };

    default:
      return state;
  }
}
