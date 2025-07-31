import { FaBullseye } from "react-icons/fa";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import Taskinput from "./components/Taskinput";
import type { TaskCardProps } from "./libs/types";

function App() {
  const TaskCard :TaskCardProps[] = [
    {id: 1,title: "Read a book",description: "Vite + React + Bootstrap + TS",isDone:false }
    ,{id: 2,title: "Write Code",description: "Finish project for class",isDone:false }
    ,{id: 3,title: "Deploy app",description: "Push project to Github Page",isDone:false }
  ]
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header/>


      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName={"Kittipong"} type={"admin"} />
        
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <Taskinput/>
            {/* Card รายการ */}
            <Task {...TaskCard[0]}/>
            <Task {...TaskCard[1]}/>
            <Task {...TaskCard[2]}/>
            
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer/>
    </div>
  );
}

export default App;
