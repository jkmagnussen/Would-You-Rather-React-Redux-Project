import React from "react";
import "./ReplyCommentForm.css";


class ReplyCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replyText: "",
    };
  }

      replySetText= () =>{
      this.setState({
        replyText: !this.state.starActive,
      })
    }



  componentDidMount() {
    const self = this;
  }

  render() {
    const { users } = this.props;
    
    return (
      <div className="commentFormWrap">
        <form>
          <textarea
            className="commentInput"
            multiline
            rows="4"
            placeholder="Add a status/ desctiption"
          value={this.props.commentReplies}
          onChange={e => this.setState({ replyText: e.target.value })}
          />
          <div>
            <button className="replyButton2" type="submit" value="Submit">Submit</button>
          </div>
        </form>
        
      </div>     
    );
  }
}

export default ReplyCommentForm;
