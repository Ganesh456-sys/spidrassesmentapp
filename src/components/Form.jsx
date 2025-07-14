import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 0 20px rgba(216, 119, 45, 0.3);
`;

const Field = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #0f0f0f;
  color: #fff;
  font-size: 1rem;
  transition: border 0.3s;

  &:focus {
    border-color: #d8772d;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #d8772d, #7497ae, #1a354a);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const Form = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === 'spidrPin') {
      newValue = value
        .replace(/[^\d]/g, '')
        .slice(0, 16)
        .replace(/(.{4})/g, '$1-')
        .slice(0, 19)
        .replace(/-$/, '');
    }

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', form);
    alert('Form submitted! Check the console.');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Field>
          <Label>First Name</Label>
          <Input name="firstName" type="text" value={form.firstName} onChange={handleChange} required />
        </Field>

        <Field>
          <Label>Last Name</Label>
          <Input name="lastName" type="text" value={form.lastName} onChange={handleChange} required />
        </Field>

        <Field>
          <Label>Phone Number</Label>
          <Input name="phoneNumber" type="tel" pattern="[0-9]{10}" value={form.phoneNumber} onChange={handleChange} required />
        </Field>

        <Field>
          <Label>Email Address</Label>
          <Input name="email" type="email" value={form.email} onChange={handleChange} required />
        </Field>

        <Field>
          <Label>Guess the Air Fryer’s Cost ($)</Label>
          <Input name="costGuess" type="number" min="0" value={form.costGuess} onChange={handleChange} required />
        </Field>

        <Field>
          <Label>Spidr Secret PIN</Label>
          <Input name="spidrPin" type="text" value={form.spidrPin} onChange={handleChange} placeholder="####-####-####-####" required />
        </Field>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default Form;
