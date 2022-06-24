const reducer = (state, payload) => {
  switch (payload.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: payload.characters,
      };
    case 'SET_GRYFFINDOR':
      return {
        ...state,
        gryffindor: payload.gryffindor,
      };
    case 'SET_STAFF':
      return {
        ...state,
        staff: payload.staff,
      };
    case 'SET_STUDENTS':
      return {
        ...state,
        students: payload.students,
      };
    case 'SET_ERROR': return state;
    default: return state;
  }
};

export default reducer;