import axios from 'axios'
import Link from 'next/link'
function Users({users}) {
    return (
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                            <Link as={"/users/"+user.id} href="/users/[id]">
                                <a>{user.username}</a>
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps(){
    // var user;
    //  axios.get('https://jsonplaceholder.typicode.com/users').then(users=>{
    //     console.log(typeof(users.data));
    //     this.user = users.data // bgmna caranya users.datanya bisa global dan typenya object ?
    //     // user = users.data 
    //     // var user = users.data
    // });
    // console.log("nilai user : "+user) // undefined ki di sini?

    var user = await axios.get('https://jsonplaceholder.typicode.com/users')
    // const users = JSON.stringify(user)
    // console.log(users)

    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await res.json()
  
     

    return {
        props : {
            users : user.data
        }
    }
}

export default Users
