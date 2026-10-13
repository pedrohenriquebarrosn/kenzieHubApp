import React, { useState } from "react";
import { Button } from "../Button";
import { StyledInputPassword } from "./style";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useLanguage } from "../../i18n";

export const InputPassword = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const { t } = useLanguage();
  return (
    <StyledInputPassword>
      {label && <label htmlFor={register.name}>{t(label)}</label>}
      <input
        type={isHidden ? "password" : "text"}
        id={register.name}
        placeholder={t(placeholder)}
        {...register}
      />
      <Button type="button" aria-label={isHidden ? t("Mostrar senha") : t("Ocultar senha")} aria-pressed={!isHidden} action={() => setIsHidden(current => !current)}>
        {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
      {error && <p>{t(error.message)}</p>}
    </StyledInputPassword>
  );
};
