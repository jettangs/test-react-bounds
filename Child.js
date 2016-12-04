import React from 'react'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'

class Child extends React.Component{


  render(){
  var styles = reactCSS({
      'child':{
        background:'yellow'
      }
  })
    return (
      <div style={styles.child}>Child</div>
    )
  }
}

export default wrap(Child)