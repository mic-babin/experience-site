export const validate = (fields) => {
  const { name, email } = fields;
  let errors = {};

  if (!name.trim()) {
    errors.name = "fieldRequired";
  }
  if (!email.trim()) {
    errors.email = "fieldRequired";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "validEmail";
  }
  return errors;
};
