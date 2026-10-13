/** Consistent semantic button: native attributes must reach the DOM. */
export const Button = ({ action, children, className, type = "button", ...props }) => (
  <button type={type} onClick={action} className={className} {...props}>
    {children}
  </button>
);
