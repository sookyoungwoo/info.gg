import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JPlace from "./page/Valorant/agent/Jett/Select_Jett_map"
import VPlace from "./page/Valorant/agent/Viper/Select_Viper_map"
import Nav from "./components/Nav";
import Select from "./page/Valorant/Select_agent";
import Chat from "./page/FeedBack/Chat";
import Lecture from "./page/FeedBack/Lecture";
import English from "./page/Word/english";
import Japan from "./page/Word/japan";
import Aim from "./page/Valorant/Select_aim";
import Jett_Bind from "./page/Valorant/agent/Jett/bind"
import Viper_Bind from "./page/Valorant/agent/Viper/bind"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/Select/JPlace" element={<JPlace />}></Route>
          <Route path="/Select/JPlace/Jett_bind" element={<Jett_Bind />}></Route>
          <Route path="/Select/VPlace" element={<VPlace />}></Route>
          <Route path="/Select/VPlace/Viper_bind" element={<Viper_Bind />}></Route>
          <Route path='/Select' element={<Select />}></Route>
          <Route path='/Chat' element={<Chat />}></Route>
          <Route path='/Lecture' element={<Lecture />}></Route>
          <Route path='/english' element={<English />}></Route>
          <Route path='/Japan' element={<Japan />}></Route>
          <Route path='/Aim' element={<Aim />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
