import React from "react";
import { StyledInput } from "./style";
import { useLanguage } from "../../i18n";

export const Input = ({ label, type, placeholder, register, error }) => {
  const { t } = useLanguage();
  return (
    <StyledInput>
      {label && <label htmlFor={register.name}>{t(label)}</label>}
      <input
        type={type}
        id={register.name}
        placeholder={t(placeholder)}
        {...register}
      />
      {error && <p>{t(error.message)}</p>}
    </StyledInput>
  );
};
