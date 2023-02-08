import { useState } from 'react';

export default function EmployeeForm() {
  const [form, setForm] = useState({ name: '', role: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <form className='employeeForm' onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='이름'
          value={form.name}
          onChange={handleChange}
        />
        <input
          name='role'
          type='text'
          placeholder='역할'
          value={form.role}
          onChange={handleChange}
        />
        <button>제출</button>
      </form>
    </div>
  );
}
