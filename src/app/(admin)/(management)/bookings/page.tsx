import { Pages } from "@/constants/pages";
import { useUser } from "@/hooks/use-user";
import { AlertDialogDemo } from "../components/deg";
import { DataTableDemo } from "../components/texting";
import { NavigationMenuDemo } from "../components/page slider";
import { AlertDialogDemo2 } from "../components/card2";

const BookingsPage = () => {
    // TODO uncomment
    // const { validateAccess } = useUser();
    // validateAccess(Pages.bookings);

    return (
        <DataTableDemo />
    );

}

export default BookingsPage;
