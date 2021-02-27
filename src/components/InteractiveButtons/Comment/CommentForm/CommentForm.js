import React from "react";
import "./CommentForm.css";


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    const self = this;
  }

  render() {
    const { users } = this.props;
    
    return (
      <div className="commentFormWrap">
        <form>
          <textarea className="commentInputArea" multiline
            rows="4" placeholder="Add a status/ desctiption" />
        </form>
        <button className="replyButton2">Submit</button>
      </div>     
    );
  }
}

export default CommentForm;
