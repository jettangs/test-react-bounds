import React from 'react'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'

class Component extends React.Component{
  static bounds() {
    return {
      'mobile': {
        minWidth: 0,
        maxWidth: 500,
      },
      'small': {
        minWidth: 501,
        maxWidth: 1000,
      },
    };
  }

  render(){
    var styles = reactCSS({
      'default': {
        body: {
          background:'red'
        },
      },
      'mobile': {
        body: {
          background:'green'
        },
      },
      'small': {
        body: {
          background:'yellow'
        },
      }
    })

    return (
      <div style={ styles.body }>
        { this.props.activeBounds }
      </div>
    );
  }
}

export default wrap(Component)