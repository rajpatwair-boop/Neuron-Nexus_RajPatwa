/**
 * COMPREHENSIVE TRAINING DATA
 * Nursery to Class 10 - All Subjects
 * 
 * Copy and paste this into academic-knowledge-base.js
 * to massively expand your chatbot's knowledge!
 */

const ADDITIONAL_TRAINING_DATA = {
    
    // ==========================================
    // SCIENCE - COMPREHENSIVE
    // ==========================================
    science: {
        // Nursery to Class 2
        nursery_to_2: {
            "what is human body": "Human body has head, hands, legs, and body parts.",
            "what is weather": "Weather is how the sky looks - sunny, rainy, or cloudy.",
            "what is season": "Seasons are summer, winter, and rainy time.",
            "what is day": "Day is when sun is out and it's bright.",
            "what is night": "Night is when moon comes and it's dark.",
            "what is moon": "Moon shines at night in the sky.",
            "what is star": "Stars are tiny lights in the night sky.",
            "what is bird": "Birds have wings and can fly.",
            "what is fish": "Fish live in water and can swim.",
            "what is food": "Food gives us energy to play and grow.",
            "what is milk": "Milk makes our bones strong.",
            "what is fruit": "Fruits are sweet and healthy - apple, banana, mango.",
            "what is vegetable": "Vegetables are healthy food - carrot, potato, spinach."
        },
        
        // Class 3-5
        elementary_3_to_5: {
            "what is skeleton": "Skeleton is the bones inside our body that give it shape.",
            "what is muscle": "Muscles help us move our body parts.",
            "what is digestion": "Digestion is how our body breaks down food.",
            "what is respiration": "Respiration is breathing in oxygen and breathing out carbon dioxide.",
            "what is excretion": "Excretion is removing waste from our body.",
            "what is matter": "Matter is anything that has weight and takes up space.",
            "what is solid": "Solid has fixed shape and size. Example: wood, stone.",
            "what is liquid": "Liquid takes shape of container. Example: water, milk.",
            "what is gas": "Gas spreads everywhere. Example: air, steam.",
            "what is temperature": "Temperature tells how hot or cold something is.",
            "what is magnet": "Magnet attracts iron objects like pins and nails.",
            "what is light": "Light helps us see things around us.",
            "what is sound": "Sound is what we hear when something vibrates.",
            "what is earth": "Earth is the planet we live on.",
            "what is moon phases": "Moon changes shape - full moon, half moon, crescent.",
            "what is pollution": "Pollution is making air, water, or land dirty.",
            "what is recycling": "Recycling is using old things to make new things.",
            "what is habitat": "Habitat is where animals and plants live.",
            "what is food chain": "Food chain shows who eats whom in nature."
        },
        
        // Class 6-8
        middle_6_to_8: {
            "what is cell structure": "Cell has nucleus, cytoplasm, cell membrane, and mitochondria.",
            "what is tissue": "Tissue is a group of similar cells working together.",
            "what is organ": "Organ is made of tissues performing specific function.",
            "what is photosynthesis equation": "6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂",
            "what is nutrition": "Nutrition is how organisms get food for energy and growth.",
            "what is digestion process": "Mouth → Food pipe → Stomach → Small intestine → Large intestine",
            "what is blood": "Blood carries oxygen and nutrients to all body parts.",
            "what is heart function": "Heart pumps blood throughout the body.",
            "what is breathing": "Breathing takes in oxygen and releases carbon dioxide.",
            "what is excretion system": "Kidneys filter blood and remove waste as urine.",
            "what is reproduction": "Reproduction is how living things produce young ones.",
            "what is adolescence": "Adolescence is period of body changes from child to adult.",
            "what is force types": "Contact force, muscular force, friction, magnetic, electrostatic, gravitational.",
            "what is pressure": "Pressure is force applied per unit area.",
            "what is friction types": "Static friction, sliding friction, rolling friction.",
            "what is sound propagation": "Sound needs medium (solid, liquid, gas) to travel.",
            "what is reflection": "Reflection is bouncing back of light from surface.",
            "what is electric current": "Electric current is flow of electric charge.",
            "what is conductor": "Conductor allows electricity to pass. Example: copper, iron.",
            "what is insulator": "Insulator does not allow electricity. Example: wood, plastic.",
            "what is natural resource": "Natural resources are gifts of nature - air, water, soil, minerals.",
            "what is crop": "Crop is same type of plants grown in a field.",
            "what is irrigation": "Irrigation is supplying water to crops.",
            "what is microorganism": "Microorganisms are tiny living things we can't see.",
            "what is synthetic fiber": "Synthetic fibers are man-made - nylon, polyester, acrylic.",
            "what is metal": "Metals are hard, shiny, conduct heat and electricity.",
            "what is nonmetal": "Nonmetals are not hard, not shiny, poor conductors.",
            "what is coal": "Coal is fossil fuel used for electricity.",
            "what is petroleum": "Petroleum is fossil fuel used as vehicle fuel.",
            "what is combustion": "Combustion is burning with oxygen to produce heat and light.",
            "what is flame": "Flame is the visible, gaseous part of fire.",
            "what is deforestation": "Deforestation is cutting down forests.",
            "what is biodiversity": "Biodiversity is variety of life in an area.",
            "what is cell division": "Cell division is how cells multiply to grow."
        },
        
        // Class 9-10
        high_9_to_12: {
            "what is motion types": "Uniform motion, non-uniform motion, circular motion, oscillatory motion.",
            "what is velocity": "Velocity is speed with direction.",
            "what is acceleration": "Acceleration is rate of change of velocity.",
            "what is newton second law": "Force = mass × acceleration (F = ma)",
            "what is newton third law": "Every action has equal and opposite reaction.",
            "what is momentum": "Momentum = mass × velocity",
            "what is gravitation": "Gravitation is force of attraction between all masses.",
            "what is weight": "Weight is force of gravity on an object. W = mg",
            "what is work": "Work = Force × displacement",
            "what is energy": "Energy is capacity to do work.",
            "what is kinetic energy": "KE = ½mv²",
            "what is potential energy": "PE = mgh",
            "what is power": "Power = Work/Time",
            "what is wave": "Wave is disturbance that transfers energy.",
            "what is frequency": "Frequency is number of vibrations per second.",
            "what is sound speed": "Speed of sound in air = 343 m/s",
            "what is light reflection": "Angle of incidence = Angle of reflection",
            "what is refraction": "Bending of light when passing from one medium to another.",
            "what is lens": "Lens refracts light to form images.",
            "what is human eye": "Eye has cornea, iris, pupil, lens, retina.",
            "what is electricity current": "Current is flow of electrons. I = Q/t",
            "what is ohm law": "V = IR (Voltage = Current × Resistance)",
            "what is resistance": "Resistance opposes flow of current.",
            "what is magnetic field": "Magnetic field is area around magnet where force acts.",
            "what is electromagnetic induction": "Generating electricity by changing magnetic field.",
            "what is nucleus": "Nucleus has protons and neutrons at center of atom.",
            "what is isotope": "Isotopes have same protons but different neutrons.",
            "what is valency": "Valency is combining capacity of element.",
            "what is mole": "Mole = 6.022 × 10²³ particles",
            "what is chemical formula": "Chemical formula shows elements in compound.",
            "what is mole concept": "1 mole = molar mass in grams",
            "what is valence electrons": "Electrons in outermost shell.",
            "what is ionic bond": "Ionic bond is transfer of electrons.",
            "what is covalent bond": "Covalent bond is sharing of electrons.",
            "what is acid properties": "Acids are sour, turn blue litmus red, pH < 7.",
            "what is base properties": "Bases are bitter, turn red litmus blue, pH > 7.",
            "what is salt": "Salt is formed from acid + base reaction.",
            "what is ph scale": "pH scale measures acidity (0-14). 7 is neutral.",
            "what is metal extraction": "Extraction is getting metal from ore.",
            "what is corrosion": "Corrosion is eating away of metal by air/moisture.",
            "what is carbon compounds": "Carbon forms millions of organic compounds.",
            "what is homologous series": "Series with same functional group, differ by CH₂.",
            "what is ethanol": "Ethanol (C₂H₅OH) is alcohol used in drinks, fuel.",
            "what is ethanoic acid": "Ethanoic acid (CH₃COOH) is vinegar.",
            "what is soap": "Soap cleans by forming micelles around dirt.",
            "what is life process": "Life processes: nutrition, respiration, transport, excretion.",
            "what is autotrophic nutrition": "Plants make own food by photosynthesis.",
            "what is heterotrophic nutrition": "Animals depend on others for food.",
            "what is respiration types": "Aerobic (with oxygen) and anaerobic (without oxygen).",
            "what is human heart": "Heart has 4 chambers: 2 atria, 2 ventricles.",
            "what is blood vessels": "Arteries (away from heart), veins (to heart), capillaries.",
            "what is nephron": "Nephron is filtering unit of kidney.",
            "what is neuron": "Neuron transmits nerve impulses.",
            "what is reflex action": "Reflex is automatic, quick response.",
            "what is hormone": "Hormones are chemical messengers in body.",
            "what is reproduction types": "Asexual (one parent) and sexual (two parents).",
            "what is pollination": "Transfer of pollen from anther to stigma.",
            "what is fertilization": "Fusion of male and female gametes.",
            "what is menstruation": "Monthly cycle in females for reproduction.",
            "what is genetics": "Genetics is study of heredity and variation.",
            "what is dna structure": "DNA is double helix with base pairs A-T, G-C.",
            "what is evolution": "Evolution is gradual change in species over time.",
            "what is natural selection": "Nature selects organisms best adapted to survive.",
            "what is ecosystem components": "Biotic (living) and abiotic (non-living) components.",
            "what is food web": "Food web is interconnected food chains.",
            "what is ozone layer": "Ozone layer protects from harmful UV rays.",
            "what is sustainable development": "Development without harming environment for future."
        }
    },
    
    // ==========================================
    // ENGLISH - COMPREHENSIVE
    // ==========================================
    english: {
        nursery_to_2: {
            "what is a": "A is first letter of alphabet.",
            "what is reading": "Reading is looking at words and understanding them.",
            "what is writing": "Writing is making letters and words on paper.",
            "what is story": "Story is a tale about people or animals.",
            "what is poem": "Poem is writing with rhythm and rhyme."
        },
        
        elementary_3_to_5: {
            "what is article": "Articles are a, an, the. Use 'a' before consonants, 'an' before vowels.",
            "what is plural": "Plural means more than one. Cat → Cats, Box → Boxes.",
            "what is gender": "Gender shows if noun is male, female, or neutral.",
            "what is singular": "Singular means one only.",
            "what is punctuation": "Punctuation marks: full stop (.), comma (,), question mark (?).",
            "what is paragraph": "Paragraph is group of sentences about one topic.",
            "what is comprehension": "Comprehension is understanding what you read.",
            "what is essay": "Essay is writing about a topic in paragraphs.",
            "what is letter writing": "Letter has sender's address, date, greeting, body, closing.",
            "what is spelling": "Spelling is correct arrangement of letters in word."
        },
        
        middle_6_to_8: {
            "what is clause": "Clause is group of words with subject and verb.",
            "what is phrase": "Phrase is group of words without subject-verb.",
            "what is conjunction types": "Coordinating (and, but, or), Subordinating (because, although).",
            "what is interjection": "Interjection shows sudden emotion. Examples: Wow!, Oh!, Alas!",
            "what is active voice": "Active: Subject does action. 'Ram eats apple.'",
            "what is passive voice": "Passive: Subject receives action. 'Apple is eaten by Ram.'",
            "what is direct speech": "Direct: He said, 'I am happy.'",
            "what is indirect speech": "Indirect: He said that he was happy.",
            "what is conditional sentence": "Conditional: If it rains, I will stay home.",
            "what is gerund": "Gerund is verb+ing used as noun. 'Swimming is fun.'",
            "what is infinitive": "Infinitive is 'to + verb'. 'I want to play.'",
            "what is participle": "Participle is verb form used as adjective. 'Running water.'",
            "what is subject verb agreement": "Subject and verb must match in number.",
            "what is homophone": "Homophones sound same but different meaning. 'To/Too/Two'.",
            "what is synonym": "Synonym is word with similar meaning. Big = Large.",
            "what is antonym": "Antonym is word with opposite meaning. Hot ≠ Cold.",
            "what is one word substitution": "One word for phrase. 'Lover of books' = Bibliophile.",
            "what is figure of speech": "Figure of speech makes language more effective.",
            "what is alliteration": "Alliteration is repetition of initial sounds. 'Peter Piper picked.'",
            "what is personification": "Personification gives human traits to non-human. 'Wind whispered.'",
            "what is hyperbole": "Hyperbole is exaggeration. 'I'm so hungry I could eat a horse.'",
            "what is irony": "Irony is opposite of expected. Fire station burns down."
        },
        
        high_9_to_12: {
            "what is tenses types": "Present, Past, Future - each has Simple, Continuous, Perfect, Perfect Continuous.",
            "what is present perfect": "Present Perfect: has/have + V3. 'I have eaten.'",
            "what is past perfect": "Past Perfect: had + V3. 'I had eaten before he came.'",
            "what is future perfect": "Future Perfect: will have + V3. 'I will have finished by 5.'",
            "what is reported speech": "Reported speech changes tense, pronouns, time words.",
            "what is modal auxiliary": "Modals: can, could, may, might, shall, should, will, would, must.",
            "what is determiner": "Determiners: this, that, these, those, some, any, much, many.",
            "what is question tag": "Question tag: 'You are coming, aren't you?'",
            "what is relative clause": "Relative clause: 'The man who came yesterday.'",
            "what is complex sentence": "Complex: one main + one/more dependent clauses.",
            "what is compound sentence": "Compound: two or more main clauses joined by conjunction.",
            "what is修辞手法": "修辞手法 make writing powerful and effective.",
            "what is oxymoron": "Oxymoron: contradictory terms. 'Deafening silence.'",
            "what is euphemism": "Euphemism: mild word for harsh reality. 'Passed away' for died.",
            "what is onomatopoeia": "Onomatopoeia: word sounds like meaning. 'Buzz', 'Hiss'.",
            "what is symbolism": "Symbolism: object represents idea. Dove = peace.",
            "what is allegory": "Allegory: story with hidden moral/political meaning.",
            "what is sonnet": "Sonnet: 14-line poem with specific rhyme scheme.",
            "what is haiku": "Haiku: 3-line poem (5-7-5 syllables).",
            "what is prose": "Prose is ordinary writing without meter.",
            "what is drama": "Drama is story acted on stage with dialogues.",
            "what is novel": "Novel is long fictional prose narrative.",
            "what is biography": "Biography is life story written by someone else.",
            "what is autobiography": "Autobiography is life story written by person themselves."
        }
    },
    
    // ==========================================
    // SOCIAL STUDIES / GK - COMPREHENSIVE
    // ==========================================
    gk: {
        nursery_to_2: {
            "what is family": "Family is parents and children living together.",
            "what is school": "School is where we go to study and learn.",
            "what is teacher": "Teacher is who teaches us in school.",
            "what is doctor": "Doctor is who treats sick people.",
            "what is farmer": "Farmer grows crops and vegetables.",
            "what is police": "Police keeps us safe from bad people.",
            "what is india": "India is our country. We live here.",
            "what is flag": "Indian flag has saffron, white, green colors with Ashoka Chakra.",
            "what is national anthem": "National anthem is Jana Gana Mana.",
            "what is festival": "Festival is happy celebration like Diwali, Holi, Christmas."
        },
        
        elementary_3_to_5: {
            "what is map": "Map is drawing of Earth's surface on paper.",
            "what is globe": "Globe is round model of Earth.",
            "what is continent": "Continent is large landmass. There are 7 continents.",
            "what is ocean": "Ocean is large body of salt water. There are 5 oceans.",
            "what is mountain": "Mountain is very high raised land.",
            "what is river": "River is large natural flow of water.",
            "what is direction": "4 directions: North, South, East, West.",
            "what is state": "India has 28 states and 8 union territories.",
            "what is capital": "Capital is main city of state or country.",
            "what is currency": "Indian currency is Rupee (₹).",
            "what is constitution": "Constitution is rule book of country.",
            "what is prime minister": "Prime Minister is head of government.",
            "what is president": "President is head of state.",
            "what is republic day": "Republic Day: 26th January 1950.",
            "what is gandhi jayanti": "Gandhi Jayanti: 2nd October.",
            "what is teachers day": "Teachers Day: 5th September (Dr. Radhakrishnan's birthday).",
            "what is childrens day": "Children's Day: 14th November (Nehru's birthday).",
            "what is yoga": "Yoga is ancient Indian practice for health.",
            "what is taj mahal": "Taj Mahal is in Agra, built by Shah Jahan.",
            "what is red fort": "Red Fort is in Delhi, symbol of India's independence.",
            "what is india gate": "India Gate is war memorial in New Delhi."
        },
        
        middle_6_to_8: {
            "what is solar system": "Solar system: Sun + 8 planets + moons + asteroids + comets.",
            "what is earth rotation": "Earth rotates once in 24 hours causing day and night.",
            "what is earth revolution": "Earth revolves around Sun in 365 days causing seasons.",
            "what is eclipse": "Eclipse is blocking of light. Solar and lunar eclipses.",
            "what is atmosphere": "Atmosphere is layer of air around Earth.",
            "what is weather vs climate": "Weather is daily condition. Climate is average over years.",
            "what is rainfall types": "Convectional, Orographic, Cyclonic rainfall.",
            "what is soil types": "Alluvial, Black, Red, Laterite, Desert, Mountain soils.",
            "what is natural vegetation": "Natural vegetation grows without human help.",
            "what is wildlife": "Wildlife are wild animals and plants in nature.",
            "what is mineral": "Mineral is naturally occurring substance with definite composition.",
            "what is agriculture": "Agriculture is growing crops and rearing animals.",
            "what is industry": "Industry produces goods from raw materials.",
            "what is transportation": "Transportation moves people and goods from one place to another.",
            "what is communication": "Communication is sending messages over distance.",
            "what is ancient india": "Ancient India: Indus Valley, Vedic, Maurya, Gupta periods.",
            "what is medieval india": "Medieval India: Delhi Sultanate, Mughal Empire.",
            "what is modern india": "Modern India: British rule, freedom struggle, independence.",
            "what is harappa": "Harappa was ancient Indus Valley civilization city.",
            "what is ashoka": "Ashoka was great Mauryan emperor who embraced Buddhism.",
            "what is mughal empire": "Mughal Empire ruled India 1526-1857.",
            "what is british rule": "British ruled India from 1757 to 1947.",
            "what is freedom struggle": "Freedom struggle 1857-1947 led by Gandhi, Nehru, Bhagat Singh.",
            "what is partition": "Partition 1947 divided India into India and Pakistan.",
            "what is parliament": "Parliament makes laws. Has Lok Sabha and Rajya Sabha.",
            "what is judiciary": "Judiciary interprets laws. Supreme Court is highest.",
            "what is fundamental rights": "Fundamental Rights: Equality, Freedom, against Exploitation, Religion, Cultural, Constitutional Remedies.",
            "what is democracy features": "Democracy: people's rule, elections, equality, freedom.",
            "what is secularity": "Secularism means all religions are equal.",
            "what is federalism": "Federalism: power divided between center and states.",
            "what is gdp": "GDP is total value of goods and services produced.",
            "what is inflation": "Inflation is rise in prices over time.",
            "what is bank": "Bank keeps money safe and gives loans.",
            "what is tax": "Tax is money paid to government for public services."
        },
        
        high_9_to_12: {
            "what is french revolution": "French Revolution 1789: Liberty, Equality, Fraternity.",
            "what is russian revolution": "Russian Revolution 1917: Overthrew Tsar, Communist rule.",
            "what is world war 1": "WWI 1914-1918: Allied vs Central Powers.",
            "what is world war 2 causes": "WWII causes: Treaty of Versailles, rise of Hitler, expansion.",
            "what is cold war": "Cold War: USA vs USSR rivalry 1947-1991.",
            "what is un": "United Nations formed 1945 to maintain world peace.",
            "what is nationalism": "Nationalism is strong devotion to one's country.",
            "what is globalization": "Globalization is integration of world economies.",
            "what is resource": "Resource is anything used to satisfy needs.",
            "what is soil erosion": "Soil erosion is removal of topsoil by wind/water.",
            "what is water scarcity": "Water scarcity is lack of sufficient water resources.",
            "what is renewable energy": "Renewable: Solar, Wind, Hydro, Biomass, Geothermal.",
            "what is manufacturing": "Manufacturing converts raw materials to finished goods.",
            "what is lifelines of economy": "Lifelines: Transport, Communication, Trade, Tourism.",
            "what is cropping pattern": "Rabi (winter), Kharif (monsoon), Zaid (summer) crops.",
            "what is green revolution": "Green Revolution increased food production with HYV seeds.",
            "what is white revolution": "White Revolution (Operation Flood) increased milk production.",
            "what isIT sector": "IT sector is India's fastest growing service industry.",
            "what is democracy challenges": "Challenges: Inequality, corruption, illiteracy, poverty.",
            "what is political party": "Political party competes elections to form government.",
            "what is outcome of democracy": "Outcomes: accountable, legitimate, stable government.",
            "what is development": "Development is improvement in quality of life.",
            "what is sector of economy": "Primary (agriculture), Secondary (industry), Tertiary (services).",
            "what is money": "Money is medium of exchange, store of value, measure of value.",
            "what is credit": "Credit is loan with agreement to repay later.",
            "what is globalization impact": "Impact: more choices, competition, MNCs, job creation.",
            "what is consumer rights": "Rights: Safety, Information, Choice, Representation, Redressal, Education.",
            "what is rise of hitler": "Hitler rose due to Treaty of Versailles humiliation, depression.",
            "what is nazism": "Nazism: extreme nationalism, racism, anti-Semitism, dictatorship.",
            "what is forest society": "Forest societies depended on forests for livelihood.",
            "what is pastoralists": "Pastoralists are people who herd animals for living.",
            "what is farmers movement": "Farmers movements fought for fair prices and rights.",
            "what is print culture": "Print culture spread knowledge, ideas, nationalism.",
            "what is novels impact": "Novels reflected society, created awareness, entertained."
        }
    }
};

// Merge with existing knowledge base
if (typeof ACADEMIC_KNOWLEDGE_BASE !== 'undefined') {
    for (const subject in ADDITIONAL_TRAINING_DATA) {
        if (!ACADEMIC_KNOWLEDGE_BASE[subject]) {
            ACADEMIC_KNOWLEDGE_BASE[subject] = {};
        }
        for (const level in ADDITIONAL_TRAINING_DATA[subject]) {
            if (!ACADEMIC_KNOWLEDGE_BASE[subject][level]) {
                ACADEMIC_KNOWLEDGE_BASE[subject][level] = {};
            }
            Object.assign(ACADEMIC_KNOWLEDGE_BASE[subject][level], ADDITIONAL_TRAINING_DATA[subject][level]);
        }
    }
    console.log('✅ Additional training data merged successfully!');
    console.log('📚 Your chatbot now knows much more!');
}
