import React from 'react';
import Links from './Links/Links';
import './LinkListPage.scss';

import links from './mockDb';

const linkPage = () => links.map(link => <Links key={link.id} title={link.title} url={link.url} tags={link.tags} votes={link.votes} />);

export default linkPage;
