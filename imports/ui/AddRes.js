import React from 'react';
import { Link } from 'react-router-dom';

import {
  Links,
  insertNewLink
} from '../api/links';

export default class AddRes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      typeSelected: Links.linkTypes[0]
    };
  }

  onSubmitLink(e) {
    let errMsg = '';

    e.preventDefault();

    const label = this.labelRef.value.trim();
    const url = this.urlRef.value.trim();
    const notes = this.notesRef.value.trim();
    const type = this.state.typeSelected.trim();
    const tags = this.tagsRef.value.trim();

    if (label && url) {
      insertNewLink.call({label, url, notes, type, tags},
        (err, res) => {
          if (err) {
            errMsg = err.details[0].message;
            console.log(err.details[0].message);
          }
          else {
            console.log(res);
            this.labelRef.value = '';
            this.urlRef.value = '';
            this.notesRef.value = '';
            this.typeRef.value = '';
            this.tagsRef.value = Links.linkTypes[0];
          }
        }
      );
    }

    this.setState({
      error: errMsg
    });
  }

  handleChangeInput(e) {
    this.setState({
      typeSelected: e.target.value
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
          <select value={this.state.typeSelected} ref={(el) => this.typeRef = el} onChange={this.handleChangeInput.bind(this)}>
            {
              Links.linkTypes.map(t => {
                return <option key={t} value={t}>{t}</option>
              })
            }
          </select>
          <input type="text" name="tags" ref={(el) => this.tagsRef = el} placeholder="Comma-separated tags"/>
          <input type="submit" value="Submit"/>
        </form>

        <Link to="/">Resources List</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
