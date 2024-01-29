import Header from "./Components/Header";
import Landing from "./Components/Landing";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route key="/" path="/" element={<Landing />} />
          <Route
            key="topheadlines"
            path="/topheadlines"
            element={<News key="general" pageSize={10} category={"general"} />}
          />
          <Route
            key="business"
            path="/business"
            element={
              <News key="business" category={"business"} pageSize={10} />
            }
          />
          <Route
            key="entertainment"
            path="/entertainment"
            element={
              <News
                key="entertainment"
                category={"entertainment"}
                pageSize={10}
              />
            }
          />
          <Route
            key="health"
            path="/health"
            element={<News key="health" category={"health"} pageSize={10} />}
          />
          <Route
            key="science"
            path="/science"
            element={<News key="science" category={"science"} pageSize={10} />}
          />
          <Route
            key="sports"
            path="/sports"
            element={<News key="sports" category={"sports"} pageSize={10} />}
          />
          <Route
            key="technology"
            path="/technology"
            element={
              <News key="technology" category={"technology"} pageSize={10} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
