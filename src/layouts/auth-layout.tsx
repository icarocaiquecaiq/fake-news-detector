import { Outlet } from "react-router";
import banner from "@/assets/auth-banner.png";

function AuthLayout() {
    return (
        <>
            <div className="flex min-h-screen overflow-auto">
                <div
                    className="w-1/2 flex justify-center items-center"
                    style={{ backgroundColor: "#282f42" }}
                >
                    <img
                        src={banner}
                        alt="teste de alt"
                        className="object-contain aspect-auto w-3/4 h-3/4"
                    />
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default AuthLayout;
