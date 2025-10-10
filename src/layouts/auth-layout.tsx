import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <>
            <div className="min-h-screen overflow-auto">
                <Outlet />
            </div>
        </>
    );
}

export default AuthLayout;
