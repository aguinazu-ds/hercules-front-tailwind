import React, { useState } from 'react'
import AuthService from '../api/services/Auth';
import LoginImage from '../assets/man-593333.jpg'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rutEmpresa, setRutEmpresa] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState({});

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const response = await AuthService.login(rutEmpresa, username, password);
    }

    const handleValidation = () => {
        let fields = { rutEmpresa, username, password };
        let errors = {};
        let formIsValid = true;

        //RutEmpresa
        if (!fields["rutEmpresa"]) {
            formIsValid = false;
            errors["rutEmpresa"] = "No puede estar vacío";
        }

        if (typeof fields["rutEmpresa"] !== "undefined") {
            if (!fields["rutEmpresa"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["rutEmpresa"] = "Solo números";
            }
        }

        //Username
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "No puede estar vacío";
        }

        

        if (typeof fields["username"] !== "undefined") {
            let lastAtPos = fields["username"].lastIndexOf("@");
            let lastDotPos = fields["username"].lastIndexOf(".");
      
            if (
              !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                fields["username"].indexOf("@@") == -1 &&
                lastDotPos > 2 &&
                fields["username"].length - lastDotPos > 2
              )
            ) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
          }
      
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={LoginImage} alt="" />
        </div>

        <div className='sm:bg-bluegray-200 bg-black/40 flex flex-col justify-center sm:px-3'>
            <img className='absolute sm:hidden w-full h-full object-cover mix-blend-overlay' src={LoginImage} alt="" />

            <form action="" className='relative max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg'>
                <h2 className='text-4xl font-bold text-center py-6 '>Hercules</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="email">Rut Empresa/Holding</label>
                    <input className={`border p-2 ${errorMessage.rutEmpresaError ? "border-red-500" : ""}`} type="text" name="rutEmpresa" id="rutEmpresa" placeholder='XXXXXXXX-X (sin puntos)' value={rutEmpresa} onChange={(e) => setRutEmpresa(e.target.value)} />
                    <p class="text-red-500 text-xs italic">{errorMessage.rutEmpresaError}</p>
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="email">Email</label>
                    <input className={`border p-2 ${errorMessage.emailError ? "border-red-500" : ""}`} placeholder='ejemplo@email.com' type="username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <p class="text-red-500 text-xs italic">{errorMessage.emailError}</p>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="password">Contraseña</label>
                    <input className={`border p-2 ${errorMessage.passwordError ? "border-red-500" : ""}`} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p class="text-red-500 text-xs italic">{errorMessage.passwordError}</p>
                </div>

                <button className='border relative w-full my-5 py-2 bg-blue-ribbon-700 hover:bg-blue-ribbon-600 text-white font-semibold'
                 type="button"
                    onClick={handleLogin}
                 >
                    Iniciar Sesión
                </button>
                <div className='flex justify-end'>
                    <a href="#">Recuperar Contraseña</a>
                </div>
            </form>
        </div>
        {loading && 
            <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div class="border-t-blue-ribbon-500 animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 class="text-center text-white text-xl font-semibold">Cargando...</h2>
                <p class="w-1/3 text-center text-white">Esto puede tardar unos segundos, porfavor no cierres esta página.</p>
            </div>
        }

    </div>
  )
}

export default Login