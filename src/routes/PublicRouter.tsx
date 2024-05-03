import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../stories/Header";
const PublicRouter = () => {
    return (
        <div>
            <div>Public Router</div>
            <Outlet/>
        </div>
    )
}
export default PublicRouter;