// Components = sections of the page with seprate functionality or elements. Allows us to organize our code. + they are reusable.

import React from 'react';

const Welcome = ({ name }) => {
  return <p>Welcome, {name}!</p>;
};

export default Welcome;
