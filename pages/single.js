import {withRouter} from 'next/router'
import Layout from '../components/BaseLayout'
import Head from 'next/head'

const Page = withRouter((props)=>(
    <Layout>
        <Head>
            <title>halaman User</title>
        </Head>
        <h2>{props.router.query.title}</h2>
        <p>Ini Konten Palsu</p>
        <ul>
            <li><a>Konten 1</a></li>
            <li><a>Konten 2</a></li>
            <li><a>Konten 3</a></li>
        </ul>

    </Layout>
))

export default Page