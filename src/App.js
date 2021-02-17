import './App.css';
import listSvg from './assets/img/list.svg';

function App() {
  return (
    <div className="toDo">
      <div className="toDo__sidebar">
        <ul className="toDo__list">
          <li>
            <i>
              <img src={listSvg} alt='List icon'/>
            </i>
            <span>Все задачи</span>
          </li>
        </ul>
      </div>
      <div className="toDo__tasks"></div>
    </div>
  );
}

export default App;
