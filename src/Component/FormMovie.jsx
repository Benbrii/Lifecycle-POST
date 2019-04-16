import React, { Component } from 'react';
import { Form } from 'reactstrap';

class Tata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un film');
      });
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Mon film préféré</h1>

        <Form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Mon film</legend>
            <div className="form-data">
              <label htmlFor="name">Titre</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Année</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Pourquoi j'aime ce film</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </Form>
      </div>
    )
  }
}

export default Tata;
