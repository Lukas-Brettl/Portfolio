export default function Card(props){
    return(
        <div className="relative w-96 ">
            {props.special && <span title={props.special} className="absolute top-3 right-3 bg-orange-400 rounder-full w-7 text-white">!</span>}
            <img src={props.img} alt={props.alt} />
            <h3>{props.name}</h3>
            <ul className="list-disc">
               {props.info.map((item, index) => <li key={index}>{item}</li>)} 
            </ul>
            <a target="_blank" href={props.linkTry}>
                <button>try it</button>
            </a>
            <a href={props.linkGit}>
                <button>link to github</button>
            </a>
            
        </div>
    )
}