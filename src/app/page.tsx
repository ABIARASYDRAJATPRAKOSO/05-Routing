import Link from "next/link";

export default function Home() {
    return (
      <div>
        <h1>Welcome to Home</h1>
        <Link href='/profile'>Profile</Link><br />
        <Link href='/about'>About</Link><br /><br />

        <Link href='/products'>Products List</Link><br /><br />
        <Link href='/products/1'>Product Page-1</Link><br />
        <Link href='/products/2'>Product Page-2</Link><br />
        <Link href='/products/3'>Product Page-3</Link><br /><br />

        <Link href='/blogs'>Blogs List</Link><br /><br />
        <Link href='/blogs/1'>Blog Page-1</Link><br /><br />
        <Link href='/blogs/1/reviews'>Blog-1 Review List</Link><br />
        <Link href='/blogs/1/reviews/1'>Blog-1 Review Page-1</Link><br />
        <Link href='/blogs/1/reviews/2'>Blog-1 Review Page-2</Link><br />
        <Link href='/blogs/1/reviews/3'>Blog-1 Review Page-3</Link><br /><br />

        <Link href='/blogs/2'>Blog Page-2</Link><br /><br />
        <Link href='/blogs/2/reviews'>Blog-2 Review List</Link><br />
        <Link href='/blogs/2/reviews/1'>Blog-2 Review Page-1</Link><br />
        <Link href='/blogs/2/reviews/2'>Blog-2 Review Page-2</Link><br />
        <Link href='/blogs/2/reviews/3'>Blog-2 Review Page-3</Link><br /><br />

        <Link href='/blogs/3'>Blog Page-3</Link><br /><br />
        <Link href='/blogs/3/reviews'>Blog-3 Review List</Link><br />
        <Link href='/blogs/3/reviews/1'>Blog-3 Review Page-1</Link><br />
        <Link href='/blogs/3/reviews/2'>Blog-3 Review Page-2</Link><br />
        <Link href='/blogs/3/reviews/3'>Blog-3 Review Page-3</Link><br /><br />

      </div> 
    );
}