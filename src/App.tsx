import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { SignInPage } from "./pages/SignInPage";
import { useSelector } from "react-redux";

import { Profile } from "./pages/Profile";
function App() {
  const loggedin = useSelector(
    (state: any) => state.currentUserReducer.loggedin
  );

  return (
    <div className="App container">
      <div className="abstract"></div>
      <Nav />
      <Routes>
        {!loggedin ? (
          <Route path="/" element={<SignInPage />}></Route>
        ) : (
          <Route path="/" element={<Profile></Profile>}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
