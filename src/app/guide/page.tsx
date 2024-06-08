import React from "react";
import Link from "next/link";
import Image from "next/image";
import ihramImage from "../../../public/home/ihram-guide.jpg";
import tawafImage from "../../../public/home/tawaf-guide.jpg";
import saiiImage from "../../../public/home/saii-guide.jpg";
import tarwiaImage from "../../../public/home/tarwia-guide.jpeg";
import waqfImage from "../../../public/home/waqf-guide.jpg";
import zabhImage from "../../../public/home/zabh-guide.jpg";
import ifadaaImage from "../../../public/home/ifadaa-guide.webp";
import ramiiImage from "../../../public/home/ramii-guide.png";
import wadaaImage from "../../../public/home/wadaa-guide.jpg";

const IhramGuide = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8 font-sans">
      <article className="bg-white p-6 mt-4 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Guide du Hajj</h1>
        <h1 className="text-3xl font-bold mb-4">Ihram</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={ihramImage}
          alt="Image d'Ihram"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            L'Ihram est un état sacré que les musulmans doivent atteindre avant
            de commencer les rituels du Hajj ou de la Omra. Cet état est atteint
            par l'intention (niyyah) et en portant des vêtements spécifiques
            appelés "ihram". Les hommes portent deux pièces de tissu non
            cousues, tandis que les femmes peuvent porter n'importe quel
            vêtement modeste qui respecte les règles de l'Islam.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituels de l'Ihram</h2>
          <p className="text-gray-700 leading-relaxed">
            Avant d'entrer en état d'Ihram, les pèlerins doivent se laver
            complètement (ghusl), se couper les ongles, et se raser ou se couper
            les cheveux. Ensuite, ils mettent les vêtements d'Ihram et font une
            intention claire de commencer le Hajj ou la Omra.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pendant l'Ihram, certaines actions sont interdites, comme se raser,
            couper les ongles, porter du parfum, chasser, se marier ou avoir des
            relations sexuelles. Il est également interdit de porter des
            vêtements cousus pour les hommes, tandis que les femmes ne doivent
            pas couvrir leur visage ni leurs mains.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">La Talbiyah</h2>
          <p className="text-gray-700 leading-relaxed">
            Une fois en état d'Ihram, les pèlerins récitent la Talbiyah, une
            prière spéciale pour montrer leur intention de faire le Hajj ou la
            Omra. La Talbiyah se récite comme suit : "Labbayka Allahumma
            Labbayk, Labbayka Laa Shareeka Laka Labbayk, Innal-Hamda
            Wann-Ni’mata Laka Wal-Mulk, Laa Shareeka Lak".
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Entrer en état d'Ihram est une étape cruciale du Hajj et de la Omra.
            C'est un moment de purification et de préparation spirituelle pour
            les rituels à venir. En respectant les règles de l'Ihram, les
            pèlerins montrent leur dévotion et leur soumission à Allah.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Tawaf al Qudum</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={tawafImage}
          alt="Image du Tawaf al Qudum"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al Qudum, ou circumambulation d'arrivée, est l'un des
            premiers rituels effectués par les pèlerins à leur arrivée à La
            Mecque pour le Hajj. C'est une Sunna qui marque le début du
            pèlerinage.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al Qudum est une manière de saluer la Kaaba, la Maison
            Sacrée d'Allah. Il exprime l'amour, le respect et l'adoration des
            pèlerins envers Allah. Cette circumambulation consiste en sept tours
            autour de la Kaaba dans le sens inverse des aiguilles d'une montre.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Avant de commencer le Tawaf, les pèlerins doivent être en état
            d'Ihram. Ils se dirigent ensuite vers la Masjid al-Haram et entrent
            dans la mosquée en récitant des prières spécifiques. Le Tawaf
            commence à l'angle de la Pierre Noire (Hajar al-Aswad), où les
            pèlerins font un geste de salutation ou touchent la pierre.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les pèlerins accomplissent sept tours autour de la Kaaba en récitant
            des invocations et des prières. Après avoir terminé les sept tours,
            ils se dirigent vers la station de Maqam Ibrahim pour prier deux
            unités de prière (rak'ahs).
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al Qudum est une expérience spirituelle intense qui prépare
            les pèlerins aux rituels suivants du Hajj. C'est un moment de
            purification et de dévotion, rapprochant les pèlerins de leur
            Créateur.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Saii</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={saiiImage}
          alt="Image du Sa'i"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Sa'i est un rituel essentiel du Hajj et de la Omra, consistant à
            parcourir à sept reprises la distance entre les monts Safa et
            Marwah. Ce rituel commémore la recherche d'eau de Hajar, la femme du
            prophète Ibrahim (Paix soit sur lui), pour son fils Ismaël.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Sa'i symbolise la patience, la persévérance et la foi en Allah.
            Il rappelle aux pèlerins l'épreuve et le dévouement de Hajar, et par
            extension, l'importance de la confiance en Allah dans les moments de
            difficulté.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Après avoir accompli le Tawaf, les pèlerins se dirigent vers Safa
            pour commencer le Sa'i. Ils récitent des invocations spécifiques au
            début de chaque parcours entre Safa et Marwah. Le Sa'i commence à
            Safa et se termine à Marwah, avec un total de sept parcours
            (aller-retour comptant comme deux).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les hommes sont encouragés à accélérer le pas dans une section
            spécifique de chaque parcours, tandis que les femmes marchent à un
            rythme normal. À chaque montée sur Safa et Marwah, les pèlerins
            lèvent les mains en prière et en supplication.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Sa'i est un moment de réflexion et de dévotion intense, où les
            pèlerins se rappellent la foi et la résilience de Hajar. En
            accomplissant ce rituel, ils renforcent leur propre foi et leur lien
            avec Allah.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Jour de Tarwia</h1>
        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={tarwiaImage}
          alt="Image du Jour de Tarwia"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le jour de Tarwia, qui tombe le 8ème jour de Dhul Hijjah, marque le
            début officiel des rituels du Hajj. Ce jour-là, les pèlerins se
            préparent à quitter La Mecque pour Mina, où ils passeront la nuit
            avant de se diriger vers Arafat.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Préparation</h2>
          <p className="text-gray-700 leading-relaxed">
            La préparation pour le jour de Tarwia commence par la purification
            rituelle et l'intention d'accomplir le Hajj. Les pèlerins revêtent
            l'habit d'Ihram et récitent la Talbiyah, une prière spéciale répétée
            fréquemment pendant le Hajj.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ils doivent également s'assurer qu'ils ont tous les éléments
            nécessaires pour leur séjour à Mina, y compris de l'eau, de la
            nourriture et des vêtements appropriés.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Le Séjour à Mina</h2>
          <p className="text-gray-700 leading-relaxed">
            Une fois arrivés à Mina, les pèlerins passent la journée et la nuit
            en prière et en méditation. Ils accomplissent les prières de Dhuhr,
            Asr, Maghrib et Isha, et passent la nuit en prière et en
            supplication.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Le séjour à Mina prépare les pèlerins pour le jour suivant, qui est
            le jour de Arafat, considéré comme le point culminant du Hajj.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le jour de Tarwia est une étape importante dans le pèlerinage du
            Hajj, marquant le début des rituels principaux. C'est un temps de
            préparation spirituelle et physique, alors que les pèlerins se
            dirigent vers les moments les plus sacrés de leur voyage.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Waqf à Arafat</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={waqfImage}
          alt="Image du Waqf à Arafat"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Waqf à Arafat est l'un des moments les plus importants et les
            plus sacrés du Hajj. Ce rituel, qui se déroule le 9ème jour de Dhul
            Hijjah, est considéré comme le pilier fondamental du Hajj, sans
            lequel le pèlerinage n'est pas valide.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le mot "Waqf" signifie "stationnement" ou "arrêt". Pendant le Hajj,
            le Waqf à Arafat consiste à passer l'après-midi en prière et en
            méditation sur le mont Arafat, où le Prophète Muhammad (paix et
            bénédictions sur lui) a prononcé son dernier sermon.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ce moment symbolise la proximité avec Allah et le rassemblement de
            tous les pèlerins dans un même lieu pour demander pardon et
            miséricorde.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Waqf commence après la prière de Dhuhr et dure jusqu'au coucher
            du soleil. Les pèlerins passent ce temps en prière, en récitation du
            Coran et en invocations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Il est recommandé de passer le temps en prières individuelles et
            collectives, en demandant pardon à Allah pour les péchés passés et
            en faisant des vœux pour l'avenir. Ce moment est une opportunité
            unique de renouveler sa foi et sa dévotion.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Waqf à Arafat est le cœur du Hajj, un moment de profonde
            spiritualité et de réflexion. Il représente l'essence du pèlerinage,
            où les musulmans se tiennent devant Allah en toute humilité,
            cherchant son pardon et sa guidance.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Le Sacrifice (Zabh)</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={zabhImage}
          alt="Image du Sacrifice (Zabh)"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le sacrifice, ou "Zabh", est un rituel important du Hajj qui
            commémore l'acte d'Ibrahim (Abraham) lorsque Dieu lui a demandé de
            sacrifier son fils Ismaël. C'est aussi une obligation pour les
            pèlerins du Hajj.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le sacrifice symbolise l'obéissance à Dieu, la gratitude et le
            partage. Il rappelle la soumission totale d'Ibrahim à la volonté de
            Dieu et l'importance du sacrifice dans la vie d'un croyant.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Le Zabh est également une occasion pour les musulmans de partager la
            nourriture avec les nécessiteux, renforçant ainsi les liens de
            solidarité et de fraternité dans la communauté.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Le sacrifice est effectué après le jet des pierres (Ramy
            al-Jamaraat) pendant les jours de Tachriq (les jours de la fête).
            Les pèlerins sacrifient un animal comme une vache, un mouton, ou une
            chèvre, en commémoration de l'acte d'Ibrahim.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Une partie de la viande est consommée par les pèlerins, une partie
            est offerte aux nécessiteux et une autre partie est réservée aux
            proches et à la famille.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le sacrifice (Zabh) est un acte d'adoration et de dévotion pendant
            le Hajj. Il rappelle aux croyants l'importance de l'obéissance à
            Dieu et de la générosité envers les autres. C'est aussi un moment de
            célébration et de partage au sein de la communauté musulmane.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Tawaf al-Ifadaa</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={ifadaaImage}
          alt="Image du Tawaf al-Ifadaa"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Ifadaa est l'un des rituels les plus importants du Hajj.
            C'est la circumambulation de la Kaaba qui doit être effectuée après
            le séjour à Mina et le jet des pierres (Ramy al-Jamaraat).
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Ifadaa est une réaffirmation de la dévotion et de la
            soumission à Allah. Il symbolise le retour des pèlerins à La Mecque
            après leur séjour à Mina, et leur engagement renouvelé envers leur
            foi et leur pratique religieuse.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Il marque également le début du séjour des pèlerins à La Mecque
            après le rituel de la stoning of the devil (Ramy al-Jamaraat).
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Ifadaa est effectué en sept tours autour de la Kaaba,
            comme le Tawaf al-Qudum (arrivée à La Mecque). C'est un acte de
            dévotion et de piété, où les pèlerins glorifient et louent Allah
            tout en effectuant la circumambulation.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les pèlerins doivent veiller à respecter les règles de décence et de
            modestie pendant le Tawaf, en se concentrant sur leur adoration et
            leur connexion spirituelle avec Allah.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Ifadaa est un acte spirituel significatif pendant le
            Hajj, symbolisant le retour des pèlerins à La Mecque après leur
            séjour à Mina. C'est un moment de réaffirmation de la foi et de la
            dévotion à Allah.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">
          Le Jet des Pierres (Ramy al-Jamaraat)
        </h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={ramiiImage}
          alt="Image du Jet des Pierres (Ramy al-Jamaraat)"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Ramy al-Jamaraat, ou le jet des pierres, est l'un des rites du
            Hajj qui symbolise la lutte contre le diable et le rejet du mal. Il
            est effectué le 10ème jour de Dhul Hijjah à Mina.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le jet des pierres représente le rejet des tentations et des péchés,
            et l'engagement à suivre le chemin de la droiture et de la piété. Il
            commémore les actions d'Ibrahim (Abraham) qui a été tenté par Satan
            mais a rejeté ses insinuations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ce rituel rappelle également le sacrifice et la soumission totale à
            la volonté de Dieu.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Les pèlerins jettent des pierres sur trois stèles qui représentent
            Satan, symbolisant le rejet du mal. Ils prononcent des invocations à
            chaque jet pour renouveler leur engagement envers Dieu.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Après le jet des pierres, les pèlerins peuvent sacrifier un animal
            pour le Hajj, accomplir le Tawaf al-Ifadaa et le Sa'i, et raser ou
            couper les cheveux.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Ramy al-Jamaraat est un acte symbolique important du Hajj,
            représentant la lutte contre le mal et l'engagement envers la piété.
            Il rappelle aux pèlerins l'importance du rejet des tentations et de
            la soumission à la volonté de Dieu.
          </p>
        </section>
        <h1 className="text-3xl font-bold mb-4">Tawaf al-Wadaa</h1>

        <Image
          className="w-full h-auto mb-6 rounded-lg"
          src={wadaaImage}
          alt="Image du Tawaf al-Wadaa"
          width={800} // specify the width
          height={600} // specify the height
        />
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Wadaa, également appelé "Circumambulation d'Adieu", est
            le dernier Tawaf qu'un pèlerin effectue autour de la Kaaba avant de
            quitter La Mecque. C'est l'un des derniers rituels du Hajj.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Signification</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Wadaa marque la conclusion du Hajj et symbolise le
            départ du pèlerin de la Maison d'Allah. C'est un moment chargé
            d'émotion où le pèlerin prend congé de la Kaaba et de La Mecque
            après avoir accompli les rites du Hajj.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Il représente également un adieu à la Maison sacrée et une promesse
            de retour pour ceux qui espèrent revenir pour le Hajj à l'avenir.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Rituel</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Wadaa consiste en sept circumambulations autour de la
            Kaaba, tout comme les autres Tawaf. Les pèlerins effectuent ce Tawaf
            avant de quitter La Mecque.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Après le Tawaf al-Wadaa, les pèlerins doivent accomplir les derniers
            rites du Hajj, notamment les adieux à la Kaaba et la prière d'adieu.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Tawaf al-Wadaa marque la fin du pèlerinage du Hajj et symbolise
            le départ du pèlerin de la Maison sacrée. C'est un moment émouvant
            où le pèlerin prend congé de La Mecque et de la Kaaba, mais avec
            l'espoir de revenir un jour pour accomplir le Hajj à nouveau.
          </p>
        </section>
      </article>
    </div>
  );
};

export default IhramGuide;
