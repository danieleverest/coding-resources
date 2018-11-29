import React, { Component } from 'react';
import { TextField, Button, MenuItem, Input, InputLabel, FormControl, Select, Chip } from '@material-ui/core';

import './SubmitLink.scss';

const defaultTags = [
  'OOP',
  'ES5',
  'Sorts',
  'Big O',
  'Refactoring',
  'Map',
  'Learning to Code',
  'Free Sites',
  'Paid Sites',
  'Getting Hired',
];

class SubmitLink extends Component {
  state = {
    category: 'JavaScript',
    tags: [],
  };

  addTag = (event) => {
    this.setState({ tags: event.target.value });
  };

  updateCategoryListValue = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { categories } = this.props;
    const { tags, category } = this.state;

    return (
      <>
        <form>
          <div>
            <TextField
              required
              id="outlined-url"
              label="Link URL"
              margin="normal"
              variant="outlined"
              helperText="Add a valid HTML link"
              style={{ width: 700 }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-name"
              label="Link Title"
              margin="normal"
              variant="outlined"
              helperText="Please use original title or custom title (if original title is not descriptive or helpful"
              style={{ width: 700 }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-select-currency"
              select
              label="Select Category"
              value={category}
              style={{ width: 700 }}
              onChange={this.updateCategoryListValue('category')}
              helperText="Please select the most appropriate category"
              margin="normal"
              variant="outlined"
            >
              {categories.map(cat => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="select-multiple-chip">Tags</InputLabel>
              <Select
                multiple
                value={tags}
                onChange={this.addTag}
                input={<Input id="select-multiple-chip" />}
                variant="outlined"
                style={{ width: 700 }}
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
          </div>
          <div>
            <TextField
              id="outlined-add-tags"
              label="Add Tags (optional)"
              style={{ width: 700 }}
              helperText="Please double check that your tags are not redundant with the tag list above before submitting. If you are adding multiple tags, separate with a comma and a space (e.g. OOP, ES5)"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Link Description"
              multiline
              rows="5"
              style={{ width: 700 }}
              helperText="Provide a description of your link. Why is this link useful? What did you learn from it? Please be thorough! Minimum length: 100 characters"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
                Submit Link
            </Button>
          </div>
        </form>
      </>
    );
  }
}

export default SubmitLink;
