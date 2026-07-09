export interface CityData {
    slug: string;
    name: string;
    intro: string;
    image: string;
    history: string;
    thingsToDo: React.ReactNode;
    demographics: {
        population: string;
        medianIncome: string;
        medianHomeValue: string;
    },
    parentSlug?: string;
}

// Since we are migrating from old static files to a modern app structure, 
// we'll structure the data to easily be pulled by our dynamic routes.
export const CITIES: CityData[] = [
    {
        slug: "laguna-hills",
        name: "Laguna Hills",
        image: "/images/laguna-hills.jpg",
        intro: "Laguna Hills is a city in Orange County, California, that was incorporated in 1991. The city derives its name from the rolling hills and proximity to Laguna Canyon and Laguna Beach.",
        history: "The area that is now Laguna Hills was originally inhabited by the Acjachemen Native Americans. The Spanish established Mission San Juan Capistrano in 1776. The mission lands included the area of Laguna Hills, which was part of a large ranch called Rancho Niguel. Laguna Hills became the 30th city in Orange County on December 20th, 1991.",
        thingsToDo: "Visit the Great Laguna Hills Lodge, bounce at the Big Air Trampoline Park, spend a sunny day at the Dinosaur Park, or visit the Juan Avila Adobe Historical Monument.",
        demographics: {
            population: "30,243",
            medianIncome: "$94,400",
            medianHomeValue: "$944,000"
        }
    },
    {
        slug: "laguna-niguel",
        name: "Laguna Niguel",
        image: "/images/laguna-niguel.jpg",
        intro: "Laguna Niguel is a master-planned community renowned for its expansive parks, trail systems, and proximity to the Pacific Ocean coastline.",
        history: "Like Laguna Hills, Laguna Niguel was originally part of Rancho Niguel. It was one of the first master-planned communities in California.",
        thingsToDo: "Explore the Laguna Niguel Regional Park, visit the Crown Valley Community Center, or hike the expansive trail network.",
        demographics: {
            population: "64,000+",
            medianIncome: "$110,000",
            medianHomeValue: "$1,100,000+"
        }
    },
    {
        slug: "irvine",
        name: "Irvine",
        image: "/images/irvine.jpg",
        intro: "Irvine is a globally recognized master-planned city known for its top-rated school districts, booming tech industry, and family-friendly villages.",
        history: "Developed mainly by the Irvine Company starting in the 1960s, the city is acclaimed for its meticulously planned villages.",
        thingsToDo: "Shop at the Irvine Spectrum Center, walk through the Orange County Great Park, and enjoy diverse global cuisines.",
        demographics: {
            population: "300,000+",
            medianIncome: "$115,000",
            medianHomeValue: "$1,300,000+"
        }
    },
    {
        slug: "mission-viejo",
        name: "Mission Viejo",
        image: "/images/mission-viejo.jpg",
        intro: "Known for its picturesque tree-lined streets and centered around Lake Mission Viejo, this city is a premier destination for families.",
        history: "Mission Viejo was the first large master-planned community in the U.S. successfully developed as a unified project.",
        thingsToDo: "Boat or swim at Lake Mission Viejo, visit the Mission Viejo Library, or shop at The Shops at Mission Viejo.",
        demographics: {
            population: "93,000+",
            medianIncome: "$120,000",
            medianHomeValue: "$1,050,000+"
        }
    },
    {
        slug: "aliso-viejo",
        name: "Aliso Viejo",
        image: "/images/aliso-viejo.jpg",
        intro: "Aliso Viejo is a vibrant and diverse city that offers a high quality of life. The city has a young and educated population with a high-income level and a low poverty rate.",
        history: "Aliso Viejo derives its name from Spanish for \"old alder\" or \"old sycamore\", referring to the trees that grow along Aliso Creek. In 2001, Aliso Viejo became Orange County's 34th city. It was originally part of a 22,000 acre land grant in 1842 and developed into a vast planned community.",
        thingsToDo: "Explore the Aliso and Wood Canyons Wilderness Park, visit the Soka Performing Arts Center, or play golf at the Aliso Viejo Country Club designed by Jack Nicklaus.",
        demographics: {
            population: "51,943",
            medianIncome: "$118,540",
            medianHomeValue: "$672,500" // from legacy data circa ~2019-2022
        }
    },
    {
        slug: "coto-de-caza",
        name: "Coto de Caza",
        image: "/images/coto-de-caza.jpg",
        intro: "Coto de Caza is a census-designated place and a private community in Orange County, California. The name means 'Hunting Reserve' in Spanish.",
        history: "In 1964, Chevron Corporation partnered with Arvida Corporation to develop a hunting lodge and private community surrounded by luxury homes and golf courses which officially opened in 1986.",
        thingsToDo: "Enjoy the Thomas F. Riley Wilderness Park, exclusive golf courses, and equestrian trails spanning the community.",
        demographics: {
            population: "14,710",
            medianIncome: "$140,000+", // estimate for luxury CDP
            medianHomeValue: "$1,000,000+"
        }
    },
    {
        slug: "crystal-cove",
        name: "Crystal Cove",
        image: "/images/crystal-cove.jpg",
        intro: "Crystal Cove is a coastal area in Orange County, California, that has a rich and diverse history. It is home to a state park, a historic district, and a marine conservation area.",
        history: "In the early 20th century, Crystal Cove became a popular destination for campers, artists, and movie makers. The Irvine Company leased parts of the land where visitors built unique cottages along the beachfront. Today, the 3,936 acre Crystal Cove State Park preserves its natural and cultural resources.",
        thingsToDo: "Explore 3.2 miles of coastline, hike inland chaparral canyons, go tidepooling in the marine conservation area, and explore the historic beach cottages.",
        demographics: {
            population: "Coastal Resort/Park",
            medianIncome: "N/A",
            medianHomeValue: "N/A"
        },
        parentSlug: "newport-beach"
    },
    {
        slug: "dana-point",
        name: "Dana Point",
        image: "/images/dana-point.jpg",
        intro: "Dana Point is a coastal city in southern Orange County and is a popular destination for surfing and water activities. Today, Dana Point is a desirable place to live for its mild climate, low crime rate, and high quality of life.",
        history: "Dana Point was named after Richard Henry Dana Jr., author of Two Years Before the Mast, who arrived in 1835. In the 1950s, Hobie Alter opened Southern California's first surf shop here, revolutionizing the sport. It officially incorporated in 1989.",
        thingsToDo: "Visit the Dana Point Harbor, Ocean Institute, Doheny State Beach, and Headlands Conservation Area. You can also catch the Festival of Whales or Doheny Blues Festival.",
        demographics: {
            population: "33,107",
            medianIncome: "$95,411",
            medianHomeValue: "$900,000+"
        }
    },
    {
        slug: "huntington-beach",
        name: "Huntington Beach",
        image: "/images/huntington-beach.jpg",
        intro: "Huntington Beach, affectionately known as 'Surf City USA,' harbors a rich tapestry of history that is as captivating as its famous waves.",
        history: "Originally part of Spanish land grants (Rancho Las Bolsas), the area boomed in the early 1900s with the discovery of oil. Despite rapid development, it retained its coastal charm and became a haven for surfers thanks to consistent year-round swells.",
        thingsToDo: "Walk the Huntington Beach Pier, enjoy beach bonfires, surf world-class waves, shop at Pacific City, or explore the Bolsa Chica Ecological Reserve.",
        demographics: {
            population: "194,310",
            medianIncome: "$114,747",
            medianHomeValue: "$950,000+"
        }
    },
    {
        slug: "ladera-ranch",
        name: "Ladera Ranch",
        image: "/images/ladera-ranch.jpg",
        intro: "Ladera Ranch is a planned community in Orange County that was developed in the late 1990s and early 2000s. It covers about 4,000 acres of land.",
        history: "Occupying land that was once part of the 200,000-acre Rancho Mission Viejo, the Mission Viejo Company began planning this new community in the 1990s. The first phase was completed in 1999, featuring five unique villages.",
        thingsToDo: "Enjoy extensive landscaped parks, trails, clubhouses, water parks, and community pools throughout the intricate village system.",
        demographics: {
            population: "23,000",
            medianIncome: "$150,000+", // estimate
            medianHomeValue: "$1,100,000+"
        }
    },
    {
        slug: "laguna-beach",
        name: "Laguna Beach",
        image: "/images/laguna-beach.jpg",
        intro: "Laguna Beach is a beautiful seaside city in Orange County, California, which attracts millions of visitors every year with its scenic coastline, artistic culture, and environmental preservation.",
        history: "From its origins as a prehistoric Paleoindian settlement to a popular destination for plein air artists in the early 20th century, Laguna Beach has a rich heritage. The city officially adopted the council-manager form of government in 1944.",
        thingsToDo: "Visit the Laguna Art Museum, explore over seven miles of coastline, hike Crystal Cove State Park, or experience world-renowned festivals like the Pageant of the Masters and Sawdust Art Festival.",
        demographics: {
            population: "22,583",
            medianIncome: "$117,586",
            medianHomeValue: "$1,857,800"
        }
    },
    {
        slug: "laguna-woods",
        name: "Laguna Woods",
        image: "/images/laguna-woods.jpg",
        intro: "Laguna Woods is a city in Orange County that occupies approximately four-square miles. It is known for being one of the world's premier retirement communities for active adults.",
        history: "In 1962, developer Ross Cortese purchased 3,500 acres of Moulton Ranch to create Leisure World Laguna Hills. On March 24, 1999, Laguna Woods officially became Orange County's 32nd city.",
        thingsToDo: "Enjoy the vast Laguna Woods Village amenities including seven clubhouses, five swimming pools, a 27-hole golf course, and the Laguna Woods History Center.",
        demographics: {
            population: "17,192",
            medianIncome: "$56,928",
            medianHomeValue: "$400,000+" // Estimate for senior community condos
        }
    },
    {
        slug: "lake-forest",
        name: "Lake Forest",
        image: "/images/lake-forest.jpg",
        intro: "Lake Forest is a thriving city with a population of over 85,000 people. It offers a high quality of life, with excellent schools, parks, recreation facilities, and shopping centers.",
        history: "Originally part of Rancho Cañada de los Alisos and known as El Toro, the area grew rapidly in the 1900s alongside the El Toro Marine Base. In 1991, it incorporated and changed its name to Lake Forest, reflecting its two man-made lakes and eucalyptus forests.",
        thingsToDo: "Visit the historical Serrano Adobe (the oldest structure in the city), explore local parks, and enjoy the lakes that give the city its name.",
        demographics: {
            population: "85,000+",
            medianIncome: "$105,000+", // estimate
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "nellie-gail-ranch",
        name: "Nellie Gail Ranch",
        image: "/images/nellie-gail-ranch.jpg",
        intro: "Nellie Gail Ranch is a prestigious equestrian community in Laguna Hills that combines luxury, history, and nature, offering a highly desirable neighborhood in Orange County.",
        history: "Named after Nellie Gail Moulton, a remarkable woman, talented painter, and pioneer who inherited and managed a 22,000-acre ranch. The Moulton family eventually developed 1,350 acres of their land into this master-planned community with large lots and horse trails.",
        thingsToDo: "Enjoy extensive community amenities including a clubhouse, tennis center, swim center, equestrian center, and 26 miles of riding trails.",
        demographics: {
            population: "Equestrian Community",
            medianIncome: "$200,000+", // estimate for luxury community
            medianHomeValue: "$2,000,000 - $10,000,000+"
        },
        parentSlug: "laguna-hills"
    },
    {
        slug: "newport-beach",
        name: "Newport Beach",
        image: "/images/newport-beach.jpg",
        intro: "Newport Beach is known for its beautiful beaches, bay, and harbor, which attract millions of visitors every year. The city has over 9 miles of beach frontage.",
        history: "Originally inhabited by the Tongva people, the area was part of land grants before becoming a shipping and fishing center in the late 1800s. It incorporated in 1906 and later became a hotspot for early Hollywood filmmakers.",
        thingsToDo: "Explore Heisler Park, fish 24/7 off the Newport Pier, sail the scenic harbor, or browse upscale boutiques and dine trackside at Pacific City or Balboa Island.",
        demographics: {
            population: "86,160",
            medianIncome: "$132,411",
            medianHomeValue: "$2,254,600"
        }
    },
    {
        slug: "rancho-santa-margarita",
        name: "Rancho Santa Margarita",
        image: "/images/rancho-santa-margarita.jpg",
        intro: "Rancho Santa Margarita is located on a high plateau known as Plano Trabuco. It is a vibrant and prosperous community known for its scenic views and community spirit.",
        history: "Its name derives from an 1841 Mexican land grant, though the city relies mostly on the Rancho Mission Viejo grant. Planned by the Mission Viejo Company, it became Orange County's 33rd city, incorporating on January 1, 2000.",
        thingsToDo: "Hike the 23 miles of trails at O'Neill Regional Park, paddle boat on Rancho Santa Margarita Lake, shop at Mercado del Lago, or attend a concert at Central Park.",
        demographics: {
            population: "47,000+",
            medianIncome: "$150,146",
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "san-clemente",
        name: "San Clemente",
        image: "/images/san-clemente.jpg",
        intro: "San Clemente is a coastal city known for its Spanish colonial-style architecture and scenic beaches. It is often referred to as a 'Spanish Village by the Sea.'",
        history: "In 1925, Seattle mayor Ole Hanson bought land and envisioned a planned community to reflect Mediterranean-style coastal Spain architecture. It was incorporated and famously hosted President Richard Nixon at his estate dubbed 'The Western White House.'",
        thingsToDo: "Visit the historic Casa Romantica Cultural Center and Gardens, walk the 2.3-mile San Clemente Coastal Trail, fish off the 1,296-foot San Clemente Pier, or enjoy annual events like the Ocean Festival.",
        demographics: {
            population: "64,290",
            medianIncome: "$134,730",
            medianHomeValue: "$1,161,000"
        }
    },
    {
        slug: "san-juan-capistrano",
        name: "San Juan Capistrano",
        image: "/images/san-juan-capistrano.jpg",
        intro: "San Juan Capistrano is a city that preserves its historical legacy and celebrates its diverse culture, where history meets modernity and tradition meets innovation.",
        history: "Founded in 1776 by Father Junipero Serra, the mission was built on the site of an ancient Acjachemen village. It is famous for the 'Jewel of the Missions' and the annual return of the swallows every spring.",
        thingsToDo: "Explore the Mission San Juan Capistrano Museum, the Los Rios Historic District (the oldest neighborhood in California), the San Juan Capistrano Depot, or attend the Swallows Day Parade.",
        demographics: {
            population: "36,000+",
            medianIncome: "$100,000+", // estimate
            medianHomeValue: "$800,000+"
        }
    },
    {
        slug: "anaheim",
        name: "Anaheim",
        image: "/images/anaheim.jpg",
        intro: "Anaheim is Orange County's largest city and its entertainment capital, home to Disneyland Resort, major league sports, and a remarkable variety of neighborhoods from historic districts to hillside communities.",
        history: "Anaheim was founded in 1857 by German immigrants who established a grape-growing colony along the Santa Ana River — the name combines 'Ana' from the river with 'heim,' German for home. The city transformed forever when Walt Disney opened Disneyland in 1955, and it has grown into a world-class destination while preserving its historic Anaheim Colony District.",
        thingsToDo: "Spend a day at Disneyland Resort, catch the Angels at Angel Stadium or the Ducks at Honda Center, and explore the food halls of the Anaheim Packing District.",
        demographics: {
            population: "346,000+",
            medianIncome: "$76,000+", // estimate
            medianHomeValue: "$750,000+"
        }
    },
    {
        slug: "brea",
        name: "Brea",
        image: "/images/brea.jpg",
        intro: "Brea is a North Orange County city known for its public art program, excellent schools, and rolling hillside neighborhoods bordering Carbon Canyon.",
        history: "Brea — Spanish for 'tar' — grew out of the crude oil boom of the early 1900s and incorporated in 1917 as one of Orange County's earliest cities. As the oil fields wound down, Brea reinvented itself as a retail and cultural hub, launching its acclaimed Art in Public Places program in 1975.",
        thingsToDo: "Shop and dine at the Brea Mall and Birch Street Promenade, follow the self-guided Art in Public Places tour of 140+ sculptures, or hike among the redwoods at Carbon Canyon Regional Park.",
        demographics: {
            population: "47,000+",
            medianIncome: "$103,000+", // estimate
            medianHomeValue: "$900,000+"
        }
    },
    {
        slug: "buena-park",
        name: "Buena Park",
        image: "/images/buena-park.jpg",
        intro: "Buena Park is a family-friendly city in northwest Orange County, best known as the home of Knott's Berry Farm and its walkable E-Zone entertainment district.",
        history: "Founded in 1887 by James A. Whitaker and incorporated in 1953, Buena Park began as dairy and farming country. In the 1920s, Walter Knott began selling boysenberries and fried chicken dinners from a roadside stand — a family business that grew into Knott's Berry Farm, America's first theme park.",
        thingsToDo: "Ride the coasters at Knott's Berry Farm, cool off at Knott's Soak City, cheer the joust at Medieval Times, and pick up pastries at the famous Porto's Bakery.",
        demographics: {
            population: "84,000+",
            medianIncome: "$83,000+", // estimate
            medianHomeValue: "$800,000+"
        }
    },
    {
        slug: "costa-mesa",
        name: "Costa Mesa",
        image: "/images/costa-mesa.jpg",
        intro: "Costa Mesa, the self-proclaimed 'City of the Arts,' blends world-class shopping and performing arts with a creative, laid-back culture just a mile from the coast.",
        history: "Once part of Rancho Santiago de Santa Ana, the small town of Harper renamed itself Costa Mesa ('coastal tableland') in 1920. The Santa Ana Army Air Base brought thousands here during World War II, many of whom stayed, and the city incorporated in 1953 before blossoming into a retail and cultural powerhouse.",
        thingsToDo: "Shop South Coast Plaza, catch a performance at Segerstrom Center for the Arts, visit the OC Fair & Event Center, or browse the indie shops of The LAB and The CAMP anti-malls.",
        demographics: {
            population: "111,000+",
            medianIncome: "$88,000+", // estimate
            medianHomeValue: "$1,100,000+"
        }
    },
    {
        slug: "cypress",
        name: "Cypress",
        image: "/images/cypress.jpg",
        intro: "Cypress is a quiet, well-kept city in northwest Orange County offering top-rated schools, spacious parks, and an easy commute to both Los Angeles and the OC job centers.",
        history: "Incorporated in 1956 as 'Dairy City' by farmers hoping to preserve their dairies from development, the city soon adopted the name Cypress after the Monterey cypress trees planted as windbreaks. Suburban growth in the 1960s transformed it into the residential community it is today.",
        thingsToDo: "Enjoy the greenbelts and sports fields of Oak Knoll and Cypress Community Parks, play a round at the Navy Golf Course where Tiger Woods learned the game, or attend community events at Cypress College.",
        demographics: {
            population: "50,000+",
            medianIncome: "$100,000+", // estimate
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "fountain-valley",
        name: "Fountain Valley",
        image: "/images/fountain-valley.jpg",
        intro: "Fountain Valley calls itself 'A Nice Place to Live' — a stable, centrally located residential city with award-winning parks and quick access to Huntington Beach's coastline.",
        history: "Named for the artesian wells that once bubbled up through its low-lying farmland, Fountain Valley incorporated in 1957 and developed through the 1960s as one of Orange County's first fully master-planned suburban communities.",
        thingsToDo: "Spend the day at Mile Square Regional Park — 600+ acres of lakes, golf, and picnic groves — play at the Fountain Valley Sports Park, or bike the Santa Ana River Trail straight to the beach.",
        demographics: {
            population: "57,000+",
            medianIncome: "$97,000+", // estimate
            medianHomeValue: "$1,000,000+"
        }
    },
    {
        slug: "fullerton",
        name: "Fullerton",
        image: "/images/fullerton.jpg",
        intro: "Fullerton is a North County hub of education and culture, home to Cal State Fullerton, a lively historic downtown, and tree-lined neighborhoods with distinctive early-20th-century architecture.",
        history: "Founded in 1887 and named for railroad land agent George H. Fullerton, the city prospered on Valencia oranges, walnuts, and oil. It later earned a place in music history as the birthplace of Leo Fender's electric guitars, and today anchors North OC with its university and college.",
        thingsToDo: "Explore downtown Fullerton's restaurants and nightlife, wander the 26-acre Fullerton Arboretum, visit the Muckenthaler Cultural Center, or hike and bike the Fullerton Loop trails.",
        demographics: {
            population: "143,000+",
            medianIncome: "$88,000+", // estimate
            medianHomeValue: "$900,000+"
        }
    },
    {
        slug: "garden-grove",
        name: "Garden Grove",
        image: "/images/garden-grove.jpg",
        intro: "Garden Grove is one of Orange County's most culturally diverse cities, known for its annual Strawberry Festival, the landmark Christ Cathedral, and thriving Korean and Vietnamese business districts.",
        history: "Founded in 1874 by Alonzo Cook and incorporated in 1956, Garden Grove grew from strawberry fields and orange groves into a booming postwar suburb. Its Strawberry Festival, held every Memorial Day weekend since 1958, remains one of the largest community festivals in the western United States.",
        thingsToDo: "Visit the architecturally stunning Christ Cathedral campus, celebrate at the Strawberry Festival, sample the restaurants of the Korean Business District, or take the kids to Atlantis Play Center.",
        demographics: {
            population: "171,000+",
            medianIncome: "$78,000+", // estimate
            medianHomeValue: "$800,000+"
        }
    },
    {
        slug: "la-habra",
        name: "La Habra",
        image: "/images/la-habra.jpg",
        intro: "La Habra, 'the city with a heart,' sits at Orange County's northern gateway, offering established neighborhoods, community festivals, and hillside views along the La Habra Valley.",
        history: "The name dates to the 1769 Portolá expedition, which called the pass through the hills 'La Habra.' The area became Rancho Cañada de La Habra in 1839, and the city incorporated in 1925 amid thriving avocado and citrus groves — for years it was an avocado capital of the region.",
        thingsToDo: "Take the kids to the Children's Museum at La Habra, join the annual Tamale Festival, golf at Westridge Golf Club, or walk the trails at Vista Grande Park.",
        demographics: {
            population: "63,000+",
            medianIncome: "$85,000+", // estimate
            medianHomeValue: "$780,000+"
        }
    },
    {
        slug: "la-palma",
        name: "La Palma",
        image: "/images/la-palma.jpg",
        intro: "La Palma is one of Orange County's smallest cities — a tight-knit, well-managed community consistently ranked among the best small towns to live in California.",
        history: "Incorporated in 1955 as 'Dairyland' to protect its dairy farms, the city renamed itself La Palma in 1965 as suburban homes replaced the herds. At under two square miles, it has cultivated a reputation for excellent schools and responsive small-town government.",
        thingsToDo: "Enjoy concerts and community events at Central Park, join the annual La Palma Days parade and Run for Fun, and take advantage of a location minutes from Knott's Berry Farm and Cerritos Towne Center.",
        demographics: {
            population: "15,000+",
            medianIncome: "$105,000+", // estimate
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "los-alamitos",
        name: "Los Alamitos",
        image: "/images/los-alamitos.jpg",
        intro: "Los Alamitos is a small city with big community spirit in northwest Orange County, known for its top-rated school district and hometown events.",
        history: "Los Alamitos ('the little cottonwoods') began as a company town built around a Bixby family sugar beet factory in 1896. It incorporated in 1960 and is home to the Joint Forces Training Base, a fixture of the community since World War II.",
        thingsToDo: "Catch quarter horse racing at Los Alamitos Race Course, see a show at the Los Alamitos Theatre, enjoy the annual Winter Wonderland festival, and reach Seal Beach's shoreline in minutes.",
        demographics: {
            population: "11,000+",
            medianIncome: "$97,000+", // estimate
            medianHomeValue: "$950,000+"
        }
    },
    {
        slug: "orange",
        name: "Orange",
        image: "/images/orange.jpg",
        intro: "The City of Orange charms with its beautifully preserved Old Towne — the largest National Register historic district in California — centered on the iconic Orange Plaza traffic circle.",
        history: "Founded in 1869 by lawyers Alfred Chapman and Andrew Glassell, who took the land as payment in legal fees, Orange incorporated in 1888 and prospered on Valencia oranges. Unlike most cities, it preserved its original 1886 plaza and surrounding neighborhoods, giving Old Towne its beloved historic character.",
        thingsToDo: "Hunt for antiques around the Orange Circle, stroll Chapman University's campus, hike or ride at Santiago Oaks Regional Park, and visit the OC Zoo inside Irvine Regional Park.",
        demographics: {
            population: "139,000+",
            medianIncome: "$95,000+", // estimate
            medianHomeValue: "$950,000+"
        }
    },
    {
        slug: "placentia",
        name: "Placentia",
        image: "/images/placentia.jpg",
        intro: "Placentia — 'a pleasant place to live' — is a North County city of quiet, established neighborhoods with a revitalizing Old Town district and deep citrus-era roots.",
        history: "Placentia was the heart of Orange County's Valencia orange industry, and the discovery of oil in 1919 added to its early prosperity. Incorporated in 1926, the city preserved its packing-house district, which is now being reborn as a dining and craft-brewery destination.",
        thingsToDo: "Sample the restaurants and breweries of Old Town Placentia, celebrate at the annual Heritage Festival and Parade, picnic at Tri-City Park, or golf at Alta Vista Country Club.",
        demographics: {
            population: "52,000+",
            medianIncome: "$100,000+", // estimate
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "santa-ana",
        name: "Santa Ana",
        image: "/images/santa-ana.jpg",
        intro: "Santa Ana is Orange County's civic heart and county seat — a dense, dynamic city with a flourishing downtown arts scene, historic architecture, and some of OC's most distinctive cultural institutions.",
        history: "Founded in 1869 by William Spurgeon on land from Rancho Santiago de Santa Ana, Santa Ana became the Orange County seat when the county formed in 1889. Its downtown preserves a remarkable stock of early-1900s commercial buildings, now home to the Artists Village and a celebrated food scene.",
        thingsToDo: "Explore the Bowers Museum and Discovery Cube OC, visit the Santa Ana Zoo, catch a movie at the historic Frida Cinema, and eat your way down Fourth Street's Calle Cuatro.",
        demographics: {
            population: "310,000+",
            medianIncome: "$77,000+", // estimate
            medianHomeValue: "$700,000+"
        }
    },
    {
        slug: "seal-beach",
        name: "Seal Beach",
        image: "/images/seal-beach.jpg",
        intro: "Seal Beach is Orange County's northernmost beach town — a nostalgic Main Street, a classic wooden pier, and a famously relaxed pace that feels a world away from the freeways.",
        history: "Incorporated in 1915, Seal Beach was an early seaside resort whose 'Joy Zone' amusement pier drew crowds in the 1910s and 20s. In 1962 it welcomed Leisure World, one of the nation's first planned retirement communities, and the city has guarded its small-town beach character ever since.",
        thingsToDo: "Walk one of California's longest wooden piers, browse Main Street's shops and cafes, watch for dolphins from the sand, and explore the Seal Beach National Wildlife Refuge on a monthly tour.",
        demographics: {
            population: "25,000+",
            medianIncome: "$80,000+", // estimate
            medianHomeValue: "$1,200,000+"
        }
    },
    {
        slug: "stanton",
        name: "Stanton",
        image: "/images/stanton.jpg",
        intro: "Stanton is a compact, affordable city in the heart of west Orange County, minutes from Knott's Berry Farm and Disneyland, with new parks and gathering places energizing the community.",
        history: "Stanton first incorporated in 1911 and was named for Philip A. Stanton, a state Assembly speaker and early developer. After a period as unincorporated county land, it re-incorporated in 1956 and grew into a diverse residential community at the county's crossroads.",
        thingsToDo: "Take young kids to Adventure City, a beloved pint-sized theme park; graze the food stalls at Rodeo 39 Public Market; and enjoy the sports fields and splash pad at Stanton Central Park.",
        demographics: {
            population: "38,000+",
            medianIncome: "$65,000+", // estimate
            medianHomeValue: "$650,000+"
        }
    },
    {
        slug: "tustin",
        name: "Tustin",
        image: "/images/tustin.jpg",
        intro: "Tustin pairs a walkable, historic Old Town — one of Orange County's best dining districts — with the modern shops and homes of Tustin Legacy, all in the geographic center of the county.",
        history: "Columbus Tustin founded the town in 1868, and it incorporated in 1927 amid orange and walnut groves. The Marine Corps Air Station brought two colossal WWII blimp hangars — among the largest wooden structures on earth — and the base's redevelopment as Tustin Legacy is reshaping the city today.",
        thingsToDo: "Dine your way through Old Town Tustin, shop The District at Tustin Legacy, celebrate Tustin Tiller Days each fall, and hike the loop at Peters Canyon Regional Park.",
        demographics: {
            population: "80,000+",
            medianIncome: "$100,000+", // estimate
            medianHomeValue: "$950,000+"
        }
    },
    {
        slug: "villa-park",
        name: "Villa Park",
        image: "/images/villa-park.jpg",
        intro: "Villa Park, the 'Hidden Jewel' of Orange County, is the county's smallest city — an enclave of estate homes on half-acre-plus lots with a semi-rural, equestrian-friendly character.",
        history: "Once citrus and avocado ranch land, Villa Park incorporated in 1962 specifically to preserve its low-density, country lifestyle. The city has held firm to its large-lot zoning ever since, with a single small shopping center and no through-traffic corridors.",
        thingsToDo: "Enjoy quiet streets made for walking and riding, and take advantage of neighboring Santiago Oaks and Irvine Regional Parks for hiking, mountain biking, and horseback trails.",
        demographics: {
            population: "5,800+",
            medianIncome: "$170,000+", // estimate for estate community
            medianHomeValue: "$1,700,000+"
        }
    },
    {
        slug: "westminster",
        name: "Westminster",
        image: "/images/westminster.jpg",
        intro: "Westminster is the cultural heart of Little Saigon — the largest Vietnamese community outside Vietnam — offering extraordinary cuisine, vibrant festivals, and centrally located neighborhoods.",
        history: "Founded in 1870 by Rev. Lemuel Webber as a Presbyterian temperance colony, Westminster incorporated in 1957. Beginning in the late 1970s, Vietnamese refugees transformed Bolsa Avenue into Little Saigon, now a nationally recognized cultural and commercial district.",
        thingsToDo: "Browse the Asian Garden Mall, join the massive Tet Festival each Lunar New Year, visit the Vietnam War Memorial in Sid Goldstein Freedom Park, and sample some of the best pho and banh mi in America.",
        demographics: {
            population: "90,000+",
            medianIncome: "$70,000+", // estimate
            medianHomeValue: "$850,000+"
        }
    },
    {
        slug: "yorba-linda",
        name: "Yorba Linda",
        image: "/images/yorba-linda.jpg",
        intro: "Yorba Linda, the 'Land of Gracious Living,' is a spacious hillside city in northeast Orange County known for top schools, equestrian trails, and one of the highest median incomes of any U.S. city its size.",
        history: "The land traces to Bernardo Yorba's Rancho Cañón de Santa Ana, one of the great Californio ranchos. Richard Nixon was born here in 1913 in a farmhouse his father built, and the city incorporated in 1967, growing into a premier residential community while keeping over 100 miles of horse and hiking trails.",
        thingsToDo: "Tour the Richard Nixon Presidential Library and Museum, ride or hike the city's extensive trail network, play Black Gold Golf Club's canyon course, and picnic along the lakes at Yorba Regional Park.",
        demographics: {
            population: "68,000+",
            medianIncome: "$140,000+", // estimate
            medianHomeValue: "$1,200,000+"
        }
    }
];

export function getCityBySlug(slug: string): CityData | undefined {
    return CITIES.find(c => c.slug === slug);
}
