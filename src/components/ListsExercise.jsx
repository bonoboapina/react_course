import React from 'react';

const emojis = [ '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', ];
const Component = () => (
  <div className='flex note-exercise-s'>
    {/*
    <div className='emoji'>{'😡'}</div>
    <div className='emoji'>{'🙁'}</div>
    <div className='emoji'>{'😐'}</div>
    <div className='emoji'>{'🙂'}</div>
    <div className='emoji'>{'😁'}</div>*/}
    {/* reimplement emojis using map -> emojis [...].map(...)*/}
    {emojis.map(emoji => <div key={emoji} className='emoji'>{emoji}</div>)}
  </div>
);
/* 😺 😸 😹 😻 😼 😽 🙀 😿 😾*/
export default Component;
