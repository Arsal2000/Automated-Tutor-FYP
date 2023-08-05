import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MC from "./components/MC";
import CN from "./components/CN";
import Prog from "./components/Prog";
import SubTopics from "./components/SubTopics";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
// import Prog from "./components/Prog";
import AdminHome from "./components/AdminHome";
import AdminTopic from "./components/AdminTopic";
import AdminDomain from "./components/AdminDomain";
import SearchResult from "./components/SearchResult";
import UploadDocument from "./components/UploadDocument";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/MC" element={<MC />} />
      <Route exact path="/CN" element={<CN />} />
      <Route exact path="/Prog" element={<Prog />} />
      <Route exact path="/SubTopics" element={<SubTopics />} />
      <Route exact path="/HomePage" element={<HomePage />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/AdminHome" element={<AdminHome />} />
      <Route exact path="/AdminDomain" element={<AdminDomain />} />
      <Route exact path="/UploadDocument" element={<UploadDocument />} />
      <Route exact path="/AdminTopic" element={<AdminTopic />} />
      <Route exact path="/Quiz" element={<Quiz />} />
      <Route exact path="/SearchResult" element={<SearchResult />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MC from "./components/MC";
// import CN from "./components/CN";
// import Prog from "./components/Prog";
// import SubTopics from "./components/SubTopics";
// import HomePage from "./components/HomePage";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import useToken from "./components/useToken";
// import Header from "./components/Header";
// // import Prog from "./components/Prog";

// // const { token, removeToken, setToken } = useToken();
// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Header token={removeToken} />
//       <Route exact path="/" element={<App />} />
//       <Route
//         exact
//         path="/MC"
//         element={<MC token={token} setToken={setToken} />}
//       />
//       {/* <Route exact path="/CN" element={<CN />} />
//       <Route exact path="/Prog" element={<Prog />} /> */}
//       <Route exact path="/SubTopics" element={<SubTopics />} />
//       <Route exact path="/HomePage" element={<HomePage />} />
//       <Route exact path="/Login" element={<Login setToken={setToken} />} />
//       <Route exact path="/Signup" element={<Signup />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );
