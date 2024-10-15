import DraggableList from "./components/DraggableStates";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full h-full bg-white px-4 py-2">
      <Header />
      <DraggableList />
    </div>
  );
}
