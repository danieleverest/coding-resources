import React from 'react';
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
import './ResourceForm.scss';

class ResourceForm extends React.Component {
  state = {...this.props.resource}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { link, name, category, tags, desc } = this.state;
    const { categories, defaultTags } = this.props;
    return (
      <form className="resource-form" onSubmit={this.handleSubmit}>
        <TextField
          required
          name="link"
          label="Link URL"
          value={link}
          onChange={this.handleChange}
          helperText="Add a valid HTML link"
        />
        <TextField
          required
          name="name"
          label="Link Title"
          value={name}
          onChange={this.handleChange}
          helperText="Please use original title or custom title (if original title is not descriptive or helpful"
        />
        <TextField
          select
          required
          name="category"
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
            name="tags"
            value={tags}
            onChange={this.handleChange}
            input={<Input id="tag" />}
            renderValue={selected => (
              <div>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {defaultTags.map(tag => (
              <MenuItem key={tag} value={tag.toLowerCase()}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
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
    );
  }
}

ResourceForm.propTypes = {
  resource: PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.array,
    desc: PropTypes.string,
  }),
  submit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  defaultTags: PropTypes.array.isRequired,
};

ResourceForm.defaultProps = {
  resource: {
    link: '',
    name: '',
    category: '',
    tags: [],
    desc: '',
  },
};

export default ResourceForm;
