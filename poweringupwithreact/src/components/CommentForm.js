// frozen_string_literal: true

import React from 'react';

class CommentForm extends React.Component {
	
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
	  event.preventDefault();
	  let author = this._author;
	  let body = this._body;
	  this.props.addComment(author.value, body.value);
		console.log('Here we going');
	}

	render() {
		return(
			<form className="comment-form" onSubmit={() => {this.handleSubmit()}}>
				<label>Join the discussion</label>
				<div className="comment-form-fields">
					<input placeholder='Name:' ref={(input) => this._author = input }/><br/>
					<textarea placeholder='Comment:' ref={(textarea) => this._body = textarea }></textarea>
				</div>
				<div className="comment-form-actions">
					<button type="submit">
						Post comment
					</button>
				</div>
			</form>
		);
	}
}

export default CommentForm;