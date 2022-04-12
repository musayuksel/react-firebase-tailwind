import "./App.css";
import { signInWithGoogle } from "./firebase-config";
function App() {
  return (
    <div className="App container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={signInWithGoogle}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Sing-in with goole
      </button>
    </div>
  );
}

export default App;
