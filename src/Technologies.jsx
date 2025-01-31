import TechCard from "./TechCard.jsx"
import html from "./assets/techImages/html.svg"
import css from "./assets/techImages/css.svg"
import js from "./assets/techImages/javascript.svg"
import tailwind from "./assets/techImages/tailwind.svg"
import bootstrap from "./assets/techImages/bootstrap.svg"
import react from "./assets/techImages/react.svg"
import git from "./assets/techImages/git.svg"
import figma from "./assets/techImages/figma.svg"
import php from "./assets/techImages/php.svg"
import ts from "./assets/techImages/typescript.svg"
import jquery from "./assets/techImages/jquery.svg"
import kotlin from "./assets/techImages/kotlin.svg"
import python from "./assets/techImages/python.svg"
import sass from "./assets/techImages/sass.svg"
import vite from "./assets/techImages/vite.svg"
import { Link } from 'react-router-dom';

export default function Technologies(){
    const technologiesActive = {
        "HTML": html,
        "CSS": css,
        "JavaScript": js,
        "Tailwind": tailwind,
        "React": react,
        "Git": git,
        "Figma": figma,
        "Vite": vite,
        "Python": python,
        
    }

    const technologiesSchool = {
        "PHP": php,
        "jQuery": jquery,
    }

    const technologiesTeory = {
        "Bootstrap": bootstrap,
        "SASS": sass,
        "TypeScript": ts,
        "Kotlin": kotlin
    }
   
    return(
        <>
            <Link to="/" className="absolute top-3 left-3 text-xl bg-white p-2 rounded-md">← Back to home page</Link>
            <div className="flex flex-col items-center w-full mt-20">
                
                <h1 className="w-1/2 text-center text-5xl font-semibold">These are all <span className="text-indigo-600">technologies</span> <br/> I use or have used </h1>
                    
                <p className="w-2/5 mt-10 text-center">And also there are some technologies that I use but only for school, some technologies that I only learned in theory when I was bored, or technologies that I used but now I don't use them.</p>
           
            </div>
            <fieldset className="flex flex-col mt-24 border-2 border-black border-r-transparent border-l-transparent border-b-transparent">
                <legend className="ml-24 text-2xl">Actve use</legend>
                
                <div className="flex justify-center mt-10 mb-10 gap-20 flex-wrap">
                    {Object.entries(technologiesActive).map(([key, value]) => <TechCard key={key} name={key} img={value}/>)}
                </div>
            </fieldset>

            <fieldset className="flex flex-col border-2 border-black border-r-transparent border-l-transparent border-b-transparent ">
                <legend className="ml-24 text-2xl">Only for school</legend>
                
                <div className="flex justify-center mt-10 mb-10 gap-20 flex-wrap">
                    {Object.entries(technologiesSchool).map(([key, value]) => <TechCard key={key} name={key} img={value}/>)}
                </div>
            </fieldset>

            <fieldset className="flex flex-col border-2 border-black border-r-transparent border-l-transparent border-b-transparent ">
                <legend className="ml-24 text-2xl">Knows some theory</legend>
                
                <div className="flex justify-center mt-10 mb-10 gap-20 flex-wrap">
                    {Object.entries(technologiesTeory).map(([key, value]) => <TechCard key={key} name={key} img={value}/>)}
                </div>
            </fieldset>            
            
        </>

    )
}