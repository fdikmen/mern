import logo from './logo.svg';
import './App.css';
import Blog from './Blog';

function App() {

  let name="Tommy";


  let blogInfos=[{textHead:"Blog 1",textDesc:"Blog 1 Title"}];

  const appClick=(text)=>
  {
    console.log("Shown from App Component.",text);
    blogInfos.push({textHead:"Blog 2",textDesc:"Blog 2 Title"});
  }

  return (
    <div>
     Hello!!!
     <Blog appClick={appClick} blogInfos={blogInfos}></Blog>
    </div>
  );
}

export default App;
