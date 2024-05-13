import { Pages } from "@/constants/pages";
import { useUser } from "@/hooks/use-user";

const RolesPage = () => {
    const { validateAccess } = useUser();
    validateAccess(Pages.roles);

    return (
        <div>Hello Roles Page</div>
    );
}

export default RolesPage;
