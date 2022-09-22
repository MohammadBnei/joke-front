import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState();
  const [version, setVersion] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_API_URL);

      const { joke, version } = await res.json();

      setJoke(joke);
      setVersion(version);
      setLoading(false);
    })();
  }, [process.env.REACT_APP_API_URL]);

  return (
    <div className="App">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">
          API Version : {version}
        </a>
        <a className="btn btn-ghost normal-case text-xl">
          Front Version : {process.env.REACT_APP_VERSION}
        </a>

        {loading && (
          <div class="flow-root">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full float-right"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-500">
              {joke?.category}
            </h1>
            <p className="py-6">{joke?.setup}</p>
            <p className="py-6">{joke?.delivery}</p>
            <p className="py-6">{joke?.joke}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
