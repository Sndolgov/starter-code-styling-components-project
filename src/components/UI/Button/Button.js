import "./Button.css";

const Button = (props) => {
  return (
    // <button disabled={props.disabled} type={props.type} className="button">
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
