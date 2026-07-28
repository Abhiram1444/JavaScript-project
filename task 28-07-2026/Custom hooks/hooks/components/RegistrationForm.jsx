import useForm from "../useForm";

function RegistrationForm() {

  const {
    values,
    handleChange
  } = useForm({
    name: "",
    email: ""
  });

  return (
    <>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />

      <h3>Name : {values.name}</h3>
      <h3>Email : {values.email}</h3>
    </>
  );
}

export default RegistrationForm;