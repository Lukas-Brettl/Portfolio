import mathAppImg from "./assets/images/mathApp-img.png"
import searchCountryImg from "./assets/images/searchCountry-img.png"
import calculatorImg from "./assets/images/calculator-img.png"
import weatherAppImg from "./assets/images/weatherApp-img.png"
import Card from "./Card.jsx"

export default function Projects() {
    const cardData = {
      "Math app":{
          "name":"Math app",
          "special": "in the process",
          "img": mathAppImg,
          "info":["E-learning platform", "The app will teach a math topic", "One of my bigest projects"],
          "try": "",
          "git": "https://github.com/Lukas-Brettl/MathApp"
      },
      "Search Country":{
        "name": "Search Country",
        "img": searchCountryImg,
        "info":["Find information about the country", "use fetch api and restcountries api", "medium project"],
        "try": "",
        "git": "https://github.com/Lukas-Brettl/researchCountry"
      },
      "Calculator":{
        "name": "Modern Calculator",
        "img": calculatorImg,
        "info":["Can do simple operation (+, -, *, /, %)", "It took a few minutes", "easy project"],
        "try": "",
        "git": "https://github.com/Lukas-Brettl/researchCountry"
      },
      "Weather App":{
        "name": "Weather App",
        "img": weatherAppImg,
        "info":["Search place and get actual weather", "use fetch api", "Its one of my old project"],
        "try": "",
        "git": "https://github.com/Lukas-Brettl/researchCountry"
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
      <fieldset className="flex mt-24 border-2 border-t-black border-r-transparent border-l-transparent border-b-transparent">
        <legend className="ml-24 text-2xl">Projects</legend>
        <div className="flex flex-wrap w-full items-center justify-around p-10">
          {Object.entries(cardData).map(([key, item]) => {
            console.log(item)
            return (<Card key={key} special={item.special} img={item.img} name={item.name} info={item.info} linkTry={item.try} linkGit={item.git} />)})}
        </div>
      </fieldset>
    </>
  );
}
