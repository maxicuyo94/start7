import React from "react";
import "./App.css";
import { Login } from "./Login";
// import bootstrap from "bootstrap";

// login form

function App() {
  return (
    <div className='  p-0 container-fluid'>
      <Login />
    </div>
  );
}
export default App;

// const [count, setCount] = useState(0);
//
//   return (
//     <div className='container-fluid login-container vh-100'>
//       <div className='login-form-container'>
//         {/* rectangle div */}
//         <div className='rectangle-div'> </div>

//         <hi>Bem-vindo de volta!</hi>
//         <p>
//           {" "}
//           Estamos felizes que esteja de volta para retomar seus projetos no
//           Projetolist.
//         </p>

//         <form>
//           <div className='form-group'>
//             <input
//               type='email'
//               className='form-control'
//               id='exampleInputEmail1'
//               aria-describedby='emailHelp'
//               placeholder='E-mail'
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='exampleInputPassword1'
//               placeholder='Senha'
//             />
//           </div>
//           <div className='pb-4 text-end'>
//             <a href='/' className='text-left'>
//               Esqueceu sua senha?
//             </a>
//           </div>
//           <div className='d-grid'>
//             <button type='submit' className='btn btn-1 rounded-pill   '>
//               Entrar
//             </button>
//           </div>
//           <p>OU ENTRE COM</p>
//           {/*boton de faceboo y google */}
//           <div className='d-grid'>
//             <button type='submit' className='btn btn-2 rounded-pill   '>
//               <i className='fab fa-facebook-f'></i>
//             </button>
//             <button type='submit' className='btn btn-2 rounded-pill   '>
//               <i className='fab fa-google'></i>
//             </button>
//           </div>
//           <p>Ainda não tem uma conta? Cadastre-se</p>
//         </form>
//       </div>
//       <div className='rectangle-right'></div>
//     </div>
//   );
// }
