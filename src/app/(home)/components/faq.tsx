import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Question {
    id: string,
    display: string,
    content: string,
}

const questions: Question[] = [
    {
        id: "1",
        display: "Pour le tirage, ce site peut-il faire la distinction entre les personnes âgées et les non-âgées?",
        content: "Oui, lors de la configuration du tirage, le responsable peut spécifier le pourcentage de places réservées aux personnes âgées.",
    },
    {
        id: "2",
        display: "Est-ce que le site gère les paiements, les rendez-vous et les inscriptions au Hajj?",
        content: "Oui, ce site propose une interface plus simple pour les nouveaux Hadjadj pour s'inscrire au Hajj. De plus, il permet aux gagnants du tirage au sort de suivre leurs paiements et de gérer les résultats de leurs rendez-vous.",
    },
    {
        id: "3",
        display: "Le tirage au sort, alors?",
        content: "Le tirage au sort sera organisé par ville ou par groupe de villes attribué au responsable du tirage. Le système de tirage prend en charge deux algorithmes : basé sur l'âge et aléatoire. L'algorithme basé sur l'âge permet de réserver un certain pourcentage de places aux personnes âgées. Le tirage au sort peut être suivi par n'importe quel pèlerin inscrit sur le site.",
    },
    {
        id: "4",
        display: "Est-ce que le site permet au pèlerin de suivre l'avancement de son inscription au Hajj?",
        content: "Oui, le pèlerin peut se connecter à son compte et voir l'état de son inscription affiché sur son profil. Le statut est mis à jour chaque fois qu'une nouvelle étape du processus est franchie. Il y a un total de 5 étapes.",
    },
]

export const FAQ = () => {
    return (

        <Accordion type="single" collapsible className="w-full h-full px-24">
            {
                questions.map((question) => (
                    <AccordionItem key={question.id} value={`${question.id}`} className="border-b-0">
                        <AccordionTrigger className="drop-shadow-md shadow-slate-300 bg-white px-5 rounded-2xl mb-3">{question.display}</AccordionTrigger>
                        <AccordionContent className="px-3">{question.content}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>

    );
}
