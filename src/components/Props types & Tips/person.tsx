import { personData } from "./types";

export const PersonDetails = ({name}: personData) => {
  return (
    <div>
      {name.fname} {name.lname} - {name.nickname}
    </div>
  );
};
