export default function FeatureCard({ index, icon, alt, title, description }) {
  
  let colors = ["from-[#8c52ff]", "from-[#ffde59]", "from-[#7ed957]"]

  return (
    <div className="relative flex items-center justify-center">
      <div className="h-full p-8 flex flex-col items-center bg-[#5271ff] rounded-xl text-center text-white relative z-[2]">
        <img src={icon} alt={alt} className="w-16 aspect-square invert"/>
        <h4 className="text-[21px] mt-[12px] mb-4 leading-none uppercase font-bold">{title}</h4>
        <p>{description}</p>
      </div>
      <div className={`absolute z-1 size-[134.3023256%] bg-radial ${colors[index]} to-black/0 to-70%`}/>
    </div>
  )
}