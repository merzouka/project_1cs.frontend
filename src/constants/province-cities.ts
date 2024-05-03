export interface Province {
    province: number,
    cities: {
        id: string,
        city: string,
        population: number,
    }[],
}

export const cities: Province[] = [
    {
        province: 16,
        cities: [
            { city: 'Algiers', id: '3415811', population: 1012973369 },
            { city: 'Dar el Beida', id: '81509', population: 1012987727 },
            { city: 'Rouiba', id: '61984', population: 1012334934 },
            { city: 'El Marsa', id: '12100', population: 1012716943 }
        ]
    },
    {
        province: 31,
        cities: [
            { city: 'Oran', id: '852000', population: 1012126319 },
            { city: 'Es Senia', id: '96928', population: 1012779789 },
            { city: 'Bettioua', id: '18215', population: 1012337546 },
            { city: 'El Ancor', id: '11469', population: 1012598945 }
        ]
    },
    {
        province: 25,
        cities: [
            { city: 'Constantine', id: '448374', population: 1012275076 },
            { city: 'Didouche Mourad', id: '33266', population: 1012151355 },
            { city: 'Ain Abid', id: '31743', population: 1012017837 }
        ]
    },
    {
        province: 9,
        cities: [
            { city: 'Blida', id: '331779', population: 1012045589 },
            { city: 'Boufarik', id: '57162', population: 1012512259 },
            { city: 'Souma', id: '37461', population: 1012378735 },
            { city: 'Bougara', id: '38352', population: 1012764987 }
        ]
    },
    {
        province: 5,
        cities: [
            { city: 'Batna', id: '290645', population: 1012093229 },
            { city: "N'Gaous", id: '29504', population: 1012978553 }
        ]
    },
    {
        province: 19,
        cities: [
            { city: 'Setif', id: '288461', population: 1012981116 },
            { city: 'El Eulma', id: '155038', population: 1012292620 },
            { city: "'Ain Azel", id: '48487', population: 1012746080 },
            { city: "'Ain Arnat", id: '43551', population: 1012453452 },
            { city: 'Amoucha', id: '22767', population: 1012766595 },
            { city: 'Tala Yfassene', id: '20337', population: 1012098651 },
            { city: 'Arbaoun', id: '19383', population: 1012971347 },
            { city: 'Beni Fouda', id: '17667', population: 1012660842 },
            { city: "'Ain Abessa", id: '16770', population: 1012074116 },
            { city: "'Ain Roua", id: '11499', population: 1012529757 }
        ]
    },
    {
        province: 17,
        cities: [
            { city: 'Djelfa', id: '265833', population: 1012268984 },
            { city: 'Messaad', id: '102453', population: 1012278908 },
            { city: 'Ain Oussera', id: '101239', population: 1012469007 },
            { city: 'Moudjbara', id: '14052', population: 1012667528 }
        ]
    },
    {
        province: 23,
        cities: [ { city: 'Annaba', id: '257359', population: 1012600001 } ]
    },
    {
        province: 22,
        cities: [
            { city: 'Sidi Bel Abbes', id: '212935', population: 1012123414 },
            { city: 'Sidi Brahim', id: '10371', population: 1012460249 }
        ]
    },
    {
        province: 7,
        cities: [ { city: 'Biskra', id: '204661', population: 1012947247 } ]
    },
    {
        province: 12,
        cities: [ { city: 'Tebessa', id: '194461', population: 1012196375 } ]
    },
    {
        province: 14,
        cities: [ { city: 'Tiaret', id: '178915', population: 1012785868 } ]
    },
    {
        province: 6,
        cities: [
            { city: 'Béjaïa', id: '176139', population: 1012140298 },
            { city: 'Akbou', id: '52282', population: 1012950888 },
            { city: 'El Kseur', id: '29842', population: 1012893043 },
            { city: 'Tizi-n-Bechar', id: '21086', population: 1012925118 },
            { city: 'Tichi', id: '16546', population: 1012798792 },
            { city: 'Toudja', id: '9827', population: 1012114797 },
            { city: 'Seddouk Oufella', id: '8931', population: 1012348181 },
            { city: 'Boukhralfa', id: '8766', population: 1012066745 },
            { city: 'Tifra', id: '8547', population: 1012591585 },
            { city: 'Amalou', id: '8602', population: 1012045463 }
        ]
    },
    {
        province: 13,
        cities: [ { city: 'Tlemcen', id: '173531', population: 1012978325 } ]
    },
    {
        province: 34,
        cities: [
            {
                city: 'Bordj Bou Arreridj',
                id: '168346',
                population: 1012016677
            }
        ]
    },
    {
        province: 21,
        cities: [
            { city: 'Skikda', id: '163318', population: 1012619903 },
            { city: 'Azzaba', id: '56922', population: 1012969588 }
        ]
    },
    {
        province: 8,
        cities: [
            { city: 'Bechar', id: '165627', population: 1012371820 },
            { city: 'Abadla', id: '14364', population: 1012262770 },
            { city: 'Beni Ounif', id: '5628', population: 1012327989 }
        ]
    },
    {
        province: 2,
        cities: [ { city: 'Chlef', id: '155134', population: 1012772239 } ]
    },
    {
        province: 41,
        cities: [ { city: 'Souk Ahras', id: '155259', population: 1012419619 } ]
    },
    {
        province: 28,
        cities: [
            { city: "M'sila", id: '150000', population: 1012857730 },
            { city: 'Bou Saada', id: '111787', population: 1012931222 }
        ]
    },
    {
        province: 27,
        cities: [ { city: 'Mostaganem', id: '145696', population: 1012061703 } ]
    },
    {
        province: 26,
        cities: [
            { city: 'Medea', id: '138355', population: 1012758282 },
            { city: 'Bir Ghbalou', id: '11016', population: 1012249358 }
        ]
    },
    {
        province: 15,
        cities: [
            { city: 'Tizi Ouzou', id: '135088', population: 1012126997 },
            { city: 'Azazga', id: '34683', population: 1012087552 },
            { city: 'Boghni', id: '31263', population: 1012740129 },
            {
                city: "L'Arbaa Nait Irathen",
                id: '29376',
                population: 1012117061
            },
            { city: 'Timizart', id: '28996', population: 1012767619 },
            { city: 'Freha', id: '24228', population: 1012372550 },
            { city: 'Mekla', id: '24237', population: 1012384530 },
            { city: 'Beni Douala', id: '21551', population: 1012742443 },
            { city: "'Ain el Hammam", id: '20401', population: 1012595495 },
            { city: 'Tirmitine', id: '19027', population: 1012932001 },
            { city: 'Tizi Rached', id: '17161', population: 1012966884 },
            { city: 'Ain Zaouia', id: '17320', population: 1012695288 },
            { city: 'Azeffoun', id: '16847', population: 1012290725 },
            { city: 'Ouadhia', id: '15771', population: 1012312650 },
            { city: 'Boudjima', id: '15628', population: 1012379618 },
            { city: 'Tizi-n-Tleta', id: '15479', population: 1012925920 },
            { city: 'Ait Yaich', id: '14439', population: 1012677951 },
            { city: 'Iflissen', id: '14311', population: 1012326451 },
            { city: 'Mechtras', id: '12683', population: 1012201497 },
            { city: 'Arhribs', id: '12474', population: 1012696122 },
            { city: 'Iferhounene', id: '12460', population: 1012745524 },
            { city: 'Yakouren', id: '12203', population: 1012612535 },
            { city: 'Tigzirt', id: '11962', population: 1012150824 },
            { city: 'Souama', id: '9954', population: 1012240654 },
            { city: 'Bou Nouh', id: '9731', population: 1012718665 },
            { city: 'Ifigha', id: '9160', population: 1012938624 }
        ]
    },
    {
        province: 39,
        cities: [ { city: 'El Oued', id: '134699', population: 1012148937 } ]
    },
    {
        province: 3,
        cities: [
            { city: 'Laghouat', id: '134372', population: 1012233848 },
            { city: 'Tadjmout', id: '24320', population: 1012533662 }
        ]
    },
    {
        province: 18,
        cities: [
            { city: 'Jijel', id: '131513', population: 1012782547 },
            { city: 'El Milia', id: '83931', population: 1012706826 }
        ]
    },
    {
        province: 30,
        cities: [
            { city: 'Ouargla', id: '133024', population: 1012425687 },
            { city: 'Hassi Messaoud', id: '45147', population: 1012339655 },
            { city: 'Ben Nasseur', id: '10330', population: 1012048018 }
        ]
    },
    {
        province: 48,
        cities: [ { city: 'Relizane', id: '130094', population: 1012939885 } ]
    },
    {
        province: 20,
        cities: [ { city: 'Saida', id: '128413', population: 1012285874 } ]
    },
    {
        province: 24,
        cities: [ { city: 'Guelma', id: '120004', population: 1012266321 } ]
    },
    {
        province: 47,
        cities: [ { city: 'Ghardaia', id: '120000', population: 1012074690 } ]
    },
    {
        province: 4,
        cities: [
            { city: 'Ain Beida', id: '116064', population: 1012021090 },
            { city: 'Oum el Bouaghi', id: '100821', population: 1012958880 },
            { city: "Ain M'Lila", id: '88441', population: 1012438002 }
        ]
    },
    {
        province: 40,
        cities: [
            { city: 'Khenchela', id: '108580', population: 1012495148 },
            { city: 'Babar', id: '28182', population: 1012018384 }
        ]
    },
    {
        province: 29,
        cities: [
            { city: 'Mascara', id: '108587', population: 1012738269 },
            { city: 'Tighenif', id: '62210', population: 1012981905 }
        ]
    },
    {
        province: 32,
        cities: [ { city: 'El Bayadh', id: '85577', population: 1012906892 } ]
    },
    {
        province: 46,
        cities: [ { city: 'Aïn Témouchent', id: '75558', population: 1012763655 } ]
    },
    {
        province: 11,
        cities: [
            { city: 'Tamanrasset', id: '76000', population: 1012765474 },
            { city: 'Abalessa', id: '9163', population: 1012479386 },
            { city: 'I-n-Amguel', id: '3030', population: 1012162135 }
        ]
    },
    {
        province: 38,
        cities: [ { city: 'Tissemsilt', id: '75197', population: 1012743339 } ]
    },
    {
        province: 10,
        cities: [
            { city: 'Bouira', id: '68545', population: 1012006499 },
            { city: 'Lakhdaria', id: '59746', population: 1012284313 },
            { city: 'Draa el Mizan', id: '38886', population: 1012563094 },
            { city: 'Kadiria', id: '22327', population: 1012278992 },
            { city: 'Aomar', id: '20532', population: 1012376964 },
            { city: 'Chorfa', id: '16173', population: 1012035343 },
            {
                city: 'Ouled Sidi Brahim',
                id: '14499',
                population: 1012821401
            },
            { city: 'Takerbouzt', id: '14000', population: 1012858445 },
            { city: 'El Adjiba', id: '12486', population: 1012383350 },
            { city: 'Bechloul', id: '11775', population: 1012563877 },
            { city: 'Bordj Okhriss', id: '10467', population: 1012057188 },
            { city: 'Ouled Rached', id: '9311', population: 1012727170 }
        ]
    },
    {
        province: 1,
        cities: [
            { city: 'Adrar', id: '68276', population: 1012462113 },
            { city: 'Reggane', id: '20402', population: 1012709576 },
            { city: 'Timoktene', id: '18598', population: 1012254407 },
            { city: 'Sali', id: '13138', population: 1012996789 },
            { city: 'Charouine', id: '11347', population: 1012755999 }
        ]
    },
    {
        province: 35,
        cities: [
            { city: 'Boudouaou', id: '56398', population: 1012554481 },
            { city: 'Boumerdès', id: '41685', population: 1012627486 },
            {
                city: 'Khemis el Khechna',
                id: '76474',
                population: 1012679229
            },
            { city: 'Bordj Menaiel', id: '64820', population: 1012287430 },
            { city: 'Ouled Moussa', id: '45770', population: 1012623458 },
            { city: 'Dellys', id: '32954', population: 1012717910 },
            { city: 'Draa Ben Khedda', id: '31382', population: 1012011041 },
            { city: 'Tizi Gheniff', id: '29409', population: 1012794312 },
            { city: 'Beni Amrane', id: '23621', population: 1012420167 },
            { city: 'Makouda', id: '23388', population: 1012786926 },
            { city: 'Tadmait', id: '22838', population: 1012245949 },
            { city: 'Naciria', id: '22431', population: 1012065880 },
            { city: 'Djinet', id: '21966', population: 1012989318 },
            { city: 'Thenia', id: '21439', population: 1012908635 },
            { city: 'Sidi Daoud', id: '16900', population: 1012618002 },
            { city: 'Afir', id: '13223', population: 1012675026 },
            { city: 'Si Mustapha', id: '12087', population: 1012130143 },
            { city: 'Sidi Namane', id: '10688', population: 1012820383 },
            { city: "Ben N'Choud", id: '9985', population: 1012044380 }
        ]
    },
    {
        province: 37,
        cities: [ { city: 'Tindouf', id: '45610', population: 1012450434 } ]
    },
    {
        province: 58,
        cities: [ { city: 'El Golea', id: '40195', population: 1012834851 } ]
    },
    {
        province: 55,
        cities: [ { city: 'Touggourt', id: '39409', population: 1012546670 } ]
    },
    {
        province: 49,
        cities: [ { city: 'Timimoun', id: '33060', population: 1012351010 } ]
    },
    {
        province: 53,
        cities: [ { city: 'I-n-Salah', id: '32518', population: 1012201146 } ]
    },
    {
        province: 36,
        cities: [ { city: 'El Tarf', id: '25594', population: 1012205687 } ]
    },
    {
        province: 42,
        cities: [ { city: 'Tipasa', id: '25225', population: 1012866308 } ]
    },
    {
        province: 33,
        cities: [
            { city: 'Illizi', id: '17252', population: 1012499058 },
            { city: 'I-n-Amenas', id: '9225', population: 1012221429 }
        ]
    },
    {
        province: 50,
        cities: [ { city: 'Bordj Mokhtar', id: '16437', population: 1012945794 } ]
    },
    {
        province: 45,
        cities: [
            { city: 'Naama', id: '16251', population: 1012850542 },
            { city: 'Mecheria', id: '65043', population: 1012958256 },
            { city: 'Ain Sefra', id: '63420', population: 1012884513 }
        ]
    },
    {
        province: 56,
        cities: [ { city: 'Djanet', id: '14655', population: 1012827195 } ]
    },
    {
        province: 52,
        cities: [ { city: 'Beni Abbes', id: '10885', population: 1012633792 } ]
    },
    {
        province: 54,
        cities: [ { city: 'In Guezzam', id: '7045', population: 1012000031 } ]
    },
    {
        province: 44,
        cities: [
            { city: 'Ain Defla', id: '', population: 1012656497 },
            { city: 'Khemis Miliana', id: '84574', population: 1012116292 }
        ]
    },
    {
        province: 43,
        cities: [
            { city: 'Mila', id: '', population: 1012656063 },
            { city: 'Chelghoum el Aid', id: '82560', population: 1012048079 }
        ]
    },
    {
        province: 51,
        cities: [ { city: 'Ouled Djellal', id: '', population: 1012109892 } ]
    },
    {
        province: 57,
        cities: [ { city: "El M'Ghair", id: '', population: 1012153214 } ]
    }
]

