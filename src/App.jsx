import "@fontsource/inter";


import Header from "./components/header";
import Link from "./components/Link";
import Links from "./components/Links";
import ImageBlock from "./components/ImageBlock";

function App() {
  return (
    <main className="font-[Inter] bg-black min-h-screen text-white py-16 px-8">
      <div className="max-w-md mx-auto">
        <ImageBlock />
        <Header />
        <Links />
      </div>
    </main>
  );
}

export default App;
