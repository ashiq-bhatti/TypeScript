type headingProps = {
  children: string;
};
export const Heading = (props: headingProps) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};
