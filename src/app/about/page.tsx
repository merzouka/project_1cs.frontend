import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8 font-sans">
      <article className="bg-white p-6 mt-4 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          À propos de notre Plateforme de Gestion du Hajj
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Bienvenue sur Notre Plateforme
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Notre plateforme est conçue pour faciliter le voyage du pèlerinage
            du Hajj pour les musulmans du monde entier. Nous proposons une gamme
            de services pour aider les pèlerins à organiser leur voyage de
            manière efficace.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Nos Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Voici comment nous simplifions le processus du Hajj :
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4">
            <li>
              <strong>
                Inscription au tirage au sort pour le pèlerinage du Hajj :
              </strong>{" "}
              Les pèlerins peuvent s'inscrire sur notre plateforme pour
              participer au tirage au sort afin d'obtenir une place pour le
              Hajj.
            </li>
            <li>
              <strong>Tirage au sort :</strong> Nous organisons le tirage au
              sort de manière transparente et équitable pour sélectionner les
              pèlerins qui pourront effectuer le Hajj.
            </li>
            <li>
              <strong>Organisation de la visite médicale :</strong> Nous aidons
              les pèlerins à planifier et à passer leur visite médicale
              obligatoire avant le départ pour s'assurer de leur aptitude
              physique au Hajj.
            </li>
            <li>
              <strong>Paiement des frais de pèlerinage :</strong> Les pèlerins
              peuvent régler leurs frais de pèlerinage de manière sécurisée et
              pratique via notre plateforme.
            </li>
            <li>
              <strong>Gestion des vols et des hôtels :</strong> Nous organisons
              les vols et les hébergements pour les pèlerins, en veillant à ce
              qu'ils aient un voyage confortable et des logements appropriés
              pendant le Hajj.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Notre Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Notre mission est de rendre le voyage du Hajj aussi fluide que
            possible pour les pèlerins. Nous nous engageons à garantir leur
            sécurité, leur confort et leur satisfaction spirituelle tout au long
            de leur pèlerinage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contactez-nous</h2>
          <p className="text-gray-700 leading-relaxed">
            Si vous avez des questions ou des besoins spécifiques, n'hésitez pas
            à nous contacter. Notre équipe est là pour vous aider à chaque étape
            de votre voyage du Hajj.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Email : info@hajjmanagement.com
            <br />
            Téléphone : +1234567890
          </p>
        </section>
      </article>
    </div>
  );
};

export default AboutPage;
