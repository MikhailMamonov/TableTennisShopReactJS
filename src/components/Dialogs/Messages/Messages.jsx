import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";





class Messages extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.messagesForDialogItems =props.state.map(message => {

            return message.dialogId == props.dialogId ?
                <MessageItem id={message.id} name={message.name} date={message.date} message={message.message} />
                : <MessageItem />;
        });
        debugger;
    };


    render() {
        debugger;
        return (<div className={classes.main}>
            <div>Сообщения</div>
            <div>{this.messagesForDialogItems}</div>
            <div> <textarea> input new message</textarea></div>
            <div><button>Send</button><button>Cancel</button></div>

        </div>
        )
    }
}

export default Messages;
