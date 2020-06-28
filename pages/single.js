import {withRouter} from 'next/router'
import Layout from '../components/BaseLayout'
import fetch from 'isomorphic-unfetch'

const Post   = withRouter((props)=>(
    <Layout>
        <h2>{props.user.username}</h2>
        <p>Nama lengkap : {props.user.name}</p>
    </Layout>
))

Post.getInitialProps = async function(context) {
    const {id} = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()

    console.log('total data' + user.length)
    return {user}
}
export default Post