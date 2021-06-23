import logo from './logo.svg';
import Card from './components/Card'
import Fases from './assets/fases.png'
import ClassComponent from './assets/classcomponent.png'
import FunctionComponent from './assets/functionComponent.png'
import ComponentWillUnmount from './assets/componentWillUnmount.png'
import ComponentUseEffect from './assets/componentuseeffect.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Ciclos de vida de los componentes
          </h2>
        </section>
        <section>
          <h3>
            Todos los componentes al renderizarse pasan por 3 grandes fases:
          </h3>
          <div className="card-container">
            <Card title="Montado" />
            <Card title="Actualización" />
            <Card title="Desmontado" />
          </div>
          <p>
            A su vez éstas se dividen en varios métodos que puede tener el componente.
            <br/>
            <br/>
            <span>TIP:</span> Cada uno de estos métodos tiene un prefijo <span>will</span> o <span>did</span> dependiendo de si ocurren antes o después de ciertas acciones.
          </p>          
        </section>
        <section>
            <Card title="Montado" />
          <p>
            Es el primero que ocurre y se ejecuta una vez cuando el componente se crea y monta la UI. Esta fase tiene 4 funciones: 
            <br/>
            <br/>
            <ul>
              <li><span>Constructor:</span> Este método se ejecuta cuando se instancia un componente de clase. Nos permite definir el estado inicial del componente y hacer bind de métodos.</li>
              <li><span>ComponentWillMount(Deprecado):</span> Este método se ejecuta cuando el componente se está por renderizar. Se puede modificar el estado del componente sin causar una actualización. Evitar cualquier tipo de efecto secundario como una petición de HTTP por ejemplo, ya que este método se ejecuta en el servidor.</li>
              <li><span>render:</span> En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente. Esta función debe ser pura (no puede tener efectos secundarios) y no debe modificar nunca el estado del componente. </li>
              <li><span>componentDidMount:</span> Es el ultimo en ejecutarse cuando el componente ya se renderizó en el navegador y nos permite interactuar con el DOM, con las APIs del navegador(geolocalización, notificaciones, etc) y para hacer llamadas HTTP. </li>
            </ul>
          </p>          
        </section>
        <section>
            <Card title="Actualización" />
          <p>
            Estos métodos se ejecutan cuando el componente sufre algún tipo de modificación. Y las funciones son:
            <br/>
            <br/>
            <ul>
              <li><span>componentWillReceiveProps(nextProps):</span> Este método se ejecuta inmediatamente después que el componente reciba nuevas props. En este punto es posible actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.</li>
              <li><span>shouldComponentUpdate(nextProps, nextState):</span> Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState).Si nosotros creemos que es innecesario actualizar el componente podemos hacer que este método retorne false, eso evita que se ejecute el método render.</li>
              <li><span>componentWillUpdate(nextProps, nextState)(Deprecado):</span> Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice la UI. Nota: no puede ejecutarse un this.setState para actualizar el estado dentro de este método,Si queremos actualizar el estado con base a un cambio de propiedades debemos hacerlo en componentWillReceiveProps. </li>
              <li><span>render():</span> Al igual que en el montado acá se va a generar la UI, esta vez con los datos que hayan cambiado. Como antes este método debe ser puro. </li>
              <li><span>componentDidUpdate(prevProps, prevState):</span> Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente. Al igual que con componentDidMount() acá es posible interactuar con el DOM y cualquier API de los navegadores.</li>
              <li><span>componentDidCatch:</span> Se ejecuta cuando ocurre algún error dentro de un componente hijo.</li>
            </ul>
          </p>          
        </section>
        <section>
            <Card title="Desmontado" />
          <p>
            Esta última fase consiste en un solo método que se ejecuta antes de que un componente se elimine (desmonte) <br/> de la UI de nuestra aplicación.
            <br/>
            <br/>
            <ul>
              <li><span>componentWillUnmount:</span> Este único método de la fase de desmontado nos permite realizar cualquier tipo de limpieza antes de remover el componente.
              Acá es posible dejar de escuchar eventos de window, document o el DOM, desuscribirse de un WebSocket o Store o cancelar peticiones HTTP que hayan quedado pendientes.</li>
            </ul>
          </p>          
        </section>
        <section>
          <p>Métodos de los ciclos de vida</p>
            <img src={Fases} alt="fases" height="500"/>          
        </section>
        <section>
        <h2>
            Ciclos de vida de los function components
          </h2>
          <p>Los componentes clase ya estan dejando de ser buena práctica, por eso la vanguardia es utilizar ArrowFunctions o FuncionalComponents. <br/><br/> Pasar de esto</p>
          <img src={ClassComponent} alt="class-component" width="800" />          
          <p>A esto</p>
          <img src={FunctionComponent} alt="functional-component" width="800" />          
        </section>
        <section>
          <p>Ejemplo de componentWillUnmount</p>
          <img src={ComponentWillUnmount} alt="unmount-component" width="800" />
          <p>Ejemplo de componentWillUnmount con useEffect</p>
          <img src={ComponentUseEffect} alt="useeffect-component" width="800" />
        </section>
      </header>
    </div>
  );
}

export default App;
