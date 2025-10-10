import { Outlet } from "react-router";

function ContentLayout() {
    return (
        <>
            <div>
                <div>header</div>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <div>footer</div>
            </div>
        </>
    );
}

export default ContentLayout;
