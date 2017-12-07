import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div className="Text">
        Text {this.props.match.params.id} Badidda
      </div>
    );
  }
}

export default Text;
