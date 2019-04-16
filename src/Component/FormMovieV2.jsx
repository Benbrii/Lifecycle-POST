import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class Niceformbru extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    console.log(`Formulaire rindu t'chiot !`);
  }

  componentDidUpdate() {
    console.log(`Caractère changé biloute !`);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      globalTitle: `${this.state.title}`
    });
    console.log(`eul'titre il a changé tcé !`);
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1 className="filmtitle">MON FILM : {this.state.globalTitle}</h1>

        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <div className="form-data">
              <Label htmlFor="name">Titre</Label>
              <Input 
                type="text"
                placeholder="Titre du film"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <Input type="submit" value="Envoyer" />
            </div>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Niceformbru;