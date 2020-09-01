import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/student';
import PropTypes from 'prop-types';

const InputForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    studentClass: '',
    gender: '',
    dob: '',
  });

  const { name, gender, studentClass, dob } = formData;

  const onChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const searchStudent = ({ name, gender, studentClass, dob }, e) => {
    e.preventDefault();
    debugger;
    alert('search');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addStudent({ name, studentClass, gender, dob });
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Student Management Form</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => onChange(e)}
            name='name'
            required
          />
        </div>
        <div className='form-group'>
          <select
            type='studentClass'
            placeholder='studentClass'
            name='studentClass'
            value={studentClass}
            required
            onChange={(e) => onChange(e)}
          >
            <option value=''>Select a class</option>
            <option value='10A'>10A</option>
            <option value='10B'>10B</option>
            <option value='10C'>10C</option>
            <option value='10D'>10D</option>
          </select>
        </div>
        <div className='form-group'>
          <div onChange={(e) => onChange(e)}>
            <input type='radio' value='male' name='gender' /> Male
            <input type='radio' value='female' name='gender' /> Female
          </div>
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='dob'
            name='dob'
            value={dob}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <input
          type='button'
          onClick={(e) => searchStudent(formData, e)}
          className='btn btn-light'
          value='Search'
        />
        <input type='submit' className='btn btn-primary' value='Add' />
      </form>
    </Fragment>
  );
};

InputForm.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, { addStudent })(InputForm);
