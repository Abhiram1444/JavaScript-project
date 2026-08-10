import Student from "./Student";

function StudentList({ students, onRemove }) {
  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default StudentList;