/**
 * [Assets]
 */
import styles from '../../assets/styles/AppStyles.module.css'


import ItemCard from "../ItemCard"

const ItemsContainer = (items) => {
    return(
        <>
            {
                items.children.map((item, index) => (
                    <ItemCard key={item._id} item={item}/>
                ))
            }
        </>
    )
}

export default ItemsContainer