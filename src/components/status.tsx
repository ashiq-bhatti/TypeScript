type statusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: statusProps) => {
    
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fatched successfully!";
  } else if (props.status === "error") {
    message = "Error..";
  }

  return (
    <div>
      <p>Status - {message}</p>
    </div>
  );
};
