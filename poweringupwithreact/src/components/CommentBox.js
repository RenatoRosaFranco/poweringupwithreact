// frozen_string_literal: true
import React from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			showComments: false
		}

		this.getComments = this.getComments.bind(this);
		this.getCommentsTitle = this.getCommentsTitle.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			showComments: !this.state.showComments
		})
	}

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
		const commentList = [
			{id: 1, author: 'Morgan MrCircuit', body: 'Great Picture!'},
			{id: 2, author: 'Bending Bender', body: 'Excellent stuff'},
			{id: 3, author: 'Stevie Oznick', body: 'A gred Book'}
		];

		return commentList.map(comment => {
			return <Comment key={comment.id} author={comment.author} 
							body={comment.body} />
		})
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