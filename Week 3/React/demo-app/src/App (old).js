import './App.css';
// import Welcome from './components/Welcome';
import Hooks from './components/Hooks';

const App = () => {
  // const greeting = 'Hello, React';
  const isUserLoggedIn = true;
  const userList = ['Jorvic', 'Catherine', 'Christian'];

  // () = JSX
  // {} = JS Code
  return (
    /*<div className="container">
      <h1>Welcome to React.js</h1>
      <p>React is a JS library for building UIs.</p>
    </div> */
    /* <div>
      <h1>{greeting}</h1>
      <Welcome name="Kenneth" />
      <Welcome name="Miko" />
    </div> */

    // condition ? true code : else code
    <div>
      {
        // Conditional formatting
        isUserLoggedIn ? <h1>Logged in!</h1> : <h1>Not Logged In!</h1>
      }
      {
        isUserLoggedIn && (
          <ul>
            {
              // mapping
              userList.map((user) => (
                  <li key={user}>{user}</li>
                )
              )
            }
          </ul>
        )
      }
      <Hooks />
    </div>
  );
};
export default App;
