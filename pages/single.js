import {withRouter} from 'next/router'
import Layout from '../components/BaseLayout'

const Page = withRouter((props)=>(
    <Layout>
        <h2>{props.router.query.title}</h2>
        <p>Ini Konten Palsu</p>
    </Layout>
))

export default Page