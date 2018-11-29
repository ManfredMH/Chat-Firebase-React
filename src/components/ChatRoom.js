import React,{Component} from 'react';
import firebase from 'firebase';
import {db_config} from '../config/config';

export default class ChatRoom extends Component {

    state = {
        message: '',
        messages: []
    }

    componentDidMount() {
        this.app = firebase.initializeApp(db_config);
        this.db = this.app.database().ref("messages/").on("value", snapshot => {
            const currentMessages = snapshot.val();

            if (currentMessages != null) {
              this.setState({ messages: currentMessages });
            }
          });
    }

    updateMessage(e){
        this.setState({
            message: e.target.value
        });
    }

    submidMessage(){
        const message = {
            id: this.state.messages.length,
            text: this.state.message
        };

        this.db = this.app.database().ref('messages/' + message.id).set(message);
        
       // let listMessages = this.state.messages;
       // listMessages.push(message);

       // this.setState({
       //     messages: listMessages
      //  });

        this.setState({
            message: ''
        });
    }

    render() {

        const currentMessages = this.state.messages.map((message, i) => {
            return(
                <li key={ message.id } className="list-group-item list-group-item-action" > { message.text } </li>
            )
        })

        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {currentMessages}
                    </ul>
                </div>
                <div className="card-footer">
                    <input value={this.state.message} onChange={this.updateMessage.bind(this)} type="text" placeholder="Write a Message" className="form-control" />
                    <button onClick={this.submidMessage.bind(this)} className="btn btn-primary btn-block">Send Message</button>
                </div>
            </div>
        );
    }
}