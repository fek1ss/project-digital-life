import './IconLabelLink.css';
import { Link, useLocation } from 'react-router-dom';

export default function IconLabelLink({label, icon, to}){
  const location = useLocation(); // Хук для получения текущего пути
  
  // Определяем, активен ли элемент, сравнивая `to` с текущим путем
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`sidebar-link ${isActive ? "active" : ""}`}>
      <div className="icon">{icon}</div>
      <span>{label}</span>
    </Link>
  )
}