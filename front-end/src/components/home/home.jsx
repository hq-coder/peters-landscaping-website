import React from 'react'
import "./home.css"
import logo from "../../assets/logo.png"

const home = () => {
  return (
    <div className='home-container'>
      
      <img className='logo-home' src={logo} />      
      <p> Donec ut congue magna. Vivamus id nunc turpis. Proin auctor, quam eget tempor euismod, lectus odio pharetra ex, sit amet auctor nisl 
        sapien sit amet orci. Aliquam eget ligula augue. In hac habitasse platea dictumst. Fusce consectetur, enim eget varius commodo, enim lectus placerat risus, nec scelerisque lectus
         ipsum sit amet nulla. Fusce tincidunt, risus quis bibendum interdum, purus mauris feugiat est, id eleifend quam enim et augue. Vestibulum lobortis diam risus, id vestibulum est auctor 
         sit amet. Sed posuere, mauris eu rhoncus viverra, purus felis volutpat ex, id tincidunt sapien mauris vitae erat. Aenean feugiat elit ut elit finibus, sed pulvinar ex aliquam. Vivamus varius,
          nisi eget suscipit bibendum, lectus nisl tristique nibh, vel venenatis lorem nisi vel tellus. Mauris in purus vel nisi laoreet ultricies. Nam quis orci vel lorem bibendum malesuada.</p>
      </div>
  )
}

export default home 