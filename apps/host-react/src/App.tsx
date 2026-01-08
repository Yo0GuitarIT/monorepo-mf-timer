import './App.css';

const App = () => {
  return (
    <div className="content">
      <div style={{ padding: 24 }}>
        <h2>host App</h2>
        <iframe
          src="http://localhost:3001"
          style={{
            width: '100%',
            height: '400px',
            border: '1px solid #ccc'
          }}
        />
      </div>
    </div>
  );
};

export default App;
