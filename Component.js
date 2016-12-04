import React from 'react'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'
import  styles  from './styles.js'
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


    return (
      <div style={ styles.body }>

        { this.props.children }

      </div>
    );
  }
}

export default wrap(Component)