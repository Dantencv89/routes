import React, {PureComponent} from 'react'


class Life extends PureComponent{
   
state={title:'life Cycles'}


// componentWillMount(){
//     console.log('Before')
// }

// componentDidMount(){
//     console.log('After')
// }

// componentWillUpdate(){
//     console.log('before update')
// }

// componentDidUpdate(){
//     console.log('after update')
// }


// //Before mount the component
// componentWillReceiveProps(){
//     console.log('Before receive props')
// }

// componentWillUnmount(){
//     console.log('before unmount the component')
// }


// Evaluate before updates, if return false, there wont be updates
// shouldComponentUpdate(nextProps,nextState){ 
//     if (nextState.title=== this.state.title) return false
//     return true
// }

render() {
    console.log('render')
    return (
        <div>
            <h3>{this.state.title}</h3>
            <div onClick={
                ()=> this.setState({title:'New Title'})
                }> 
                Click On me!
            </div>
        </div>
        )
    }
}

export default Life;