import React from 'react';

class StoryBox extends React.Component {
	render(){
		const now = new Date();
		const topicList = ['HTML', 'Javascript', 'React']
		return(
			<div>
				<h3>Stories</h3>
				<p className='lead'>
					Current time: {now.toTimeString()}

					{topicList.map((topic) => { return <li>{topic}</li> })}
				</p>
			</div>
		);
	}
}

export default StoryBox;