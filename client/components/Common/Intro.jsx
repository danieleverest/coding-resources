import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import './Intro.scss';

const intro = () => (
  <>
    <Typography variant="h5" align="center">
        Welcome to the Programming Reference Site
    </Typography>
    <Divider />
    <br />
    <Typography variant="subtitle1">
      This project was created to help individual programmers, ranging from begginer to advanced, to have a reference site, where specific links; githubs, articles, etc. are listed and recommended by programmers such as yourself!
      We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know whether something worth your while or not!
      This website was created to help the individual programmers to find the best sources that are backed up by other programmers, who have looked into the references themselves!
      Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
    </Typography>
  </>
);

export default intro;
