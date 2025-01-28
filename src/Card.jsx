export default function Card(props){
    return(
        <div style={{height: "28rem"}} className="relative w-96 p-3 border-2 rounded-lg bg-white">
            {props.special && <span title={props.special} className="absolute flex justify-center items-center top-3 right-3 rounded-full w-7 aspect-square text-xl font-semibold bg-orange-400 text-white">!</span>}
            <img src={props.img} alt={props.alt} className=""/>
            <hr />
            <h3 className="mt-3 text-2xl">{props.name}</h3>
            <ul className="ml-6 mt-2 list-disc">
               {props.info.map((item, index) => <li key={index}>{item}</li>)} 
            </ul>
            <div className="absolute bottom-4 right-4 flex justify-end items-center gap-5">
                <a target={props.linkTry ? "_blank": "_self"} href={props.linkTry} >
                    {props.linkTry ?<button className="text-center px-6 py-2 text-lg rounded-lg bg-indigo-600 text-white font-semibold">try it</button> : <button className="text-center px-6 py-2 text-lg rounded-lg bg-gray-600 text-white font-semibold" onClick={() =>window.alert("This project is not finished yet")}>try it</button>}
                    
                </a>
                <a target="_blank" href={props.linkGit} className="text-lg font-semibold underline">
                    link to github
                </a>
            </div>

            
        </div>
    )
}