ioPlannerSimulator
==================

Programmi jooksutamiseks on vaja [node.js](nodejs.org) 0.10.21<=.
Peale installi jooksuta programmi `node ~/tee/programmi/kataloogini`.
Teekidest on kasutatud [lodash'i](lodash.com).
Kõik konfitav on failis `config.json`:
 - **discSize**: planeeritava ketta suurus.
 - **startingDirection**[1|-1|"random"]: alustamise suund algoritmidele, mille puhul see mõtet omab.
 - **startingPosition**[0...discSize-1|"random"]: lugemispea asukoht alguses.
 - **algorithm**: jooksutatavad algoritmid. Väärtuseks on massiiv, mille elemendid on järgmisest nimistust: "clook", "cscan", "look", "noop", "scan", "sstf".
 - **reads**: Päringud kettale.
On eelprogrammeeritud ka kolm näidet iseloomustamaks erinevate algoritmide tugevaid ja nõrki kohti ning erinevusi, nende käivitamiseks: `node ~/tee/kataloogini/example*.js`
Klasside API on vägagi *self-explanatory* ning näide on olemas `index.js` failis.
