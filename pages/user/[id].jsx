import { withRouter, useRouter } from "next/router";

export const getStaticPaths=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    const path=data.map(el=>{return {params:{id:el.id.toString()}}})
    return {
        paths:path,
        fallback:false
    }   
}
export const getStaticProps=async(context)=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+context.params.id);
    const data=await res.json();
return {
    props:{user:data}
}
}
const Detail=(props)=>{
    const router=useRouter();
    let el=props.user;
    console.log(el)
    return <>
   <button onClick={()=>{
       router.push("/")
   }} style={{"backgroundColor":"lightblue", "padding":"20px", "border":"none", "borderRadius":"40%", "cursor":"pointer"}}> Go to Home Page</button>
      <div style={{"textAlign":"center", "border":"1px solid black", "margin":"10%"}} key={el.id}>
      
            <h1>Details of {el.name}</h1>
            <h3>Email:{el.email}</h3>
            <h3>Phone: {el.phone}</h3>
            <h3>Username: {el.username}</h3>
            <h3>Website: {el.website}</h3>
            <h3>Address: {el.address.street}, {el.address.city}, {el.address.zipcode}</h3>
            </div>
        </>
       {/* <h1>Details of {props.router.query.id}</h1>  */}
    
}
export default withRouter(Detail);