import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  MenuItem,
  Input,
  InputLabel,
  FormControl,
  Select,
  Chip,
} from '@material-ui/core';
import api from '../../api';

import './EditResource.scss';

class SubmitLink extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    defaultTags: PropTypes.array.isRequired,
    history: PropTypes.any,
  };

  state = {
    link: '',
    name: '',
    category: '',
    desc: '',
    tags: [],
    error: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await api.getOneResource(id);
    if (res.success) {
      const { link, name, category, desc, tags } = res.resource;
      this.setState({ link, name, category, desc, tags });
    } else {
      this.setState({ error: 'Could not fetch' });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } );
  }

  submitLink = async (e) => {
    e.preventDefault();
    const { link, name, category, desc, tags } = this.state;
    const resource = { link, name, category, desc, tags };
    const { id } = this.props.match.params;
    const res = await api.updateResource(id, resource);
    if (res.success) {
      const { history } = this.props;
      history.push(`/resources/${id}`);
    } else {
      this.setState({ error: 'Could not update. Unauthorized.'})
    }
  }

  render() {
    const { categories, defaultTags } = this.props;
    const { link, name, category, desc, tags, error } = this.state;

    return error
      ? <div>{error}</div>
      : (
      <>
        <form
          className="submission-form"
          onSubmit={this.submitLink}
        >
          <TextField
            required
            id="link"
            name="link"
            label="Link URL"
            value={link}
            onChange={this.handleChange}
            helperText="Add a valid HTML link"
          />
          <TextField
            required
            id="name"
            name="name"
            label="Link Title"
            value={name}
            onChange={this.handleChange}
            helperText="Please use original title or custom title (if original title is not descriptive or helpful"
          />
          <TextField
            required
            id="category"
            name="category"
            select
            label="Select Category"
            value={category}
            onChange={this.handleChange}
            helperText="Please select the most appropriate category"
          >
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <FormControl>
            <InputLabel htmlFor="tags">Tags</InputLabel>
            <Select
              multiple
              id="tags"
              name="tags"
              value={tags}
              onChange={this.handleChange}
              input={<Input id="tags" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {defaultTags.map(tag => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="desc"
            name="desc"
            label="Link Description"
            multiline
            rows="5"
            value={desc}
            onChange={this.handleChange}
            helperText="Provide a description of your link. Why is this link useful? What did you learn from it? Please be thorough! Minimum length: 100 characters"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '2em' }}
          >
            Submit Link
          </Button>
        </form>
      </>
      );
  }
}

export default SubmitLink;
