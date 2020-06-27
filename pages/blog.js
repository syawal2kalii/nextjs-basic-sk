import Navigation from "../components/Navigation";
import Layout from '../components/BaseLayout'
import Link from 'next/link'

const PostLink = (props)=>(
    <li>
        <Link href={`single?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
const Index1 = ()=>(
    <div>
        <Layout>
            <h1>Welcom to Blog.js</h1>
            <ul>
                <PostLink title='Blog Pertama' />
                <PostLink title='Blog Kedua' />
                <PostLink title='Blog ketiga' />
            </ul>
        </Layout>
    </div>
)

export default Index1
