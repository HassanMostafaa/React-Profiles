import { Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./components/Nav";
import { SignInPage } from "./pages/SignInPage";
import { useSelector } from "react-redux";
import { Search } from "./pages/Search";
import { Profile } from "./pages/Profile";
import { UserProfile } from "./pages/UserProfile";
import { Dashboard } from "./pages/Dashboard";
import { AdminPosts } from "./components/AdminPosts";
import { AdminUsers } from "./components/AdminUsers";
import { Footer } from "./components/Footer";

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
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="users" element={<AdminUsers></AdminUsers>}></Route>
              <Route path="posts" element={<AdminPosts></AdminPosts>}></Route>
            </Route>
            <Route path="*" element={<Navigate replace to="/search" />}></Route>
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
