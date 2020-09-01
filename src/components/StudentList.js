import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeStudent } from '../actions/student';

const StudentList = ({ students, removeStudent }) => {
  const deleteStudent = (id, e) => {
    e.preventDefault();
    removeStudent(id);
    alert('remove');
  };

  const editStudent = (id, e) => {
    e.preventDefault();
    alert('edit');
  };

  const renderTableData = () => {
    return students.map((student) => {
      const { name, studentClass, gender, dob, id } = student;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{studentClass}</td>
          <td>{gender}</td>
          <td>{dob}</td>
          <td>
            <input
              type='button'
              onClick={(e) => editStudent(id, e)}
              className='btn btn-primary'
              value='Edit'
            />
            <input
              type='button'
              onClick={(e) => deleteStudent(id, e)}
              className='btn btn-danger'
              value='Remove'
            />
          </td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = ['name', 'studentClass', 'gender', 'dob', 'action'];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <Fragment>
      {students !== null && students.length > 0 && (
        <table id='students'>
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  students: state.student,
});

export default connect(mapStateToProps, { removeStudent })(StudentList);
