function App() {
  return (
    <div>
      <div className="header">
        Phone Directory
      </div>
      <div className="content">
        <button>Add</button><br></br>
        <label htmlFor="name" >Name:</label>
        <input type="text" defaultValue="Sneha Yadav"></input>
      </div>
    </div>
  );
}

export default App;
