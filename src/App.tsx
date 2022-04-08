import { Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./components/Nav";
import { SignInPage } from "./pages/SignInPage";
import { useSelector } from "react-redux";
import { Search } from "./pages/Search";
import { Profile } from "./pages/Profile";
import { UserProfile } from "./pages/UserProfile";

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
          <>
            <Route path="" element={<SignInPage />}></Route>
            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </>
        ) : (
          <>
            <Route path="" element={<Profile></Profile>}></Route>
            <Route path="search" element={<Search></Search>}></Route>
            <Route path="search/:id" element={<UserProfile />}></Route>
            <Route path="*" element={<Navigate replace to="/search" />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
