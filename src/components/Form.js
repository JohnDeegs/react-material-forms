import React, {Component} from 'react';
import {Button} from 'material-ui';

class Form extends Component {
    render(){
        return(
            <div>
                <h2 className="formTexts" id="formHeader">Select the venue suitable for your needs.</h2>

                <h4 className="formTexts">It's completely free!</h4>

                <div id="formBody">
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Company" />
                        <input type="text" placeholder="Name" />
                    </form>

                    <Button raised id="startedBtn">Find The Perfect Venue</Button>
                </div>
            </div>
        )
    }
}

export default Form;