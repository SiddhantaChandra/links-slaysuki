import Header from "./components/Header";
import Links from "./components/Links";
import ImageBlock from "./components/ImageBlock";

function App() {
  return (
    <main className="bg-black min-h-screen text-white py-16 px-8 font-sans">
      <div className="max-w-md mx-auto">
        <ImageBlock />
        <Header />
        <Links />
      </div>
    </main>
  );
}

export default App;
