import React from 'react';

const About = React.forwardRef(({ title, changeTitle }, ref) => {
  console.log('---', ref);
  const change = () => changeTitle('about-changed-title');
  return (
    <div className='about' onClick={change}>
      <h1 ref={ref}>about</h1>
      {title}
    </div>
  );
});

export default About;
