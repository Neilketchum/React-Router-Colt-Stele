import React, { Component } from 'react'
class Dog extends Component{
    render(){
        return(
            <div>
                <img src="data:image/jpeg;base64,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" alt="Dog Image"/>
            </div>
        )
    }
}
export default Dog;