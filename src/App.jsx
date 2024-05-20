import SideBarProject from "./assets/components/SideBarProject";
import AddProject from "./assets/components/AddProject";

function App() {
  return (
    <main className="h-screen flex">
      <SideBarProject />
      <div className="flex-grow p-4">
        <AddProject />
      </div>
    </main>
  );
}

export default App;
