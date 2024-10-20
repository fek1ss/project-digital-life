export default function WaytoTeach({title, description}){
  return (
    <li>
      <strong>{title}</strong> 
      <p className="p-description">{description}</p>
    </li>
  )
}