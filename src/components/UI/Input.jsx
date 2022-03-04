const Input = props => {
  return (
    <form>
      <label htmlFor={props.name}>{props.question}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </form>
  );
};

export default Input;
