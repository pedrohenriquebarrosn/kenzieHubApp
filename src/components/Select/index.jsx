import { Children, cloneElement, isValidElement } from "react";
import { StyledSelect } from "./style";
import { useLanguage } from "../../i18n";

export const Select = ({ children, register, label, error }) => {
  const { t } = useLanguage();
  const { name } = register;
  return (
    <StyledSelect>
      {label && <label htmlFor={name}>{t(label)}</label>}
      <select id={name} {...register} aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}>
        {Children.map(children, item =>
          isValidElement(item) && typeof item.props.children === "string"
            ? cloneElement(item, { children: t(item.props.children) })
            : item
        )}
      </select>
      {error && <p id={`${name}-error`} role="alert">{t(error.message)}</p>}
    </StyledSelect>
  );
};
