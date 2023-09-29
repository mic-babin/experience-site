import { useState, useEffect } from "react";
import { navigate } from "gatsby";
// import axios from "axios";

export const useForm = (validate, setSent) => {
  const defaultFields = {
    name: "",
    email: "",
    how: "",
    textarea: "",
  };

  const [fields, setFields] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetFields = () => {
    setFields(defaultFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(fields));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      const myForm = event.target;
      const formData = new FormData(myForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          resetFields();
          setSent(true);
        })
        .catch((error) => {
          alert("Une erreur est survenue");
          console.log(error);
        });
    }
  };

  // const sendEmail = async () => {
  //   try {
  //     await axios.post("/.netlify/functions/email", { fields });
  //     resetFields();
  //     setSent(true);
  //     setIsSubmitting(false);
  //   } catch (error) {
  //     alert("Une erreur est survenue");
  //     console.log(error.response.data);
  //   }
  // };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // sendEmail();
    }
  }, [errors, isSubmitting]);

  return { handleChange, fields, handleSubmit, errors };
};
