import './App.css';

function App() {
  return (
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

        <div class="relative col-span-3 h-screen flex bg-emerald-700">
          <div class="flex items-center justify-center m-auto space-x-4">
            <div class="aspect-square w-48 h-48 bg-white rounded-full animate-bounce"></div>
            <div class="aspect-square w-24 h-24 bg-slate-50 rounded-full animate-bounce"></div>
            <div class="aspect-square w-12 h-12 bg-slate-100 rounded-full animate-bounce"></div>
          </div>
          <div class="absolute text-justify font-mono text-white bottom-0 left-0 p-10">
            <p class="text-4xl font-extrabold">Arthur Laroya</p>
            <p class="text-3xl">— design & code</p>
            <p class="italic font-light">full-stack web dev focused on <br/>
            modular design and functionality</p>
          </div>
        </div>

        <div class="relative col-span-2 h-screen flex bg-emerald-100 text-emerald-600 font-mono text-3xl">
          <div class="flex justify-center m-auto space-x-2">
            <div class="aspect-square w-12 h-12 bg-emerald-700 rounded-full hover:animate-pulse"></div>
            <div class="aspect-square w-24 h-24 bg-emerald-700 rounded-full hover:animate-pulse"></div>
            <div class="aspect-square w-48 h-48 bg-emerald-700 rounded-full hover:animate-pulse"></div>
          </div>
          <div class="absolute left-0 top-0 p-10">
            <a class="hover:underline underline-offset-1" href="#">A</a>
          </div>
          <div class="absolute bottom-0 left-0 p-10">
            <a class="hover:underline underline-offset-1" href="#">P</a>
          </div>
          <div class="absolute bottom-0 right-0 p-10">
            <a class="hover:underline underline-offset-1" href="#">C</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
