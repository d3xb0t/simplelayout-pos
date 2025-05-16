/**
 * [Jerarquía de componentes]
 */
import ControlContainer from '../containers/ControlContainer'
import ItemsContainer from '../containers/ItemsContainer'

/**
 * [Assets]
 */
import styles from '../../assets/styles/AppStyles.module.css'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sideBar}>
                <nav>
                </nav>
            </aside>

            <main className={styles.dashBoard}>
                <section className={styles.controlContainer}>
                    <ControlContainer />
                </section>

                <article className={styles.itemsContainer}>

                </article>
            </main>
        </div>
    )
}
    export default Layout


