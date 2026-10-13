import { StyledSelect } from "./style";
import { Children, cloneElement, isValidElement } from "react";
import { useLanguage } from "../../i18n";

export const Select = ({ children, register, label, error }) => {
  const { t } = useLanguage();
  return (
    <StyledSelect>
      {label && <label htmlFor={register.name}>{t(label)}</label>}
      <select name="" id="" {...register}>
        {Children.map(children, item => isValidElement(item) && typeof item.props.children === "string" ? cloneElement(item, { children: t(item.props.children) }) : item)}
      </select>
      {error && <p>{t(error.message)}</p>}
    </StyledSelect>
  );
};
