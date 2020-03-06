
import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }


    ActivateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    DeactivateEditMode=(e)=> {
        this.setState(
            {
                editMode: false
            }
        )
        
        this.props.updateStatus(e.target.value)

    }

    changeStatusHandler=(e)=>{
        
        let text = e.target.value;
        this.setState(
            {
                status: text
            }
        )
    }

    render() {
        
        return (
            <div>
                {this.state.editMode === false &&
                    <span onDoubleClick={this.ActivateEditMode}>
                        {this.state.status}
                    </span>
                }
                {this.state.editMode === true &&
                    <div>
                        <input autoFocus = {true} onChange = {this.changeStatusHandler} onBlur={this.DeactivateEditMode} value={this.state.status} />
                    </div>}

            </div>
        )
    }


}

export default ProfileStatus;