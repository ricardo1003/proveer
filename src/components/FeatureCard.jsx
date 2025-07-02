export default function FeatureCard({ icon, alt, title, description }) {
  return (
    <div className="p-8 flex flex-col items-center bg-[#DFDFDF] rounded-xl text-center">
        <img src={icon} alt={alt} className="w-16 aspect-square"/>
        <h4 className="text-xl mt-2 mb-4">{title}</h4>
        <p>{description}</p>
    </div>
  )
}