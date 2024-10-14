import SupportScribe from "./components/SupportScribe";

export default function Home() {
  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-stretch p-4">
      <div className="w-full flex flex-col lg:flex-row gap-4"> 
        <SupportScribe /> 
      </div>
    </div>
  );
}
