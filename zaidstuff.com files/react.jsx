function MyButton() {
    return (
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
        I'm a button
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
  