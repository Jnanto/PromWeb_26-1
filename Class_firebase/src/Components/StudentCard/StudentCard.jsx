import React from 'react'
import './StudentCard.css';
import { Pencil, Mail, Phone } from 'lucide-react';

const StudentCard = ({ item }) => {
    // Generamos un correo ficticio basado en el nombre y un teléfono para que coincida con el diseño
    const email = `${item.Nombre?.split(' ')[0]?.toLowerCase() || 'estudiante'}@edu.logic.co`;
    const phone = "+1 (555) 092-4821";

    return (
        <div className='cardStudent'>
            <div className="card-top">
                <div className="profile-wrapper">
                    <img src={item.img || `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.Nombre}`} alt={item.Nombre} className="profile-img" />
                    <div className={`status-dot ${item.Sexo ? 'male' : 'female'}`}></div>
                </div>
                <div className="main-info">
                    <h3>{item.Nombre}</h3>
                    <p className="student-age">{item.Edad} años • {item.Sexo ? "Masculino" : "Femenino"}</p>
                </div>
                <div className="grade-badge">
                    <span className="grade-label">PROMEDIO</span>
                    <span className="grade-value">{item.Promedio}</span>
                </div>
            </div>

            <div className="card-divider"></div>

            <div className="card-bottom">
                <div className="info-row">
                    <Mail size={16} className="info-icon" />
                    <span>{email}</span>
                </div>
                <div className="info-row">
                    <Phone size={16} className="info-icon" />
                    <span>{phone}</span>
                </div>
            </div>
            
            <button className="action-btn">
                <Pencil size={16} />
                <span>Editar Perfil</span>
            </button>
        </div>
    )
}
export default StudentCard;
