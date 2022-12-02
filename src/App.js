/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"
import './App.css';
function App(){
  return(
  <div>
      <p>This about react js</p>
      <h1>Hello Good Morning</h1>
      <ClassComponent/>
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/108383635/original/626f1fda69305efcb5076c8af2be5393c53ecda4/develop-and-fix-reactjs-web-application.png" alt=""/>
      <ClassComponent2/>
  </div>
    )
    } 
  export default App;
  */
import PropsExample from './PropsExample'
import FuncPropExample from './FuncPropExample'
import StateExample from './StateExample';
import Events from "./Events"
 function App() {
  return (
    <div>
   <h1>This is about props</h1>
      <PropsExample name="teja" age="20" Rollno="32"/>
      <PropsExample name="savithri" age="20" Rollno="12"/>
      <PropsExample name="vasavi" age="20" Rollno="74"/>
      <FuncPropExample framework="react" number="1"/>
  <StateExample/>
  <Events/>
    </div>
  )
}
export default App;
