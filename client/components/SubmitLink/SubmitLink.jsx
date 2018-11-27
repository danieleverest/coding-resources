import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Paper, TextField, Button, MenuItem, Input, InputLabel, FormControl, Select, Chip } from '@material-ui/core';
import './SubmitLink.scss';

// Adding styles
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

// Should be pulled from database
const categories = [
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Python', label: 'Python' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'SQL', label: 'SQL' },
  { value: 'PHP', label: 'PHP' },
  { value: 'C++', label: 'C++' },
  { value: 'HTML/CSS', label: 'HTML/CSS' },
  { value: 'Frameworks', label: 'Frameworks' },
  { value: 'General', label: 'General' },
];

// To be pulled from database
const tags = [
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Paper className={classes.root} elevation={10}>
          <form action="/submit" method="POST">
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
                value={this.state.category}
                style={{ width: 700 }}
                onChange={this.updateCategoryListValue('category')}
                helperText="Please select the most appropriate category"
                margin="normal"
                variant="outlined"
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="select-multiple-chip">Tags</InputLabel>
                <Select
                  multiple
                  value={this.state.tags}
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
                  {tags.map(tag => (
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
        </Paper>
      </div>
    );
  }
}

SubmitLink.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SubmitLink);
