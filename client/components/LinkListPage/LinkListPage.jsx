import React from 'react';
import Links from './Links/Links';
import api from '../../api';
import './LinkListPage.scss';

class linkPage extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    console.log(this.props.match);
    const { resources } = await api.getResources();
    this.setState({ resources });
  }

  render() {
    const { resources } = this.state;
    return (
      <>
        {resources.map(({ _id, name, link, desc, tags, rank }) => (
          <Links
            key={_id}
            title={name}
            url={link}
            desc={desc}
            tags={tags}
            votes={rank}
          />
        ))}
      </>
    );
  }
}

export default linkPage;
