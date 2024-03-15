import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const img = './test.png'

const PostCard = ({post}) => {
  // console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={"/test.png"} alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard