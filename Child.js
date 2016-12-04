import React from 'react'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'

class Child extends React.Component{
  static bounds() {
    return {
      'mobile': {
        minWidth: 0,
        maxWidth: 500,
      },
    };
  }

  render(){
    return (
      <div>Child</div>
    )
  }
}

export default wrap(Child)