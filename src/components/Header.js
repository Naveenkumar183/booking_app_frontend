import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed} from "@fortawesome/free-solid-svg-icons"
import {faPlane} from "@fortawesome/free-solid-svg-icons"
import {faCar} from "@fortawesome/free-solid-svg-icons"
import {faTaxi} from "@fortawesome/free-solid-svg-icons"
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {faPerson} from "@fortawesome/free-solid-svg-icons"
import './Header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";


function Header({type}) {
const[destination,setDestination]=useState();
  const[openDate,setOpenDate]=useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const[openBox,setOpenBox]=useState(false);
  const[boxItem,setBoxItem]=useState({
adult:1,
children:0,
room:1,
  }

  )

  const Navigate=useNavigate()

  const handle=(name,operation)=>{
    setBoxItem(prev=>{
      return{
        ...prev,[name]:operation==="i"?boxItem[name]+1:boxItem[name]-1
      }
    })
  }

  const HandleSearch=()=>{
    Navigate('./hotels',{state:{destination,state,boxItem}})
  }

const nav1=()=>{
  setOpenBox(!openBox)
}


  const nav=()=>{
    setOpenDate(!openDate);
  }
  return (
    <div className="header">
        <div className={type=="list"? "headercontainer hotels": "headercontainer"}>
        <div className="headerlist">
        <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport taxis</span>
            </div>
        </div>
{ type!=="list" &&<> 
        <h1 className="headertiltle">
        A lifetime of discount? It's Genius.
        </h1>
        <p className="headerdis">
            Get rewarded for your travel-unlock instnat saving of 10% or more with a free navbooking account
        </p>

        <button className="headerbtn">Sign in / Register</button>

        <div className="headerSearch">
            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faBed} />
            <input type="text" onChange={(e)=>setDestination(e.target.value)}placeholder="where are you going?" className="nav"/>
            </div>

            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faCalendarDays} />
          <span className="nav1" onClick={nav}>{`${
            format(state[0].startDate,"MM/dd/yyyy")
          } to ${
            format(state[0].endDate,"MM/dd/yyyy")} `}</span>
            {/* for date */}
          {openDate &&<DateRange className="date"
                editableDateInputs={true}
               onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                  ranges={state}
                  minDate={new Date()}
       />}

            </div>

            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faPerson} />
            <span className="nav2"  onClick={nav1}>{`${boxItem.adult} adult . ${boxItem.children} children . ${boxItem.room} room`}</span>

          {openBox &&  <div className="options">
              <div className="optionitem">
                <span className="option">adult</span>
                <div className="divoption">
                <button 
                 disabled={boxItem.adult<=1}className="optioncountm" onClick={()=>handle("adult","d")}>-</button>
 <span className="optionperson">{boxItem.adult}</span>
                <button 
                className="optioncountm" onClick={()=>handle("adult","i")}>+</button>
                </div>
               
              </div>

              <div className="optionitem">
                <span className="option">children</span>
                <div className="divoption">
                <button 
                disabled={boxItem.children<=0}className="optioncountm" onClick={()=>handle("children","d")}>-</button>
 <span className="optionperson">{boxItem.children}</span>
                <button 
                 className="optioncountm" onClick={()=>handle("children","i")} >+</button>
                </div>
              </div>

              <div className="optionitem">
                <span className="option">room</span>
                <div className="divoption">
                <button
               
               disabled={boxItem.room<=1}
                className="optioncountm" onClick={()=>handle("room","d")}>-</button>
 <span className="optionperson">{boxItem.room}</span>
                <button className="optioncountm"onClick={()=>handle("room","i")}>+</button>
                </div>
              </div>

            </div>
}
            </div>
          
            <div className="headerSearchitem">
           <button className="headerbtn1" onClick={HandleSearch }>Search</button> 
           </div>
        </div>
</>}
        </div>
        
            
    </div>
  )
}

export default Header