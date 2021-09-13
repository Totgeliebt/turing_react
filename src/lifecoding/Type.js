//Статическая и динамическая типизация
//слабая и сильная
//явная и неявная
import React from 'react'
import PropTypes from 'prop-types'
const CustomButton = ({type, onClick, text}) => {
   return (
       <input type={type === 'submit' ? 'submit' : 'button'} onClick={onClick} value={text}/>
   )

}
CustomButton.propTypes = {
   type: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   text: PropTypes.string.isRequired

}
const Main = () => {
   const handleSubmit =(event) => {
      event.preventDefault()
      alert('Value:' + event.target.someInput.value)
   }
   return (
       <form onSubmit={handleSubmit}>
          <input name="someInput"/>
          <CustomButton type='submit' text='click me'/>
       </form>
   )
}


const Wrapper = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
}
const MainForWrapper = () => {
    return (
        <Wrapper>
            <input type="text"/>
            <button>Click me</button>
        </Wrapper>
    )
}

export default MainForWrapper