import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

function Layout(props) { 
    return (
        <div>
            <MainNavigation/>
            <main>
                <main className={classes.main}>{props.children}</main>
            </main>
        </div>
    )
}
export default Layout