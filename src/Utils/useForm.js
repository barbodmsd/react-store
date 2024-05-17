import { useState } from "react";

// create costume hook
const useForm = () => {
  const [fields, setFields] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    const { target } = e;
    setFields({
      ...fields,
      [target.name]: target.value, //create for each input key:value
    });
  };
  return [fields, handleChange];
};
export default useForm;
