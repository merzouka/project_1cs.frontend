import { Pages } from "@/constants/pages";
import { useUser } from "@/hooks/use-user";
import { AlertDialogDemo } from "../components/Cardvol";
import { DataTableDemo } from "../components/vols";
import { NavigationMenuDemo } from "../components/page slider";

const BookingsPage = () => {
    // TODO uncomment
    // const { validateAccess } = useUser();
    // validateAccess(Pages.bookings);

    return (
        < DataTableDemo />
    );

}

export default BookingsPage;
