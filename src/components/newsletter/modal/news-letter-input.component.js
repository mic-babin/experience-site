import React from "react";
import { Input, InputGroup } from "./modal.styles";
import { Trans } from "gatsby-plugin-react-i18next";

const ContactFormInput = ({ field, handleChange, fields, errors }) => {
  return (
    <InputGroup>
      <Input
        key={field.id}
        type={field.type}
        placeholder={field.placeHolder}
        required={true}
        onChange={handleChange}
        name={field.name.toLowerCase()}
        value={fields[field.name.toLowerCase()]}
      />

      {errors[field.name.toLowerCase()] && (
        <span>
          *<Trans>{errors[field.name.toLowerCase()]}</Trans>
        </span>
      )}
    </InputGroup>
  );
};

export default ContactFormInput;
