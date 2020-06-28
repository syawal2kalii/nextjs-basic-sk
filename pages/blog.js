import Navigation from "../components/Navigation";
import Layout from '../components/BaseLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props)=>(
    <li>
        <Link as={`/single/${props.id}`} href={`single?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx >{`
            a{
                color:red;
            } 
            `}
        </style>
    </li>
)
const Index1 = (props)=>(
    <div>
        <Layout>
            <h1>Welcome to Blog.js</h1>
            <ul>
                <PostLink id='blog-pertama' title='Blog Pertama' />
                <PostLink id='blog-kedua' title='Blog Kedua' />
                <PostLink id='penutupan-ketiga' title='Blog ketiga' />
            </ul>
            <h1>Daftat user</h1>
            <ul>
                {props.users.map((user)=>(
                   <li key={user.id}>
                    <Link as={`/single/${user.id}`} href={`/single?id=${user.id}`}>
                        <a>{user.username}</a>
                    </Link> 
                   </li>
                ))}
            </ul>
            
        </Layout>
        
    </div>
)

Index1.getInitialProps = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log('---------')
    console.log('total data' + data.length)
    console.log('---------')
    return {users : data }
}

export default Index1
