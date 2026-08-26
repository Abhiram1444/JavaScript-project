function Student({ student, onRemove }) {
  return (
    <div>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>

      <button onClick={() => onRemove(student.id)}>
        Remove
      </button>
    </div>
  );
}

export default Student;