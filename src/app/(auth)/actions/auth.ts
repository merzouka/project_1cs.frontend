
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function login(router: AppRouterInstance | undefined): Promise<undefined> {
        /* 
        return axios.post(`${BACKEND_URL}/api/auth/login`, {
            email: values.email,        
            password: values.password,
        })
            .then((response) => {
                setIsLoginProcessing(false);
                const id = response.data.id;
                router.push(`/profile/${id}`);
            })
            .catch((error) => {
                setIsLoginProcessing(false);
                if (error.response) {
                    toast({
                        title: "Identifiants incorrects",
                        description: "Veuillez réessayer",
                        variant: "destructive",
                    })
                    return;
                }

                toast({
                    title: "Erreur de connexion",
                    description: "Impossible de se connecter au serveur",
                    variant: "destructive",
                    action: <ToastAction altText="Actualiser" onClick={router.refresh}>Actualiser</ToastAction>,
                });
                
            });
         */

    return new Promise((resolve) => setTimeout(resolve, 3000))
}
