import styles from "../styles/product.module.css";
import Link from "next/link";
import Image from "next/image"
export default function Home({ post }) {
  return (
    <div className={styles.container}>
<div className="image-wrapper ms-5 mt-5">
  <Image alt="..." src={post?.image} width={400} height={400} quality={70} />
</div>
       
       <div className={styles.des}>
       <h4>{post?.title}</h4>
         <h4>{post?.category}</h4>
        <p>{post?.description}</p>
        <h3>{post?.price} $</h3>
         </div>  
        
       <Link href= "/"><button className={styles.redirect}>Back TO Shop</button></Link>
         
       <Link href= "/CartPage"><button className={styles.cart}>Add To Cart</button></Link>
      
    </div>
  );
}

export async function getStaticProps({ params }) {
  let postId = params.postId;
  let post = await fetch(
    `https://fakestoreapi.com/products/${postId}`
  );
  post = await post.json();
  if (Object.keys(post).length === 0) {
    console.log("inside");
    return {
      notFound: true,
      props: {},
      revalidate: 10,
    };
  }

  return {
    props: {
      post: post || null,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  let posts = await fetch("https://fakestoreapi.com/products");
  posts = await posts.json();
  let paths = [];
  posts.forEach((item) => {
    paths.push({
      params: {
        postId: item.id.toString(),
      },
    });
  });

  return {
    paths,
    fallback: true,
  };
}