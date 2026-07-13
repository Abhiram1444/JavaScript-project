import Student from "./students";

function App() {
  const students = [
    { id: 1, name: "Abhiram", marks: 95 },
    { id: 2, name: "Rahul", marks: 90 },
    { id: 3, name: "Kiran", marks: 88 },
  ];

  return (
    <>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          marks={student.marks}
        />
      ))}
    </>
  );
}

export default App;