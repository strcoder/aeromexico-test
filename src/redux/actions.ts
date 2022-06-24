import axios from 'axios';

export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const setCharacters = (characters) => ({
  type: 'SET_CHARACTERS',
  characters,
});

export const setGryffindor = (gryffindor) => ({
  type: 'SET_GRYFFINDOR',
  gryffindor,
});

export const setStaff = (staff) => ({
  type: 'SET_STAFF',
  staff,
});

export const setStudents = (students) => ({
  type: 'SET_STUDENTS',
  students,
});

export const getCharacters = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/characters',
    }).then(({ data }) => {
      dispatch(setCharacters(data));
    }).catch((error) => {
      dispatch(setError(error));
    });
  };
};

export const getGryffindor = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/gryffindor',
    }).then(({ data }) => {
      dispatch(setGryffindor(data));
    }).catch((error) => {
      dispatch(setError(error));
    });
  };
};

export const getStaff = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/staff',
    }).then(({ data }) => {
      dispatch(setStaff(data));
    }).catch((error) => {
      dispatch(setError(error));
    });
  };
};

export const getStudents = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/students',
    }).then(({ data }) => {
      dispatch(setStudents(data));
    }).catch((error) => {
      dispatch(setError(error));
    });
  };
};
