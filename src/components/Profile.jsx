import React, { useState } from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, role, isNew }) {
  const [changedName, setChangedName] = useState(name);
  const [changedRole, setChangedRole] = useState(role);

  const changeName = () => {
    setChangedName(prompt('변경할 이름 입력'));
  };
  const changeRole = () => {
    setChangedRole(prompt('변경할 역할 입력'));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='profile'>
        <Avatar image={image} isNew={isNew} />
        <h3>{changedName}</h3>
        <span>{changedRole}</span>
        <br />
        <button onClick={changeName}>이름 변경</button>
        <button onClick={changeRole}>직무 변경</button>
      </div>
    </div>
  );
}
