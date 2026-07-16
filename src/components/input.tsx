import React from "react";

type inputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input(props: inputProps) {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleOnChange} />
    </div>
  );
}

export default Input;
