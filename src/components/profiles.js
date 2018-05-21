import React from 'react'
import {Link, Redirect} from 'react-router-dom'

import Card from '../hoc/card'
import Auth from '../hoc/auth'

const Profiles=(props)=>{

    const redir=() =>{
        return (
            <Redirect to="/"/>
            )
    }
    return (
    <Auth>
        <Card>
            <Link to={{
                pathname:`${props.match.url}/Post`
            }}> Take me to profile/post </Link>
        </Card>
    </Auth>
    )
}

export default Profiles;