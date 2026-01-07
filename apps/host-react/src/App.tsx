import './App.css';

const App = () => {
  return (
    <div className="content">
      <div style={{ padding: 24 }}>
        <h1>host App</h1>
        <iframe
          src="http://localhost:3001"
          style={{
            width: '100%',
            height: 300,
            border: '1px solid #ccc'
          }}
        />
      </div>
    </div>
  );
};

export default App;
