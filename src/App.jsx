import html from "./assets/images/html-1.svg"
import css from "./assets/images/css.svg"
import js from "./assets/images/logo-javascript.svg"
import tailwind from "./assets/images/tailwind-css-2.svg"
import bootstrap from "./assets/images/bootstrap-4.svg"
import react_ from "./assets/images/react-2.svg"

export default function App() {

  return (
    <>
      <section className="flex items-center justify-between">
        <div style={{width: "28rem"}} className="flex ml-24 flex-col gap-3">
          <h1 className="text-5xl font-semibold">I am Lukáš Brettl</h1>
          <h2 className="text-5xl font-semibold" >Front-end developer</h2>
          <p className="pr-10 mt-2 text-lg">I'm a student in high school who enjoys building websites and focuses mainly on the front-end. I know my apps aren't the best, but I try to get better every day and learn from my mistakes.</p>
          <div className="flex items-center mt-6 gap-10">
            <button className="text-center w-36 p-3 text-xl rounded-lg bg-indigo-600 text-white font-semibold ">my apps</button>
            <a href="#" className="text-xl font-bold underline ">technologies I use</a>
          </div>
        </div>
        
        <svg style={{width:"40rem"}} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M60.07853317260742,292.1466064453125C43.71727625528972,234.55498123168945,23.036648432413738,137.95811716715494,50.654449462890625,118.58638763427734C78.27225049336751,99.21465810139973,153.01047261555988,167.93193689982095,225.78533935546875,175.91622924804688C298.5602060953776,183.9005215962728,465.3141225179036,137.04188028971353,487.30364990234375,166.4921417236328C509.2931772867839,195.9424031575521,414.1361134847005,303.01046498616535,357.7225036621094,352.6177978515625C301.30889383951825,402.22513071695965,198.42931938171387,474.2146708170573,148.82199096679688,464.1361389160156C99.21466255187988,454.05760701497394,76.43979008992513,349.73823165893555,60.07853317260742,292.1466064453125C43.71727625528972,234.55498123168945,23.036648432413738,137.95811716715494,50.654449462890625,118.58638763427734" fill="#5b52f7" transform="matrix(1.0000000000000002,-5.551115123125782e-17,5.551115123125782e-17,1.0000000000000002,36.155044555664006,9.875251770019474)"></path></svg>
      </section>
      <div className="ml-20">
        <div>
          <h2>The technologies I use</h2>
          <h4>HTML, CSS, JavaScript, Tailwind, Bootstrap, React</h4>
        </div>
        <div>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={html} alt="html logo" className="w-12"/></span>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={css} alt="css logo" className="w-12"/></span>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={js} alt="javascript logo" className="w-12"/></span>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={tailwind} alt="tailwind logo" className="w-12"/></span>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={bootstrap} alt="bootstrap logo" className="w-12"/></span>
          <span className="flex w-20 aspect-square items-center justify-center overflow-hidden border-2 border-slate-500 rounded-full shadow-lg"><img src={react_} alt="react logo" className="w-12"/></span>
        </div>
      </div>
    </>
  )
}


