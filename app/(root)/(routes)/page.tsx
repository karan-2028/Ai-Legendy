import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return ( 
        <div>
           <UserButton afterSignoutUrl="/"/>
        </div>
     );
}
 
export default RootPage ;