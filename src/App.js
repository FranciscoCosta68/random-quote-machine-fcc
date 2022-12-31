import QuoteBox from './QuoteBox'
import Credits from './Credits'
import { initializeApp } from "firebase/app";

// Build App consisting of Quote box and Credits
function App() {
  return (
    <div id='app'>
        <QuoteBox />
        <Credits />
      
    </div>
  );
}

const firebaseApp = initializeApp( {
  apiKey: "AIzaSyA5R4R0V-rmJiniOtDtmiGA0d3e703irkk",
  authDomain: "random-quote-machine-c9368.firebaseapp.com",
  projectId: "random-quote-machine-c9368",
  storageBucket: "random-quote-machine-c9368.appspot.com",
  messagingSenderId: "692877555241",
  appId: "1:692877555241:web:1ed6cf30c50d91c1688e38"
});


export default App;
