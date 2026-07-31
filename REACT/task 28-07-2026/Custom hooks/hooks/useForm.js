import { useState } from "react";

function useForm(initialValues) {

  const [values, setValues] = useState(initialValues);

  function handleChange(event) {

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

  }

  return {
    values,
    handleChange
  };
}

export default useForm;