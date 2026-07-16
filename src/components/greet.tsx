type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedin: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `welcom ${props.name}! you have ${props.messageCount} unread message.`
          : `welcom Guest! please register yoursef.`}
      </h2>
    </div>
  );
};
