import { useRouter,withRouter } from "next/router";

export const getStaticProps=async()=>{
    const res=await fetch ("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();
    return {props:{user:data}}
   }
   const User =({user})=>{
       const router=useRouter();
       const goTo=(e)=>{
           console.log(e.target.id)
        router.push(`/user/${e.target.id}`)
       }
       console.log(user)
       return <div style={{"width":"45%","margin":"auto"}}>
           <h1 style={{"textAlign":"center"}}>USERS LIST</h1>
           {user.map(el=>{return <div  style={{"textAlign":"center","backgroundColor":"lightBlue",}}><h3 style={{  "textAlign":"center", "cursor":"pointer"}}>{el.name}</h3>
            <button id={el.id}  style={{"backgroundColor":"black","color":"white","padding":"10px", "margin":"10px", "cursor":"pointer"}} onClick={goTo}>See more detail!</button></div>})}
       </div>
   }
   export default withRouter(User);