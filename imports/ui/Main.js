import React from 'react';
import { Link } from 'react-router-dom';

import {
  Links,
  insertNewLink
} from '../api/links';
import ResList from '../ui/ResList';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }

  onSubmitLink(e) {
    let errMsg = '';

    e.preventDefault();

    const label = this.labelRef.value.trim();
    const url = this.urlRef.value.trim();
    const notes = this.notesRef.value.trim();

    if (label && url) {
      insertNewLink.call({label, url, notes},
        (err, res) => {
          if (err) {
            errMsg = err.details[0].message;
            console.log(err.details[0].message);
          }
          else {
            this.labelRef.value = '';
            this.urlRef.value = '';
            this.notesRef.value = '';
            this.notesRef.value = '';
          }
        }
      );
    }

    this.setState({
      error: errMsg
    });
  }

  render() {
    return (
      <div>
        <h1>Main page for Graphis Prog Resources</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined }

        <p>Add Link</p>
        <form onSubmit={this.onSubmitLink.bind(this)}>
          <input type="text" name="description" ref={(el) => this.labelRef = el} placeholder="Label"/>
          <input type="text" name="url" ref={(el) => this.urlRef = el} placeholder="URL"/>
          <input type="text" name="notes" ref={(el) => this.notesRef = el} placeholder="Notes"/>
          <select ref={(el) => this.typeRed = el}>
            {
              Links.linkTypes.map(t => {
                return <option key={t} value={t}>{t}</option>
              })
            }
          </select>
          <input type="submit" value="Submit"/>
        </form>

        <ResList/>

        <Link to="/about">About</Link>
      </div>
    );
  }
}
