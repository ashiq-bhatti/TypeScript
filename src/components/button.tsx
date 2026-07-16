import React from "react";

type buttonProps = {
  handeOnClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};
function Button(props: buttonProps) {
  return (
    <div>
      <button onClick={(event) => props.handeOnClick(event, 1)}>
        Click Me
      </button>
    </div>
  );
}

export default Button;
