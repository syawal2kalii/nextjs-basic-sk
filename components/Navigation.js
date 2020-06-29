import Link from 'next/link'
const Navigation = () =>(
    <div>
          <Link href="/"><a>Home </a></Link>
         <Link href="/blog"><a>Blog </a></Link>

         <style jsx >{`
            a{
                color:green;
            } 
            `}
        </style>
       
    </div>
)

export default Navigation