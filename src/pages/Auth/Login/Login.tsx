import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/profile'); // Redirige a la ruta principal de tu aplicación
  };

  return (
    <h1>Soy el login</h1>
  );
};

{/* <button
      className="bg-slate-800 p-3 text-white rounded-lg 
      hover:bg-slate-900 transition-all duration-200 ease"
      onClick={handleLogin}
    >
      Go to Application
    </button> */}