import './Boton.css';

const Boton = ({ text = 'Haz Click', onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      <span className="button-content">{text}</span>
      <div className="button-glitter"></div>
    </button>
  );
};

export default Boton;