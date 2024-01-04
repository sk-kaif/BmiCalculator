import './index.css'
import React, {useState} from 'react'
 
function App() {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState('')
 
  let calcBmi = (event) => {
    event.preventDefault() 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1)) 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}> 
        <div className='inputCon'>
          <label>Weight (lbs)</label>
          <input value={weight} type='number' onChange={(e) => setWeight(e.target.value)} required />
        </div>
 
        <div className='inputCon'>
          <label>Height (in)</label>
          <input value={height} type='number' onChange={(event) => setHeight(event.target.value)} required />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;