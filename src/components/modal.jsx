import React from 'react';
import ReactModal from 'react-modal'
export default class Modal extends React.Component{
    constructor(props){
    super(props);
    console.log(this.props)
    }
    render(){
        const {children} = this.props;
        return(
            <ReactModal
            isOpen={true}
            contentLabel="Modal #1 Global Style Override Example"
            >
                 {children}
            </ReactModal>
        );
    }
}