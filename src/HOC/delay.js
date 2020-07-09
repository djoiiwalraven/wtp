import React from 'react';

export default function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted
    };

    componentDidUpdate(prevProps) {
      if(prevProps.isMounted && !this.props.isMounted){
        setTimeout(
          () => this.setState({ shouldRender: this.props.isMounted }),//false
          this.props.delayTime
        );
      }else if(!prevProps.isMounted && this.props.isMounted){
        this.setState({shouldRender: this.props.isMounted });//true
      }
    }

    render(){
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}
