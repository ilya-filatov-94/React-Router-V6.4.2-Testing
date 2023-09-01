//npm i react-router-dom@6.4.2
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './hoc/AuthProvider/AuthProvider';
import router from './router';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}

export default App;
