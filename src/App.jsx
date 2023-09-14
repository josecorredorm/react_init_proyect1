import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header/Header'
import MyCard from './Components/mycard/MyCard'
import imgref1 from './assets/img/perro1.jpg'
import imgref2 from './assets/img/perro2.jpg'
import imgref3 from './assets/img/perro3.jpg'
import imgref4 from './assets/img/perro5.jpg'


const App = () => {
  return (
    <>
      <Header title="Adopta un perrito"/>
      <main className='main'>
      <MyCard 
      title="Mini Pincher" 
      img={imgref1}
      description="Los Mini Pinscher son perros valientes, inteligentes y llenos de energía que pueden ser compañeros leales y cariñosos para quienes estén dispuestos a proporcionarles el ejercicio, la socialización y el entrenamiento adecuados. Son una gran elección para personas activas que pueden brindarles el estímulo físico y mental que necesitan."
      propert="warning"
      texto="Kimi"/>
      <MyCard 
      title="French poodle mini" 
      img={imgref2}
      description="Los Miniature Poodles son perros pequeños, inteligentes y afectuosos que se adaptan bien a una variedad de estilos de vida. Son conocidos por su pelo rizado que no suele mudar y por su capacidad de aprendizaje. Son una elección popular como perros de compañía y como compañeros leales para familias y personas solteras."
      propert="success"
      texto="Firulais"/>
      <MyCard 
      title="Pomeriano" 
      img={imgref3}
      description="Los Pomeranias son perros pequeños, carismáticos y llenos de energía que a menudo actúan como si fueran mucho más grandes de lo que realmente son. Son leales a sus dueños, pero también pueden ser un poco testarudos. Son ideales para personas que pueden ofrecerles ejercicio, cuidado del pelaje y atención, y que aprecian su vivacidad y personalidad alegre."
      propert="danger"
      texto="Copito"/>
      <MyCard 
      title="Chihuahua" 
      img={imgref4}
      description="Los Chihuahuas son perros diminutos con una personalidad audaz y cariñosa. Son ideales para personas que buscan un compañero leal y valiente que pueda adaptarse a la vida en espacios pequeños. Sin embargo, requieren atención y socialización adecuadas para mantener su confianza y comportamiento equilibrados."
      propert="info"
      texto="Cachito"/>
      </main>
      <footer className='footer'>
          <p>Patas solidarias <strong>¡Adopta, no compres!</strong> contacto info@patassolidarias.com</p>
      </footer>
    </>
  )
}
export default App
