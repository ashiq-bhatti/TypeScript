type personListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};
export const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <p key={name.firstName}>
            {name.firstName} {name.lastName}
          </p>
        );
      })}
    </div>
  );
};
