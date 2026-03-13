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
        image: "/images/aliso-viejo.jpg", // Mock image path
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
        image: "/images/coto-de-caza.jpg", // Mock image path
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
        image: "/images/crystal-cove.jpg", // Mock image path
        intro: "Crystal Cove is a coastal area in Orange County, California, that has a rich and diverse history. It is home to a state park, a historic district, and a marine conservation area.",
        history: "In the early 20th century, Crystal Cove became a popular destination for campers, artists, and movie makers. The Irvine Company leased parts of the land where visitors built unique cottages along the beachfront. Today, the 3,936 acre Crystal Cove State Park preserves its natural and cultural resources.",
        thingsToDo: "Explore 3.2 miles of coastline, hike inland chaparral canyons, go tidepooling in the marine conservation area, and explore the historic beach cottages.",
        demographics: {
            population: "Coastal Resort/Park",
            medianIncome: "N/A",
            medianHomeValue: "N/A"
        }
    },
    {
        slug: "dana-point",
        name: "Dana Point",
        image: "/images/dana-point.jpg", // Mock image path
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
        image: "/images/huntington-beach.jpg", // Mock image path
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
        image: "/images/ladera-ranch.jpg", // Mock image path
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
        image: "/images/laguna-beach.jpg", // Mock image path
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
        image: "/images/laguna-woods.jpg", // Mock image path
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
        image: "/images/lake-forest.jpg", // Mock image path
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
        image: "/images/nellie-gail-ranch.jpg", // Mock image path
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
        image: "/images/newport-beach.jpg", // Mock image path
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
        image: "/images/rancho-santa-margarita.jpg", // Mock image path
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
        image: "/images/san-clemente.jpg", // Mock image path
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
        image: "/images/san-juan-capistrano.jpg", // Mock image path
        intro: "San Juan Capistrano is a city that preserves its historical legacy and celebrates its diverse culture, where history meets modernity and tradition meets innovation.",
        history: "Founded in 1776 by Father Junipero Serra, the mission was built on the site of an ancient Acjachemen village. It is famous for the 'Jewel of the Missions' and the annual return of the swallows every spring.",
        thingsToDo: "Explore the Mission San Juan Capistrano Museum, the Los Rios Historic District (the oldest neighborhood in California), the San Juan Capistrano Depot, or attend the Swallows Day Parade.",
        demographics: {
            population: "36,000+",
            medianIncome: "$100,000+", // estimate
            medianHomeValue: "$800,000+"
        }
    }
];

export function getCityBySlug(slug: string): CityData | undefined {
    return CITIES.find(c => c.slug === slug);
}
