import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  return <div className="sc-message--text" style={{background: props.author === 'me' ? props.launcherColor : '#f4f7f9' }}>{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>;
};

export default TextMessage;
