import Navigation from "../components/Navigation";
import Layout from '../components/BaseLayout'
import Link from 'next/link'

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
const Index1 = ()=>(
    <div>
        <Layout>
            <h1>Welcome to Blog.js</h1>
            <ul>
                <PostLink id='blog-pertama' title='Blog Pertama' />
                <PostLink id='blog-kedua' title='Blog Kedua' />
                <PostLink id='penutupan-ketiga' title='Blog ketiga' />
            </ul>
            
        </Layout>
        
    </div>
)

export default Index1
