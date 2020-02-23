import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Square extends React.Component {
  render() {
    return (
      <div class="page-container">
        <input className="url-container" value="https://example.url/12313asdq3ec?q=123" disabled></input>
        <form>
          <div>
            <input className="email-container" type="email" placeholder="Email"></input>
            <div class="debug">
              <p>123</p>
            </div>
          </div>
          <div>
            <input type="button" value="send"></input>
            <input type="button" value="save"></input>
          </div>
        </form>

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
