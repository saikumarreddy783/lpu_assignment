import React, { useState } from 'react';
import { Card } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import './App.css';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [state, setState] = useState({ name: '', email: '', password: ''});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = () => {
    setIsSubmit(true);
  }
console.log(state);
  return (
    <div className="site-card-border-less-wrapper">
      {!isSubmit && (
      <Card bordered={false} style={{ width: 500, margin: 'auto', marginTop: '16%' }} actions={[<Button type="primary" disabled={false} onClick={handleSubmit}>Register</Button>]}>
      <Input placeholder="Enter your name" type="text" style={{ marginBottom: '12px' }} name="name" onChange={handleChange} required/>
      <br />
      <Input placeholder="Enter your email" type="email" style={{ marginBottom: '12px' }} name="email" onChange={handleChange} required />
      <br />
      <Input placeholder="Enter your password" type="password" onChange={handleChange} name="password" required/>
    </Card>
      )}
    {isSubmit && (
      <Card bordered={false} style={{ width: 500, margin: 'auto', marginTop: '16%' }}>
        <Title level={4}>Welcome: {state.name}</Title>
        <Title level={3}>You're Email: {state.email}</Title>
      </Card>
    )}
    </div>
  );
}

export default App;
