import React from 'react';

class Reset extends React.Component{
    onResetDefault =()=>{
        this.props.onSettingDefault(true);
    }
	render(){
		return(
            <button type="button" className="btn btn-primary" onClick={this.onResetDefault} >reset</button>
    );
	}
}
export default Reset;