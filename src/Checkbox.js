import { useEffect, useState } from "react";
import style from "./css/Checkbox.module.css";
import ApiCaller from "./Fetcher-lostarkAPI";

function CheckBox() {
  const [users, setUsers] = useState([]);
  const CallingApi = async () => {
    setUsers(await ApiCaller("포션오버도즈"));
  };

  useEffect(() => {
    CallingApi();
  }, []);

  return (
    <div className={style.box}>
      {users.map((user) => (
        <div key={user.CharacterName}>
          <form>
            <span>{user.CharacterName}</span>
            <input type="checkbox" className={style.checkbox}></input>
          </form>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
