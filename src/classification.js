const classification = {
    'H':'Ordinary chondrite - Accounting for approximately 40% of all those catalogued, they have high iron-abundance.  A probable parent body for this group is the S-type asteroid 6 Hebe, with less likely candidates being 3 Juno and 7 Iris.',
    'L':'Ordinary chondrite - Accounting for approximately 35% of all those catalogued, they have relatively low iron-abundance.  Many of the L chondrite meteors may have their origin in the Ordovician meteor event, which developed craters in Scandanavia and North America.',
    'LL':'Ordinary chondrite - Accounting for approximately 8% of all catalogued.  The Chelyabinsk meteorite, classified as LL, famously caused shockwaves that damaged approx 7,200 Russian buildings in 2003.  The largest fragment recovered from Lake Chebarkul weighed 540kg.',
    'CI':'Carbonaceous chondrite - Rare stony meteorites discovered in France, Canada, India, and Tanzania.  CI chondrites are very fragile and porous rocks, which easily disintegrate on their descent through the atmosphere.',
    'CV':'Carbonaceous chondrite - This group takes its name from Vigarano (Italy). Most of these chondrites belong to the petrologic type 3.',
    'CR':'Carbonaceous chondrite - The group takes its name from Renazzo (Italy). The best parent body candidate is 2 Pallas.',
    'CH':'Carbonaceous chondrite - CH chondrites may contain up to as much as 40% of metal.  That makes them one of the most metal-rich of any of the chondrite groups, second only to the CB chondrites and some ungrouped chondrites such as NWA 12273.',
    'CM':'Carbonaceous chondrite - The group takes its name from Mighei (Ukraine), but the most famous member is the extensively studied Murchison meteorite.  Murchison is petrologic type 2, which means that it experienced extensive alteration by water-rich fluids on its parent body before falling to Earth.',
    'CB':'Carbonaceous chondrite - The group takes its name from the most representative member: Bencubbin (Australia).   Despite containing over 50% nickel-iron metal, they are not classified as mesosiderites due to similarities with CR chondrites.',
    'CK':'Carbonaceous chondrite - This group takes its name from Karoonda (Australia). These chondrites are closely related to the CO and CV groups.  Onlookers described the colour on the flames of Karoonda as changing from red to blue to yellow.',
    'CO':'Carbonaceous chondrite - The group takes its name from Ornans (France). The chondrule size is only about 0.15 mm on average. They are all of petrologic type 3.  Moss (Norway) and Kainsaz (Russia) are two of the most recent falls.',
    'C':'Carbonaceous chondrite - Ungrouped',
    'E':'Enstatite chondirite - A rare form of meteorite thought to comprise only about 2% of the chondrites that fall on Earth. Only about 200 E-Type chondrites are currently known.  The largest known recorded E-type chondrite fall happened in the town of Abee, in Alberta in 1952, weighing 107kg.',
    'EH':'Enstatite chondirite - EH (high enstatite) chondrites contain small chondrules (~0.2 millimetres (0.0079 in)) and high ratios of siderophile elements to silicon. Somewhat more than 10% of the rock is composed of metal grains.',
    'EL':'Enstatite chondirite - EL (low-iron) chondrites contain larger chondrules (>0.5 millimetres (0.020 in)), and low ratios of siderophile elements to silicon. Fe-Ni metal contains ~1 wt% silicon.',
    'R':'Chondrite (other) - A very rare group, Rumuruti type chondrites have much more dusty matrix material.  Nearly all the metal they contain is oxidized or in the form of sulfides.',
    'K':'Chondrite (other) - Three chondrites form what is known as the K (Kakangari type) grouplet: Kakangari, LEW 87232, and Lea Co. 002.',
    'Diogenite':'Asteroidal achondrites - Currently believed to originate from deep within the crust of the asteroid 4 Vesta, these crystals are primarily magnesium-rich orthopyroxene.  Diogenes of Apollonia was the first to suggest an outer space origin for meteorites.',
    'Eucrite':'Asteroidal achondrites - get their name from the Greek word eukritos meaning "easily distinguished". This refers to the silicate minerals in them, which can be easily distinguished because of their relatively large grain size.',
    'Howardite':'Asteroidal achondrites - Named for Edward Howard, a pioneer of meteoritics, they are a regolith breccia consisting mostly of eucrite and diogenite fragments.  Regolith breccias are not found on Earth due to a lack of regolith on bodies which have an atmosphere.',
    'Angrite':'Asteroidal achondrites -  Basaltic rocks, often having porosity, with vesicle diameters of up to 2.5 centimetres.  They are the oldest igneous rocks, with crystallization ages of around 4.55 billion years.  12 known secimens.',
    'Aubrite':'Asteroidal achondrites - Typically light-colored with a brownish fusion crust, their igneous origin separates them from primitive enstatite achondrites and means they originated in an asteroid. Named for Aubres which fell near Nyons, France, in 1836.',
    'Ureilite':'Asteroidal achondrites - Unique mineralogical composition, tend to have a high percentage of carbon (average 3% by weight) in the form of graphite and nanodiamonds.  Named after the village Novy Urey in Russia, where a Urelite fell on 4 September 1886.',
    'Brachinite':'Asteroidal achondrites - Named after the Brachina meteorite, found in Southern Australia.  There are 30 such specimens, all almost entirely made from olivine.',
    'Pallasite':'Stony-iron meteorite consists of centimeter-sized olivine crystals of peridot quality in an iron-nickel matrix. Coarser metal areas develop Widmanstatten patterns upon etching.  These patterns consist of a fine interleaving of kamacite and taenite bands or ribbons called lamellae.',
    'Lodranite':'Primitive anchodrite - The lodranite group is named after Lodhran, Pakistan, where the type specimen fell on 1 October 1868.  Has roughly equal amounts of metal, olivine and pyroxene which make up most of the volume.',
    'Acapulcoite':'Primitive anchodrite - The acapulcoites are named after the only specimen of the group, with a witnessed fall. The Acapulca meteorite fell on 11 August 1976 near El Quemado Colony, Mexico.  A further 52 meteorite specimens have been classified as acapulcoites.',
    'Achondrite':'Stony meteorite that consists of material similar to terrestrial basalts or plutonic rocks, subject to melting and recrystallization on or within meteorite parent bodies. Contribute to >85% of total meteorite population.',
    'Chondrite':'Stony (non-metallic) meteorite formed when various types of dust and small grains in the early Solar System accreted to form primitive asteroids.  Contribute to >85% of total meteorite population.',
    'OC':'Ordinary Chrondite - They are by far the most numerous group and comprise about 87% of all finds.  It is likely that the ordinary chondrites comprise a detailed sample of but a few select asteroids which happen to have been in the right place at the right time to send many fragments toward Earth.',
    'Martian (chassignite)':'Achondrite - The only two Chassignites were found in France and Morocco in 1815 and 2000 respectively.  The Moroccan specimen was found by meteorite hunters Fectay and Bidault who named it "Diderot".',
    'Martian (nakhlite)':'Achondrite - The first Nakhlite fell in Egypt in 1911 an wieghed 10kg.  They are igneous, formed in Martian volcanic eruptions spanning 90 million years, then ejected from Mars by an asteroid impact 10.75 million years ago.',
    'Martian (shergottite)':'Achondrite - Roughly three-quarters of all Martian meteorites, named after a meteorite which fell in Sherghati, India 1865.  The Mojave crater (youngest of its size) has been identified as a potential source of these meteorites.',
    'Martian (basaltic breccia)':'Achondrite - 10 basaltic breccia meteorites make up this classification as a sub-division of martian meteorites.  Northwest Africa 7034 is a Martian meteorite believed to be the second oldest yet discovered, estimated at 2 billion years old and nicknamed Black Beauty.',
    'Martian':'Achondrite - These meteorites are thought to be from Mars because they have elemental and isotopic compositions that are similar to rocks and atmospheric gases on Mars, which have been measured by orbiting spacecraft, surface landers and rovers.',
    'Lunar':'Achondrite - Known to have originated on the Moon, combined mass of lunar meteorites is > 190kg and all have been found in deserts.',
    'Mesosiderite':' Stony–iron meteorites consisting of about equal parts of metallic nickel-iron and silicate.  The most recent fall of a mesosiderite occurred at Dong Ujimqin Qi in China, on September 7, 1995, where three large pieces with a total mass of 129 kilograms fell.',
    'Winonaite':'Primitive anchodrite - The name itself derived from Winona, Arizona where the type specimen was said to be found during an archaeological excavation of the Sinagua village Elden Pueblo in September 1928.  They show signs of metamorphism, partial melting, brecciation and relic chondrules.',
    'Stone':'Stone - Unclassified',
    'Iron':'Iron - Unclassified',
    'IVA':'Composed of meteoric iron (kamacite and taenite) and silicate inclusions. Structurally they can be hexahedrites, fine to coarse octahedrites, or even ataxites. Most of them are octahedrite with medium to coarse taenite-lamella and distinct Widmanstatten patterning.',
    'IVB':'Ataxite iron meteorites, the IVB group has the most extreme chemical compositions of all iron meteorites, meaning that examples of the group are depleted in volatile elements and enriched in refractory elements compared to other iron meteorites.  14 known specimens.',
    'IIIAB':'Medium octahedrites, 7.1–10.5% Ni, 16–23 ppm Ga, 27–47 ppm Ge, 0.01-19 ppm Ir',
    'IIAB':'IIAB meteorites are a group of iron meteorites. Their structural classification ranges from hexahedrites to octahedrites. IIABs have the lowest concentration of nickel of all iron meteorite groups.',
    'IAB':'IAB meteorites are a group of iron meteorites according to their overall composition and a group of primitive achondrites because of silicate inclusions that show a strong affinity to winonaites and chondrites.',
    'IID':'Fine to medium octahedrites, 9.8–11.3%Ni, 70–83 ppm Ga, 82–98 ppm Ge, 3.5–18 ppm Ir, Ge-Ni correlation positive',
    'IIE':'Octahedrites of various coarseness, 7.5–9.7% Ni, 21–28 ppm Ga, 60–75 ppm Ge, 1–8 ppm Ir, Ge-Ni correlation absent',
    'IIIE':'Structurally belonging to the class of the coarse octahedrites, the IIIE irons are characterized by short and swollen kamacite bands, and abundant inclusions of haxonite. This strange carbide is white in color, very hard, and a challenge to every saw when it comes to cutting a IIIE iron meteorite.',
    'IIF':'Medium to coarse octahedrites, 6.8–7.8% Ni,6.3–7.2 ppm Ga, 0.7–1.1 ppm Ge, 1.3–7.9 ppm Ir, Ge-Ni correlation absent',
    'IC':'Iron meteorite group',
    'IIC':'Plessitic octahedrites, 9.3–11.5% Ni, 37–39 ppm Ga, 88–114 ppm Ge, 4–11 ppm Ir, Ge-Ni correlation positive',
    'Relict':'Relict',
    'Unknown':'Unknown classification'
}

export default classification;