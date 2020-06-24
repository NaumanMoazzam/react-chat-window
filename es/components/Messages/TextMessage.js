import React from 'react';
import Linkify from 'react-linkify';

var TextMessage = function TextMessage(props) {
  return React.createElement(
    'div',
    { className: 'sc-message--text', style: { background: props.author === 'me' ? props.launcherColor : '#f4f7f9' } },
    React.createElement(
      Linkify,
      { properties: { target: '_blank' } },
      props.data.text
    )
  );
};

export default TextMessage;