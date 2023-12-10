// styles
import styles from '@/styles/Blogcard.module.scss'
import UtilityStyles from '@/styles/Utility.module.scss'

// TYPES
import type {Blog} from '@/types.d'



const BlogCard = (props: Blog) => {
    return<>
    <div className={styles.blogcard_container}>
    <div className={styles.blogcard_image_container}>
     <img className={styles.blogcard_image} 
     src={props?.image}
     alt={props?.title}
     />
    </div>
    <div className={styles.blogcard_body_container}>
        <h2>{props?.title}</h2>
        <p>{props?.content}</p>
    </div>
    <div className={styles.blogcard_footer_container}>
        <small>{props?.updatedAt}</small>
        <button
        className={UtilityStyles.primary_btn}>
            Read More</button>
    </div>
    </div>
    </>
}

export default BlogCard