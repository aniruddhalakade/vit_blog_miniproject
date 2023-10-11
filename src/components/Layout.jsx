import { Outlet } from "react-router-dom";
import Defheader from "./defheader";

export default function Layout(){
    return ( 
        <main>
            <Defheader />
            <Outlet />
        </main>

    );

}