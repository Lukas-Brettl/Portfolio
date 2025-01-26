
import Card from "./Card.jsx"

export default function Projects() {
    const cardData = {
        "Math app":{
            "name":"Math app",
            "special": "in the process",
            "img": "",
            "info":["e-learning platform", "The app will teach a math topic", "One of my bigest projects"],
            "try": "",
            "git": "https://github.com/Lukas-Brettl/MathApp"
        }
    }
  return (
    <>
      <div className="flex flex-col items-center w-full mt-20">
        <h1 className="text-6xl font-semibold">This is my</h1>
        <h1 className="text-6xl font-semibold text-indigo-600">projects</h1>
        <p className="w-2/5 mt-10 text-center">
          But here's not all the projects I've ever done, because I'm not proud
          of my old code and design, but that horrible old code has pushed me
          further, and here are some of the better projects I don't have to be
          ashamed of (I hope).
        </p>
      </div>
      <fieldset className="mt-24 border-2 border-t-black border-r-transparent border-l-transparent border-b-transparent">
        <legend className="ml-24 text-2xl">Projects</legend>
        {Object.entries(cardData).map(([key, item]) => {
            console.log(item)
            return (<Card key={key} special={item.special} img={item.img} name={item.name} info={item.info} linkTry={item.try} linkGit={item.git} />)})}
      </fieldset>
    </>
  );
}
