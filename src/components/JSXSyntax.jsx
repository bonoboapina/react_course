/**
 * Created by joonaenbuska on 15/03/2017.
 */
import React from 'react';

const Component = props =>
  /* JSX function can only return one single tag.
  In it example its "parentTag" that has other tags as children*/
   (
     <div id="parentTag">
       <p>1. /*this text will be VISIBLE*/</p>
       <p>{'2.' /* This is a comment inside jsx element and will be INVISIBLE*/}</p>
       <p>3. props.text</p>{/* text: 'props.text' will be displayed*/}
       <p>4. {props.text}</p>{/* value of props text will be evaluated and displayed*/}
       <p>5. According to best practice files with JSX should be have extension of .jsx</p>
     </div>
  );

Component.propTypes = {
  text: React.PropTypes.string.isRequired,
};
Component.defaultProps = {
  text: 'DEFAULT TEXT',
};

export default Component;