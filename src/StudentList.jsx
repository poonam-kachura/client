import React from 'react';

const students = [
  { id: 1, name: 'John Doe', class: '10th', status: 'pass' },
  { id: 2, name: 'Jane Smith', class: '11th', status: 'fail' },
  { id: 3, name: 'Bob Johnson', class: '9th', status: 'pass' },
];

function StudentList() {
  return (
    <div>
      {students.map((student) => (
        student.status === 'pass' ? (
          <div key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Class: {student.class}</p>
            <p>Status: {student.status}</p>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default StudentList;
