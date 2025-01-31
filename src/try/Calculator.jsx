import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Calculator(){
  const [example, setExample] = useState("")

  function getResult(){
    try {

      if (/^[0-9+\-*/().\s]+$/.test(example)) { //testing input
        const result = new Function(`return ${example}`)() //calculating result (someting like eval but more safe :D)
        setExample(result.toString())
      } else {
        throw new Error("Neplatný vstup")
      }
     
    } catch{
      setExample("Error chybný zápis")
    }
    
  }

  
  return(
    <>
      <Link to="/" className="absolute top-3 left-3 text-xl bg-white p-2 rounded-md">← Back to home page</Link>
      <div className="w-full h-full flex justify-center items-center ">
        <div style={{background: "#060D0D", width: "300px"}} className=" text-center p-6 py-9 rounded-lg shadow-lg">
        
          <input type="text" onFocus={() => example == "Error chybný zápis"? setExample("") :null} value={example} onChange={e => setExample(e.target.value)} style={{background: "#282929"}} placeholder="Zadejte příklad: " className="text-white text-lg rounded m-2 pl-2 min-w-52 min-h-12"/>
          <div>
            <div>
              <button onClick={() => setExample("")} className="bg-slate-400 font-bold rounded-full m-2 min-w-10 aspect-square">AC</button>
              <button onClick={() => setExample(example && -example)} className="bg-slate-400 font-bold rounded-full m-2 min-w-10 aspect-square">+/-</button>
              <button onClick={() => setExample(example && example * 0.01)} className="bg-slate-400 font-bold rounded-full m-2 min-w-10 aspect-square">%</button>
              <button onClick={() => setExample(example && example + "/")} className="bg-orange-500 font-bold text-white rounded-full m-2 min-w-10 aspect-square">/</button>
            </div>

            <div>
              <button onClick={() => setExample(example ? example + "7": "7")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">7</button>
              <button onClick={() => setExample(example ? example + "8": "8")}  className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">8</button>
              <button onClick={() => setExample(example ? example + "9": "9")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">9</button>
              <button onClick={() => setExample(example && example + "*")} className="bg-orange-500 font-bold text-white rounded-full m-2 min-w-10 aspect-square">*</button>
            </div>
            
            <div>
              <button onClick={() => setExample(example ? example + "4": "4")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">4</button>
              <button onClick={() => setExample(example ? example + "5": "5")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">5</button>
              <button onClick={() => setExample(example ? example + "6": "6")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">6</button>
              <button onClick={() => setExample(example && example + "-")} className="bg-orange-500 font-bold text-white rounded-full m-2 min-w-10 aspect-square">-</button>
            </div>
            
            <div>
              <button onClick={() => setExample(example ? example + "1": "1")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">1</button>
              <button onClick={() => setExample(example ? example + "2": "2")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">2</button>
              <button onClick={() => setExample(example ? example + "3": "3")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">3</button>
              <button onClick={() => setExample(example && example + "+")} className="bg-orange-500 font-bold text-white rounded-full m-2 min-w-10 aspect-square">+</button>
            </div>
            
            <div>
              <button onClick={() => setExample(example ? example + "0": "0")} className="bg-slate-300 font-bold text-left pl-5 rounded-full m-2 min-w-24 min-h-10 ">0</button>
              <button onClick={() => setExample(example && example + ".")} className="bg-slate-300 font-bold rounded-full m-2 min-w-10 aspect-square">.</button>
              <button onClick={ () => getResult()} className="bg-orange-500 font-bold text-white rounded-full m-2 min-w-10 aspect-square">=</button>

            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
