import React, {Component, useRef} from 'react'
import './App.css';
// import styled from 'styled-components';
// import BootstrapTest from './BootstrapTest';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';

// const EmpItem = styled.div ` 
//   padding: 20px;
//   margin-bottom: 15px;
//   border-radius: 5px;
//   box-shadow: 5px 5px 10px rgba(0,0,0, .2);
//   a { 
//     display: block;
//     margin: 10px 0 10px 0;
//     color: ${props => props.active ? 'orange' : 'black'};
//   }
//   input {
//     display: block;
//     margin-top: 10px;
//   }
// `;

// const Header = styled.h2 `
//   font-size: 22px;
// `;

// export const Button = styled.button `
//   display: block;
//   padding: 5px 15px;
//   background-color: gold;
//   border: 1px solid rgba(0,0,0, .2);
//   box-shadow: 5px 5px 10px rgba(0,0,0, .2);
// `;

// class WhoAmI extends Component { 
//   constructor(props) { 
//     super(props)
//     this.state = { 
//       years: 27,
//       position: ''
//     }
//     // this.nextYear = this.nextYear.bind(this)

//   }

//   nextYear(){
//     this.setState({
//       years: this.state.years + 1
//     })
//   }

//   commitInputChanges = (e, color) => {
//     console.log(color)
//     this.setState({
//       position: e.target.value
//     })
//   }
  
//   render() { 
//     const {name, surname, link} = this.props
//     const {position, years} = this.state 

//     return ( 
//       <EmpItem active>
//         <Button onClick={ () => this.nextYear()}>+++</Button>
//         <Header>My name is {name}, surname - {surname}, age - {years}, position - {position}</Header>
//         <a href = {link}>My profile</a>
//         <form>
//           <span>Введите должность</span>
//           <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//         </form>
//       </EmpItem>
//     )
//   }
// }

// const Wrapper = styled.div`
//   width: 600px;
//   margin: 80px auto 0 auto;
// `;

// const DynamicGreating = (props) => {
//   return ( 
//     <div className={'mb-3 p-3 border border-' + props.color}>
//         {/* {props.children} */}
//         {
//           React.Children.map(props.children, child => {
//               return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
//           })
//         }
//     </div>
//   )
// }

// const HelloGreatings = () => {
//   return (
//   <div style={{'width': '600px', 'margin': '0 auto'}}>
//           <DynamicGreating color={'primary'}>
//             <h2>This wwesferwfeel was</h2>
//           </DynamicGreating>
//   </div>
//   )
// }

// const Message = (props) => {
//   return ( 
//     <h2>The counter is {props.counter}</h2>
//   )
// }

// class Counter extends Component { 
//     state = { 
//       counter: 0
//     }

//     changeCounter = () => {
//       this.setState(({counter}) => ({
//         counter: counter + 1
//       }))
//     }

//     render() {
//       return ( 
//         <>
//         <button
//           className={'btn btn-primary'}
//           onClick={this.changeCounter}>
//             Click me
//         </button>
//         {this.props.render(this.state.counter)}
//         </>
//       )
//     }
// }

// function App() {
//   return (
//     <Wrapper>
//       <Counter render={counter => (
//         <Message counter={counter}/>
//       )}/>
//       <HelloGreatings/>
//       <BootstrapTest
//         left = {
//           <DynamicGreating color={'primary'}>
//             <h2>This weel was</h2>
//             <h2>Hello world!</h2>
//           </DynamicGreating>
//         }
//         right = {
//           <DynamicGreating color={'primary'}>
//           <h2>RIGHT</h2>
//           </DynamicGreating>
//         }
//       />
      
//       <WhoAmI name='John' surname="Smith" link="google.com"/>
//       <WhoAmI name='Alex' surname="Turanov" link="mail.ru"/>
//     </Wrapper>
//   );
// }


// class Form extends Component {
  // state = {
  //   advOpen: false,
  // }

  // componentDidMount() {
  //   setTimeout(this.handleClick, 3000)
  // }
  
  // handleClick = () => {
  //   this.setState(({advOpen}) =>({
  //     advOpen: !advOpen
  //   }))
  // }
  //  myRef = React.createRef()
  //  mySecondRef = React.createRef()
  // componentDidMount() {
  //   this.myRef.current.focus()
  // }

  // setInputRef = (elem) => {
  //   this.myRef = elem 
  // }
  
  // focusFirstTI = () => {
  //   if(this.myRef) {
  //     this.myRef.focus()
  //   }
  // }

//   render() {
//     return(
//     <Container>
//       <form onClick={this.handleClick} style={{'overflow': 'hidden', 'position': 'relative'}} className='w-50 border mt-5 p-3 m-auto'>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className='form-label'>Email address</label>
//           <input  type="email" className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className='form-label'>Example textarea</label>
//           <textarea className='form-control' id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//         {
//           this.state.advOpen ? 
//           <Portal>
//             <Msg/>
//           </Portal> : null
//         }
        
//       </form>
//     </Container>
//     )
//   }
// }

const Form = () => {
  
  
  return(
    <Container>
      <form onClick={this.handleClick} style={{'overflow': 'hidden', 'position': 'relative'}} className='w-50 border mt-5 p-3 m-auto'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className='form-label'>Email address</label>
          <input  type="email" className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className='form-label'>Example textarea</label>
          <textarea className='form-control' id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        {
          this.state.advOpen ? 
          <Portal>
            <Msg/>
          </Portal> : null
        }
      </form>
    </Container>
    )
}

const Msg = () => {
  return ( 
    <div style={{'width': '500px', 'height': '150px', 'backgroundColor': 'red', 'position': 'absolute', 'right': '0', 'bottom': '0'}}>
     Hello
    </div>
  )
}

const Portal = (props) => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  return ReactDOM.createPortal(props.children, node)
}

// class TextInput extends Component {

//   doSmth = () => {
//     console.log('smth')
//   }
  
//   render() {
//     return ( 
      
//     )
//   }
// }

function App() {
  return ( 
    <Form/>
  )
}

export default App;
