import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>
                        {this.props.task}
                    </td>
                </tr>
                <button>Delete</button>
            </div>
        );
    }
}

export default Task;