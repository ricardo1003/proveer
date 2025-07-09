export default function Service({index, image, alt, title, description, list }) {

  return (
    <div className={`${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex justify-between gap-10`}>
        <figure className="w-[50%] h-[408px] overflow-hidden flex items-center justify-center rounded-[29px]">
            <img src={image} alt={alt} className="rounded-[29px] w-full z-[2]"/>
            <div className={`absolute ${index % 2 === 0 ? "-left-5" : "-right-5"} z-[1] bg-radial from-black/75 to-black/0 to-70% h-[60%] aspect-square`}></div>
        </figure>
        <div className="w-[50%] text-[20px] flex flex-col gap-[18px] justify-start Inter">
            <h2 className="text-[55px] Raleway font-bold">{title}</h2>
            <p className="">{description}</p>
            <ul className="list-disc pl-5">
                {Object.entries(list).map(([key, value], i) => ( <li> <p>{key.indexOf("None") === -1 ? <b>{key}: </b> : "" } {value}</p> </li>))}
            </ul>
        </div>
    </div>
  )
}