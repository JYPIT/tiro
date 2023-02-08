import { useReducer } from 'react';
import personReducer from '../reducer/person-reducer';

export default function Mentor() {
  // const [person, setPerson] = useState(mentorData);
  const [person, dispatch] = useReducer(personReducer, mentorData);
  const onClick = () => {
    const prev = prompt('변경할 이름 선택');
    const current = prompt('변경할 이름 입력');
    dispatch({ type: 'updated', prev, current });
  };
  const addMentor = () => {
    const name = prompt('추가할 이름 입력');
    const role = prompt('추가할 역할 입력');
    dispatch({ type: 'added', name, role });
  };
  const deleteMentor = () => {
    const name = prompt('삭제할 이름 선택');
    dispatch({ type: 'deleted', name });
  };
  return (
    <div>
      <p>{person.name}의 멘토: </p>
      {person.mentors.map((mentor, index) => (
        <li key={index}>
          {mentor.name}({mentor.role})
        </li>
      ))}
      <button onClick={onClick}>멘토의 이름 변경</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
}

const mentorData = {
  name: '쥴리',
  role: '개발자',
  mentors: [
    {
      name: '밥',
      role: '시니어개발자',
    },
    {
      name: '제임스',
      role: '시니어개발자',
    },
  ],
};
