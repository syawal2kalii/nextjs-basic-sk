import Navigation from '../components/Navigation'
import Head from 'next/head'    
const Layout = (props) => (
    <div>
        <Head>
            <title>Next JS Basic</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8" />
        </Head>
        <Navigation />
        {props.children}
        <p>Footer: copyright 2019</p>
    </div>
)
export default Layout