import './App.css';

const item: string[] = ['a', 'b', 'c'];

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>

      <ul>
        {item.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
