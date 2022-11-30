import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>password:
        <input 
          type="text" 
          name="password" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="button" name="submitButton" value="Submit!"/>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

