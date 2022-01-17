import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="h-screen flex grid overflow-hidden grid-cols-5 auto-rows-auto">
    	<div class="box bg-emerald-500 text-white text-lg font-bold text-center p-10 row-start-1 row-span-full col-span-3">


      <div class="flex items-center justify-center m-auto space-x-4">
         <div class="w-64 h-64 bg-white rounded-full"></div>
         <div class="w-32 h-32 bg-slate-50 rounded-full"></div>
         <div class="w-16 h-16 bg-slate-100 rounded-full"></div>
      </div>

      <div className="absolute bottom-5 left-5 p-3">
        <p class="
        font-mono
        		text-4xl
        		font-bold
        		text-white">
        		Arthur Laroya
        </p>
        <p class="
          font-mono
            text-1xl
            font-medium
            p-2
            text-white">
            — Design & Code
        </p>
        <p class="
            font-normal
            text-white
            font-mono">
            Full-stack web developer focused on <br/>
            modular design and functionality
        </p>
      </div>

    </div>
    	<div class="box bg-emerald-100 text-emerald-600 text-lg font-bold text-center p-10 row-start-1 row-span-full col-span-2">My Projects</div>
    </div>
  );
}

export default App;
