import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Typography } from '@material-ui/core';
import { StateContext } from "../../App";

export function ResumeForm() {

  const navigate = useNavigate();
  const { dispatch } = useContext(StateContext);

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleCoverLetterChange = (event) => {
    const file = event.target.files[0];
    setCoverLetter(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('resume', resume);
    formData.append('coverLetter', coverLetter);
    navigate('/results')
    dispatch({type: 'setRecentlySubmitted', payload: true});
    ;

    // Submit form data
    fetch('/submit-resume', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // Handle response
        console.log('Success:', response);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" align='center'>Submit Your Resume</Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          type="file"
          label="Resume"
          margin="normal"
          fullWidth
          onChange={handleResumeChange}
        />
        <TextField
          InputProps={{ disableUnderline: true }}
          type="file"
          label="Cover Letter"
          margin="normal"
          fullWidth
          onChange={handleCoverLetterChange}
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ResumeForm;