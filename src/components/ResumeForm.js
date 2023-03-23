import React, {useState}  from 'react'

export function ResumeForm(){
    const [name, setName] = useState('');
    const [dateOfBirth,setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] =useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }; // submit data????
   
    const handleResumeChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          setResume(selectedFile);
        }
      };

    const handleCoverLetterChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          setCoverLetter(selectedFile);
        }
      };

    return (
      <>
        <form onSubmit ={handleSubmit} className = 'form-css' >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>

        <label htmlFor='dateOfBirth'>Date of Birth </label>
        <input type="text" id="dateOfBirth" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>

        <label htmlFor='email'>Email</label>
        <input type="text" id="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>

        <label htmlFor='phoneNumber'>PhonenNumber</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
        
        <label htmlFor='resume'>Resume</label>
        <input type="file" id="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} value={resume}/>

        <label htmlFor='coverLetter'>Cover Letter</label>
        <input type='file' id='coverLetter' accept='.pdf,.doc,.docx' onChange={handleCoverLetterChange} value={coverLetter} />

        <label htmlFor='coverLetterContent'>Cover Letter Content</label>
        <textarea id='coverLetterContent' rows= '10'></textarea>

        <button type='submit'>Submit</button>
       
       </form>
       </>

    );
}

export default ResumeForm;