import { Link } from "react-router-dom";
const variants = { primary: "button button--primary", pink: "button button--pink", outline: "button button--outline" };
export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
