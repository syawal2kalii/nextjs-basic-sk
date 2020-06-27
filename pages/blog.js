import Link from "next/link";

export default function blog() {
  return (
    <div>
      <div>
        <h1>Welcom to Blog</h1>
      </div>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/"><a> Home</a></Link>
    </div>
  );
}
