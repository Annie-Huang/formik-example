import './App.css';

function App() {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <form>
        <div className='field'>
          <input name='email' placeholder='Email' />
          <div className='error'></div>
        </div>
        <div className='field'>
          <input name='username' placeholder='Username' />
          <div className='error'></div>
        </div>
        <div className='field'>
          <input name='password' placeholder='Password' />
          <div className='error'></div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
