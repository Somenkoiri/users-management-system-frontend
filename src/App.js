import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./layout/user_page/UserPage";
import UserSelect from "./component/user_select/UserSelect";
import AddTools from "./component/add-tools/AddTools";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage/>} />
          <Route path="/chatgpt-tools" element={<UserSelect />} />
           <Route path="/add-tools" element={<AddTools />} />
     
      </Routes>
    </Router>
  );
}

export default App;
