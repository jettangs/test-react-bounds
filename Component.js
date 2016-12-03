import React from 'react'
import { render } from 'react-dom'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'

class Component extends React.Component{
  static bounds() {
    return {
      'mobile': {
        minWidth: 0,
        maxWidth: 500,
      },
    };
  }

  render(){
    var styles = reactCSS({
      'default': {
        body: {
          background: 'red'
        },
      },
      'mobile': {
        body: {
          background: 'blue'
        },
      },
    })

    return (
      <div style={ styles.body }>
        Hello
      </div>
    );
  }
}

export default wrap(Component)


