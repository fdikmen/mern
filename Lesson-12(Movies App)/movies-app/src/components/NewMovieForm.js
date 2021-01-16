import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Image ,Message} from "semantic-ui-react";
import InlineError from './InlineError';
import {Redirect} from 'react-router-dom';

export default class NewMovieForm extends Component {
  state = { 
    title: this.props.willEditMovie ? this.props.willEditMovie.title : "",
    cover: this.props.willEditMovie ? this.props.willEditMovie.cover : "",
    errors: {} 
  };
  static propTypes = { onNewMovieSubmit: PropTypes.func.isRequired };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  };

  onSubmit = () => {
    const errors = this.validate();
    // console.log(errors);
    this.setState({errors});

    if (Object.keys(errors).length === 0) {
      this.props.onNewMovieSubmit(this.state);
    }

  };

  validate = ()=> {
const valMsgObj={};
if(!this.state.title) valMsgObj.title="Can't be blank";
if(!this.state.cover) valMsgObj.cover="Can't be blank";
return valMsgObj;
  }

  render() {
          const {errors}=this.state;

      const formContent=(<Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
        <Form.Field error={errors.title}>
          <label>Title</label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          {errors.title && <InlineError message={errors.title} />}
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover Url</label>
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder="Cover Url"
          />
          {errors.cover && <InlineError message={errors.cover} />}
        </Form.Field>
        <Form.Field>
          <Image src={this.state.cover} size="small" />
        </Form.Field>
        <Button color="teal" type="submit">
          Submit
        </Button>

        {this.props.newMovie.error.response && (
          <Message negative>
            <Message.Header>
              We're sorry
            </Message.Header>
            <p>WebAPI has expired</p>
          </Message>
        )}
      </Form>
    );

      //console.log("NewMovieForm Comp Props:",this.props);
    return (
      <div>
        <h2>New Movie</h2>
        {
          this.props.newMovie.fetched ? <Redirect to="/movies"/> : formContent
        }
      </div>
    );
  }
}
