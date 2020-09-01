import { v4 as uuidv4 } from 'uuid';
import { ADD_STUDENT, REMOVE_STUDENT } from './types';

export const addStudent = ({ name, studentClass, gender, dob }) => (
  dispatch
) => {
  const id = uuidv4();
  dispatch({
    type: ADD_STUDENT,
    payload: { name, studentClass, gender, dob, id },
  });
};

export const removeStudent = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_STUDENT,
    payload: id,
  });
};
