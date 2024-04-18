import React, { Component } from 'react';
import './Blog.css'; 

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCount: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updateCount !== prevState.updateCount) {
      console.log(`Component updated (Update count: ${this.state.updateCount})`);
    }
  }

  handleUpdate = () => {
    this.setState((prevState) => ({
      updateCount: prevState.updateCount + 1,
    }));
  };

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div className="blog-container">
        <h1>Blog</h1>
        <p>Read our latest articles and updates.</p>
        <p>Update count: {this.state.updateCount}</p>
        <button className="update-button" onClick={this.handleUpdate}>Trigger Update</button>
        <br />
      </div>
    );
  }
}

export default Blog;
