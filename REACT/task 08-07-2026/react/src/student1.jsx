function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Course: {props.course}</h2>
      <h2>Marks: {props.marks}</h2>
    </>
  );
}

export default Student;