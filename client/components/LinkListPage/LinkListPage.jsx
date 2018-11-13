import React from 'react';
import Links from './Links/Links';
import './LinkListPage.scss';

// Database call mockup
const links = [
  { id: 1, title: 'Complete JavaScript Handbook', url: 'https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c', tags: ['JavaScript', 'Intermediate'] },
  { id: 2, title: 'OOP with ES6, a Deep Dive', url: 'https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/', tags: ['JavaScript', 'Intermediate', 'OOP'] },
];

const linkPage = () => (
  <div>
    {links.map(link => <Links key={link.id} title={link.title} url={link.url} tags={link.tags} />)}
  </div>

);

export default linkPage;
