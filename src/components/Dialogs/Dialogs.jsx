import React from "react";
import classes from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/MessageItem/MessageItem";
import { Redirect } from "react-router-dom";





const Dialogs = (props) => {
debugger;
    const dialogs = [
        {id : 1, name : "Mikki", date : "20.10.1993", image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},
        {id : 2, name : "Nikki", date : "20.10.1993", image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},
        {id : 3, name : "Pikki", date : "20.10.1993", image : "https://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg"},];

        const messages = [
            {id : 1, name : "7897987", date : "20.10.1993", message : "hiuhiuhiuhiu"},
            {id : 2, name : "4565465", date : "20.10.1993", message : "uihiuhiu"},
            {id : 3, name : "8908", date : "20.10.1993", message : "hjkhkjhkj"},]
    const dialogElements = dialogs.map(dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} date={dialog.date} image={dialog.image} />;
    });

    const messageElements = messages.map(message => {
        return <MessageItem id={message.id} name={message.name} date={message.date} message={message.message} />;
    });

    const onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    const onSendMessageClickHandler = () => {
        props.sendMessage();
    }

    return (<div>
        <div className={classes.headerDialog}>Диалоги </div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                Собеседники
         {dialogElements}
            </div>
            <div className={classes.messagesItems}>
                {/* <Route path='/dialogs/:dialogId' render={()=><Messages state={this.props.state.messages} dialogId={1}/>}/> */}
                {messageElements}
                <div>
                    <textarea onChange={onNewMessageChange}
                        value="789798798798798"> </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClickHandler}> Send</button>
                    <button >Cancel</button>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Dialogs;
