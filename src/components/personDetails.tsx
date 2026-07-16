type personData = {
  name: {
    fname: string;
    lname: string;
    nickname?:string
  };
};

export const PersonDetails = (props: personData) => {
  return (
    <div>
      {props.name.fname} {props.name.lname} - {props.name.nickname}
    </div>
  );
};
