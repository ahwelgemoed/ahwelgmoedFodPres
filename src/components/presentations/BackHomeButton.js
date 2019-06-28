import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

export default class BackHomeButton extends Component {
  render() {
    return (
      <div>
        <Link
          style={{
            position: 'absolute',
            zIndex: '99999',
            color: '#fff',
            fontSize: 16,
            padding: 20,
            fontFamily: 'PT Sans'
          }}
          to="/"
        >
          <FiHome>Go Home</FiHome>
        </Link>
      </div>
    );
  }
}
