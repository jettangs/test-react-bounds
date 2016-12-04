import React from 'react';
import ReactCSS from 'reactcss';
import {wrap} from 'react-bounds';


class Component extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        page: {
          width: '960px',
          height: '400px',
          margin: '0 auto',
          background: 'red'
        },
      },
      'no-sidebar': {
        sidebar: {
          display: 'none',
        },
      },
      'bigger-content': {
        page: {
          width: '1150px',
        },
      },
    };
  }

  static bounds() {
    return {
      'no-sidebar': { maxWidth: 520 },
      'bigger-content': { minWidth: 1200 },
    };
  }

  render() {
    return (
      <div is="page">
        <div is="content">gweg</div>
        <div is="sidebar">wegweg</div>
      </div>
    );
  }
}

export default wrap(Component);