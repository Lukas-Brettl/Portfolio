export default function TechCard(props){
    return(
        <div className="flex flex-col justify-center items-center w-48 h-48 gap-4 border-2 rounded-lg bg-white">
            <img src={props.img} alt={props.name + " logo"} className="w-24"/>
            <h3 className="text-2xl">{props.name}</h3>
        </div>
    )
}