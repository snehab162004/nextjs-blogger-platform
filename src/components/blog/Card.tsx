// styles
import styles from '@/styles/Blogcard.module.scss'
import UtilityStyles from '@/styles/Utility.module.scss'

const BlogCard = () => {
    return<>
    <div className={styles.blogcard_container}>
    <div className={styles.blogcard_image_container}>
     <img className={styles.blogcard_image} 
     src={'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'}
     alt={'Blog image'}
     />
    </div>
    <div className={styles.blogcard_body_container}>
        <h2>Blog Title</h2>
        <p>Blog Description</p>
    </div>
    <div className={styles.blogcard_footer_container}>
        <small>07 Dec 2023</small>
        <button
        className={UtilityStyles.primary_btn}>
            Read More</button>
    </div>
    </div>
    </>
}

export default BlogCard