// frozen_string_literal: true
import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'

class CommentBox extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			showComments: false,
			comments: [
				{id: 1, author: 'Morgan MrCircuit', body: 'Great Picture!'},
				{id: 2, author: 'Bending Bender', body: 'Excellent stuff'},
				{id: 3, author: 'Stevie Oznick', body: 'A gred Book'}
			]
		}

		this.getComments 			= this.getComments.bind(this);
		this.getCommentsTitle = this.getCommentsTitle.bind(this);
		this.handleClick 			= this.handleClick.bind(this);
		this.addComment 			= this.addComment.bind(this);
	}

	handleClick() {
		this.setState({
			showComments: !this.state.showComments
		})
	};

	addComment(author, body) {
		const comment = {
			id: this.state.comments.length + 1,
			author,
			body
		}

		this.setState({ comments: this.state.comments.concat([comment]) });
	};

	getCommentsTitle(commentCount) {
		if(commentCount == 0) {
			return 'No comments yet';
		}else if (commentCount === 1) {
			return '1 comment';
		} else {
			return `${commentCount} comments`;
		}
	}

	getComments() {
		return this.state.comments.map(comment => {
			return(
				<Comment key={comment.id} 
								 author={comment.author} 
								 body={comment.body} />
			);
		});
	}

	render(){
		const comments = this.getComments();
		let commentNodes;
		let buttonText = 'Show comments';
		
		if (this.state.showComments) {
			commentNodes = <div className='comment-list'>{comments}</div>
		}

		if (this.state.showComments) {
			buttonText = 'Hide comments';
		}

		return(
			<div className='comment-box'>
				<CommentForm addComment={() => {this.addComment()}}/>

				<h3>Comments</h3>
				<button onClick={()=> {this.handleClick(this)}}>
					{buttonText}
				</button>
				<h4 className='comment-count'>
				{this.getCommentsTitle(comments.length)}</h4>
				<div className='comment-list'>
					{commentNodes}
				</div>
			</div>
		);
	}
}

export default CommentBox;