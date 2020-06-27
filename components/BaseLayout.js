import Navigation from '../components/Navigation'
const Layout = (props) => (
    <div>
        <Navigation />
        {props.children}
        <p>Footer: copyright 2019</p>
    </div>
)
export default Layout