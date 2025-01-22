
import html from "./assets/images/html-five2.svg"
import css from "./assets/images/css (1).svg"
import js from "./assets/images/javascript.svg"
import tailwind from "./assets/images/tailwind.svg"
import bootstrap from "./assets/images/bootstrap.svg"
import react_ from "./assets/images/react.svg"
import "./Home.css"

export default function Home() {

  const delay = () => `${Math.random()*3}s`

  return (
    <>
      <section className="flex items-center justify-between">
        <div style={{width: "35rem"}} className="flex ml-24 flex-col gap-3">
          <h1 className="text-6xl font-semibold">I am Lukáš Brettl</h1>
          <h2 className="text-6xl font-semibold" >Front-end developer</h2>
          <p className="pr-10 mt-4 text-lg">I'm a student in high school who enjoys building websites and focuses mainly on the front-end. I know my apps aren't the best, but I try to get better every day and learn from my mistakes.</p>
          <div className="flex items-center mt-6 gap-10">
            <button className="text-center w-36 p-3 text-xl rounded-lg bg-indigo-600 text-white font-semibold ">my apps</button>
            <a href="#" className="text-xl font-bold underline ">technologies I use</a>
          </div>
        </div>
        
        <svg style={{width:"40rem"}} className="sm:hidden lg:flex" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M60.07853317260742,292.1466064453125C43.71727625528972,234.55498123168945,23.036648432413738,137.95811716715494,50.654449462890625,118.58638763427734C78.27225049336751,99.21465810139973,153.01047261555988,167.93193689982095,225.78533935546875,175.91622924804688C298.5602060953776,183.9005215962728,465.3141225179036,137.04188028971353,487.30364990234375,166.4921417236328C509.2931772867839,195.9424031575521,414.1361134847005,303.01046498616535,357.7225036621094,352.6177978515625C301.30889383951825,402.22513071695965,198.42931938171387,474.2146708170573,148.82199096679688,464.1361389160156C99.21466255187988,454.05760701497394,76.43979008992513,349.73823165893555,60.07853317260742,292.1466064453125C43.71727625528972,234.55498123168945,23.036648432413738,137.95811716715494,50.654449462890625,118.58638763427734" fill="#5b52f7" transform="matrix(1.0000000000000002,-5.551115123125782e-17,5.551115123125782e-17,1.0000000000000002,36.155044555664006,9.875251770019474)"></path></svg>
      </section>
      <div className="flex justify-between pl-20 mt-16 w-full ">
        <div>
          <h2 className="text-4xl font-medium">The web <span className="font-semibold text-indigo-600">technologies</span> I use</h2>
          
          <ul className="flex flex-col gap-2 mt-8 ml-10">
            {
            ["HTML", "CSS", "JavaScript", "Tailwind (I prefer tailwind than bootstrap)", "Bootstrap", "React.js"]
            .map((item, index) => <li className="list-disc text-xl" key={index}>{item}</li>)
            }
          </ul>

          
        </div>
        <div className="relative sm:hidden lg:flex bg-slate-500">
          <span id="html" style={{animationDelay: delay()}} className="moving flex items-center justify-center absolute right-32 top-4  w-20 aspect-square  overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={html} alt="html logo" className="w-12"/></span>
          <span id="css" style={{animationDelay: delay()}} className="moving flex items-center justify-center absolute right-32 top-40  w-20 aspect-square  overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={css} alt="css logo" className="w-12"/></span>
          <span id="tailwind" style={{animationDelay: delay()}} className="moving flex items-center justify-center absolute right-72 top-36 w-20 aspect-square overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={tailwind} alt="tailwind logo" className="w-14"/></span>
          <span id="bootstrap"  style={{animationDelay: delay()}} className="moving flex items-center justify-center absolute right-44 top-72 w-20 aspect-square  overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={bootstrap} alt="bootstrap logo" className="w-14"/></span>
          <span id="javascript" style={{right: "29rem", animationDelay: delay()}} className="moving flex items-center absolute top-56 justify-center w-20 aspect-square overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={js} alt="javascript logo" className="w-12"/></span>
          <span id="react" style={{right: "26rem", animationDelay: delay()}} className="moving flex items-center justify-center absolute top-14 w-20 aspect-square overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={react_} alt="react logo" className="w-14"/></span>
        </div>
      </div>
      <hr className="mt-28 border-2" />
      <h1>asfda</h1>
    </>
  )
}


