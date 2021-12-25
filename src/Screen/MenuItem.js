import React from 'react';

class MenuItem extends React.Component {
    render() {
        const { OptionList } = this.props;

        return (
            <React.Fragment>
                {

                    OptionList.map((item, index) => {
                        return (
                            <div className={this.props.Selected === index ? "Selected" : ""} key={index}>

                                <p>{item}</p>
                            </div>
                        );


                    })
                }
                {
                    (OptionList.length === 3) ?
                        <div style={{ color: 'red' }}>
                            <p style={{ fontSize: '13px', padding: '5px' }}> click "<i className="fas fa-backward"></i>" to go back</p>

                        </div> : ''
                }
            </React.Fragment>
        );
    }
}

export default MenuItem;