export default function FeatureCard({ icon, alt, title, description }) {
  return (
    <div className="p-8 flex flex-col items-center bg-[#5271ff] rounded-xl text-center text-white">
        <img src={icon} alt={alt} className="w-16 aspect-square invert"/>
        <h4 className="text-[21px] mt-[12px] mb-4 leading-none uppercase font-bold">{title}</h4>
        <p>{description}</p>
    </div>
  )
}