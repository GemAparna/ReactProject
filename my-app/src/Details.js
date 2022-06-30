import React,{useState, useEffect} from 'react';

function Details(props) {

    const [data, setdata]=useState('');

  // input field states
  const [Name, setName]=useState('');
  const [Skills, setSkills]=useState('');
  const [sno, setsno]=useState('');

  // form submit event
  const handleAdddataubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      Name,
      Skills,
      sno
    }
    setdata([...data,book]);
    setName('');
    setSkills('');
    setsno('');
  }


  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data));
  },[data])

    return (
        <div className='details'>
          <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAdddataubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={Name}></input>
            <br></br>
            <label>Skills</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSkills(e.target.value)} value={Skills}></input>
            <br></br>
            <label>sno</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setsno(e.target.value)} value={sno}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>
        </div>
    );
}

export default Details;