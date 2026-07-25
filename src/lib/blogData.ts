export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
  category: "Real Estate Advice" | "Home & Lifestyle" | "Market Updates";
}

export const BLOGS: BlogPost[] = [
  {
    slug: "5-tips-for-buying-a-home",
    title: "5 Essential Tips for Buying a Home in Orange County",
    excerpt: "Navigating the competitive Orange County real estate market requires preparation. Here are the top 5 things every buyer needs to know.",
    date: "October 12, 2023",
    image: "/images/contract.webp",
    category: "Real Estate Advice",
    content: `
      <h2>1. Get Pre-Approved Before You Look</h2>
      <p>In a competitive market like Orange County, sellers won't even look at an offer without a pre-approval letter from a reputable lender. It also helps you understand exactly what you can afford.</p>
      
      <h2>2. Understand Your Wants vs. Needs</h2>
      <p>Is a pool a MUST-have or a NICE-to-have? What about a 3-car garage? Having a clear list of non-negotiables makes the search process much more efficient.</p>
      
      <h2>3. Don't Try to Time the Market</h2>
      <p>Waiting for prices to drop can often mean missing out on great homes or getting hit with higher interest rates. The right time to buy is when you find the right home and can comfortably afford the payments.</p>
      
      <h2>4. Work with a Local Expert</h2>
      <p>Working with a Realtor who knows the nuances of specific Orange County neighborhoods (school districts, HOA fees, Mello-Roos) is invaluable.</p>
      
      <h2>5. Look Beyond the Paint</h2>
      <p>Cosmetic issues are easy fixes. Focus on the bones of the house, the layout, and the location. You can always change the paint color, but you can't move the house!</p>
    `
  },
  {
    slug: "buyer-representation-and-broker-compensation-agreement",
    title: "Understanding the Buyer Representation Agreement",
    excerpt: "Recent changes in the real estate industry mean buyers will now sign representation agreements. Here is what you need to know.",
    date: "August 15, 2024",
    image: "/images/contract.webp",
    category: "Real Estate Advice",
    content: `
      <h2>What is a Buyer Representation Agreement?</h2>
      <p>A Buyer Representation Agreement is a legal document that formalizes the working relationship between you (the buyer) and your real estate agent. It outlines the services the agent will provide and how they will be compensated.</p>
      
      <h2>Why is it Important Now?</h2>
      <p>Recent industry settlements have changed how agent commissions are handled. Moving forward, buyers must sign an agreement with an agent before touring homes. This ensures total transparency regarding compensation.</p>
      
      <h2>What does it cover?</h2>
      <ul>
        <li><strong>Duration:</strong> How long the agreement lasts (usually 3-6 months).</li>
        <li><strong>Exclusivity:</strong> Whether you are agreeing to work solely with one agent.</li>
        <li><strong>Compensation:</strong> Exactly what the agent charges and how it will be paid (e.g., covered by the seller, paid directly by you, or a mix of both).</li>
      </ul>
      
      <p>As your trusted Realtor, my goal is to guide you through this process with complete transparency so you feel comfortable and confident in your home search.</p>
    `
  },
  {
    slug: "how-to-decorate-for-halloween",
    title: "Spooktacular Halloween Decorating Ideas",
    excerpt: "Transform your Orange County home into a festive autumn masterpiece with these simple DIY Halloween tips.",
    date: "October 1, 2023",
    image: "/images/door.webp",
    category: "Home & Lifestyle",
    content: `
      <h2>Embrace the Autumn Vibe</h2>
      <p>Living in Southern California means we don't always get the crisp fall weather, but we can certainly create the vibe indoors! Focus on bringing warm oranges, deep reds, and rustic textures into your living spaces.</p>
      
      <h2>The Front Porch is Key</h2>
      <p>Your entryway sets the tone. Layer different sized pumpkins, add some corn stalks, and consider a seasonal wreath for the front door. It instantly boosts curb appeal during the holidays.</p>
      
      <h2>Subtle Spooks</h2>
      <p>You don't need a massive animatronic zombie to be festive. Subtle touches like black lace table runners, antique-looking candelabras, and strategically placed faux spider webs can create a sophisticated spooky atmosphere.</p>
    `
  },
  {
    slug: "spring-portfolio-review",
    title: "The Spring Real Estate Portfolio Review",
    excerpt: "Spring is the perfect time to evaluate your real estate investments. Are they performing as expected?",
    date: "April 5, 2024",
    image: "/images/portfolio.webp",
    category: "Real Estate Advice",
    content: `
      <h2>Why Spring?</h2>
      <p>As we enter the busiest season for real estate, it's crucial to understand where your portfolio stands. Market values in Orange County have shifted, and you might have more equity than you realize.</p>
      
      <h2>Evaluating ROI</h2>
      <p>Look at your current rental properties. Are the rents keeping pace with the market? Operating expenses (like insurance and property taxes) have likely increased. It might be time for adjustments.</p>
      
      <h2>To Hold or to 1031 Exchange?</h2>
      <p>If a property has appreciated significantly, utilizing a 1031 Exchange to trade up into a larger, more profitable asset might be a strategic move to defer capital gains taxes while growing your wealth.</p>
    `
  },
  {
    slug: "8-tips-to-downsize-your-house",
    title: "8 Tips to Downsize Your House",
    excerpt: "Downsizing your house can be a smart move for many reasons. You might want to save money, simplify your life, or move to a more suitable location.",
    date: "March 10, 2024",
    image: "/images/bed.webp",
    category: "Real Estate Advice",
    content: `
      <p>Downsizing your house can be a smart move for many reasons. You might want to save money, simplify your life, or move to a more suitable location. Whatever your motivation, downsizing can have many benefits, but it also requires careful planning and preparation.</p>
      <h2>Start early and pace yourself</h2>
      <p>Downsizing can be overwhelming if you try to do it all at once. Give yourself enough time to sort through your belongings. A good rule of thumb is to start decluttering 90 days before your move date and tackle one room or category at a time.</p>
      <h2>Be realistic about what you need and want</h2>
      <p>When downsizing, you must make some tough choices about what to bring with you and what to let go of.</p>
      <h2>Digitize everything you can</h2>
      <p>Paperwork, photos, books, CDs, DVDs, and other media can take up a lot of space and create clutter. To save space and reduce paper waste, consider digitizing everything you can.</p>
      <h2>Prioritize multifunctional furniture</h2>
      <p>When furnishing your new space, look for pieces that can serve more than one function and fit your lifestyle. For example, you might opt for a sofa bed that can double as a guest bed, a coffee table that can rise to become a dining table, or a storage ottoman that can provide extra seating and storage space.</p>
      <h2>Enjoy the benefits of downsizing</h2>
      <p>By downsizing your home, you can reduce your expenses, free up time, energy, live more sustainably, and focus on what matters most to you. You can also enjoy living in a cozy and comfortable space that suits your needs and preferences.</p>
        `
  },
  {
    slug: "dealing-with-financing",
    title: "Dealing with Financing",
    excerpt: "As the events of the last few years in the real estate industry show, people forget about the tremendous fiscal responsibility of purchasing a home at their peril. Here are a few tips for dealing with the dollar signs.",
    date: "February 22, 2024",
    image: "/images/contract.webp",
    category: "Real Estate Advice",
    content: `
      <p>As the events of the last few years in the real estate industry show, people forget about the tremendous fiscal responsibility of purchasing a home at their peril. Here are a few tips for dealing with the dollar signs so that you can take down that "for sale" sign on your new home.</p>
      <h2>Get pre-approved</h2>
      <p>Sub-primes may be history, but you'll still be shown homes you can't afford. By getting pre-approved as a buyer, you can save yourself the grief of looking at houses you can't afford. Unlike pre-qualification, which is based on a cursory review of your finances, pre-approval from a lender is based on your actual income, debt, and credit history.</p>
      <h2>Choose your mortgage carefully</h2>
      <p>Used to be the emphasis when it came to mortgages was on paying them off as soon as possible. Today, the debt the average person will accumulate means it's usually better to opt for the 30-year mortgage instead of the 15-year.</p>
      <h2>Do your homework before bidding</h2>
      <p>Before you make an offer on a home, do some research on the sales trends of comparable homes in the neighborhood. Consider especially sales of comparable homes in the last three months.</p>
        `
  },
  {
    slug: "how-to-build-a-greenhouse",
    title: "How to Build a Greenhouse",
    excerpt: "A greenhouse is a terrific way to grow plants all year round, regardless of the weather conditions. A greenhouse creates a microclimate that is ideal for plant growth.",
    date: "May 12, 2024",
    image: "/images/neighborhood.jpg",
    category: "Home & Lifestyle",
    content: `
      <p>A greenhouse is a terrific way to grow plants all year round, regardless of the weather conditions. A greenhouse creates a microclimate that is ideal for plant growth, by trapping heat and light from the sun. You can use a greenhouse to start seeds, propagate cuttings, or grow crops that need a longer or warmer season.</p>
      <h2>Choose a location</h2>
      <p>The first step is to choose a location for your greenhouse that gets plenty of sunlight throughout the day. Ideally, you want to orient your greenhouse so that the longest side faces south.</p>
      <h2>Build a foundation</h2>
      <p>The next step is to build a foundation for your greenhouse that will support the structure and keep it stable. You can use ground contact-rated wood or poured concrete for your foundation.</p>
      <h2>Build a frame</h2>
      <p>The third step is to build a frame for your greenhouse using wood or PVC pipes. You can use 2x4s or 2x6s for the base, uprights, and rafters of your frame, and connect them with screws or nails.</p>
      <h2>Cover your frame</h2>
      <p>The last step is to cover your frame with plastic sheeting or greenhouse film. You should attach your covering material to your frame with staples, clips, or tape, and make sure there are no gaps or holes.</p>
        `
  },
  {
    slug: "how-to-decorate-a-christmas-tree",
    title: "How to Decorate a Christmas Tree",
    excerpt: "Christmas is a wonderful time of the year, and one of the most iconic symbols of this festive season is the Christmas tree. Here are some steps on how to decorate a Christmas tree like a professional.",
    date: "December 1, 2023",
    image: "/images/christmas.webp",
    category: "Home & Lifestyle",
    content: `
      <p>Christmas is a wonderful time of the year, and one of the most iconic symbols of this festive season is the Christmas tree. But how do you choose the perfect tree for your home, how do you set it up, and how do you decorate it for the holiday? Here are some steps on how to decorate a Christmas tree like a professional.</p>
      <h2>Choose A Tree</h2>
      <p>You need to consider the size and shape of your tree. You want a tree that fits well in your space, without being too big or too small. You also want a tree that suits your personal style and preference.</p>
      <h2>Add A Stand</h2>
      <p>A Christmas tree stand is a device that holds a cut Christmas tree upright and provides water to keep it fresh. A good stand can make a significant difference in how long your tree lasts and how easy it is to set up and decorate.</p>
      <h2>Decorate The Tree</h2>
      <p>Choose a theme for your tree. You can use a color scheme, a special collection, or your own interests as inspiration.</p>
      <p>Hang your lights on the tree. Start from the bottom and work your way up, wrapping the lights around every major branch. You can use white or colored lights or mix and match them for more variety.</p>
      <p>Add garland, ribbon, and hang your ornaments. Top off your tree with a star, an angel, or another topper of your choice.</p>
        `
  },
  {
    slug: "how-to-mount-a-flagpole-on-your-house",
    title: "How to Mount a Flagpole on Your House",
    excerpt: "If you want to display your patriotism or support for a cause by flying a flag on your house, you will need to mount a flagpole on your house.",
    date: "July 2, 2024",
    image: "/images/flag.jpg",
    category: "Home & Lifestyle",
    content: `
      <p>If you want to display your patriotism or support for a cause by flying a flag on your house, you will need to mount a flagpole on your house. This is not an arduous task, but it does require some planning and preparation. Here are the steps you need to follow to mount a flagpole on your house.</p>
      <h2>Choose a location for your flagpole</h2>
      <p>You will need to find a spot on your house that is sturdy enough to support the weight and wind load of the flagpole and the flag. You will also need to consider the visibility of the flag from different angles and distances, and avoid any obstructions such as trees or power lines.</p>
      <h2>Gather the necessary tools and materials</h2>
      <p>You will need a drill, a level, a tape measure, a pencil, a stud finder, screws or bolts, washers, nuts, brackets, and anchors.</p>
      <h2>Attach the brackets to your house</h2>
      <p>You will need to align the brackets with the holes you drilled and secure them with screws or bolts, washers, and nuts.</p>
      <h2>Attach the flagpole to the brackets</h2>
      <p>You will need to insert the bottom end of the flagpole into the lower bracket and secure it with a screw or bolt. Then insert the top end of the flagpole into the upper bracket and secure it with another screw or bolt.</p>
        `
  },
  {
    slug: "how-to-paint-your-fence",
    title: "How to Paint Your Fence",
    excerpt: "Painting a fence is a fantastic way to refresh your outdoor space and protect your wood from weather damage...",
    date: "April 18, 2024",
    image: "/images/door.webp",
    category: "Home & Lifestyle",
    content: `
      <p>Painting a fence is a fantastic way to refresh your outdoor space and protect your wood from weather damage. Whether you want to add some color, brighten up a dull fence, or simply maintain its appearance, painting a fence is a simple DIY project that anyone can do. Here are some steps to follow to paint a fence like a pro.</p>
      <h2>Check the weather</h2>
      <p>You want to paint your fence on a dry and mild day, preferably with no rain forecast for at least 24 hours after you finish painting.</p>
      <h2>Prep the fence</h2>
      <p>If your fence has any loose or damaged boards, nails, or screws, you need to fix them or replace them with new ones. If your fence has been painted before, you need to scrape off any old or flaking paint with a paint scraper and sand down any rough spots with sandpaper.</p>
      <h2>Prime the fence</h2>
      <p>Priming your fence is an optional but recommended step that will help your paint adhere better and last longer. You can use either latex or oil-based primer.</p>
      <h2>Paint your fence</h2>
      <p>Now you are ready to paint your fence with your chosen color and finish. You can apply the paint with a brush, roller, or sprayer, depending on your preference and budget.</p>
        `
  },
  {
    slug: "how-to-set-a-table-for-different-occasions",
    title: "How to Set a Table for Different Occasions",
    excerpt: "Setting a table can be a simple or a complex task, depending on the occasion and the level of formality you want to achieve.",
    date: "November 20, 2023",
    image: "/images/table.jpg",
    category: "Home & Lifestyle",
    content: `
      <p>Setting a table can be a simple or a complex task, depending on the occasion and the level of formality you want to achieve. Whether you are hosting a casual brunch, an informal dinner or a formal banquet, there are some basic guidelines to follow for creating a proper table setting.</p>
      <h2>Basic Table Setting</h2>
      <p>A basic table setting is suitable for everyday meals or casual gatherings. It consists of a placemat, a dinner plate, a napkin, a fork, a knife, a spoon, and a water glass.</p>
      <h2>Informal Table Setting</h2>
      <p>An informal table setting is appropriate for more elaborate meals or occasions, such as dinner parties or holiday meals. It adds a few more elements to the basic table setting, such as salad plates, bread plates, butter knives, wine glasses and coffee cups.</p>
      <h2>Formal Table Setting</h2>
      <p>A formal table setting is reserved for special occasions or events that require a high degree of elegance and sophistication. It involves several courses and multiple utensils, plates, and glasses for each guest. It also uses chargers, cloth napkins, napkin rings and place cards to create a refined and impressive look.</p>
        `
  },
  {
    slug: "how-to-sustain-exercise",
    title: "How to Sustain Exercise",
    excerpt: "One of the most common resolutions for the new year is to exercise more and improve one's health and fitness.",
    date: "January 5, 2024",
    image: "/images/crystal-cove.jpg",
    category: "Home & Lifestyle",
    content: `
      <p>One of the most common resolutions for the new year is to exercise more and improve one's health and fitness. Exercise is one of the best things you can do for your health and well-being. However, many people struggle to stick to their goals and end up giving up or losing motivation.</p>
      <h2>Set realistic and specific goals</h2>
      <p>Having a clear and attainable goal can help you focus on what you want to achieve and why. For example, instead of saying "I want to lose weight", you could say "I want to lose 10 pounds in 3 months by exercising 3 times a week for 30 minutes".</p>
      <h2>Choose an activity that you enjoy and that suits your lifestyle</h2>
      <p>If you hate running, don't force yourself to do it. Find something that you like, such as swimming, dancing, cycling, playing sports, or yoga.</p>
      <h2>Join a sporting team or club.</h2>
      <p>By participating on a sporting team or club you can enjoy the guidance and scheduling set forth by an experienced coach or fellow member and the motivation of friendly competition.</p>
      <h2>Reward yourself for your achievements</h2>
      <p>Celebrate your milestones and successes by treating yourself to something that makes you happy, such as a movie, a massage, or a new outfit or vacation.</p>
        `
  },
  {
    slug: "preparing-to-sell",
    title: "Preparing to Sell",
    excerpt: "Selling your home doesn't just mean hiring a realtor to stick a sign out front. There are a lot of preparations you should make to ensure you get the best offer possible in the shortest time.",
    date: "June 10, 2024",
    image: "/images/door.webp",
    category: "Real Estate Advice",
    content: `
      <p>Selling your home doesn't just mean hiring a realtor to stick a sign out front. There are a lot of preparations you should make to ensure you get the best offer possible in the shortest time.</p>
      <h2>Repair</h2>
      <p>Just because you've gotten used to the cracks in the walls and the rattles in the radiators doesn't mean a buyer will too. If you have hardwood floors that need refinishing, be sure to get it done—hardwood is a huge selling point. Buyers like to snoop around, so be sure to fix any sticky doors or drawers as well. Finally, don't forget to address any issues with the exterior—fences, shingles, sidewalks, etc.</p>
      <h2>Neutralize</h2>
      <p>You want buyers to see themselves in your home. Try replacing any bold color choices in your floors and walls with something more neutral—beiges, tans, and whites. Repainting and reflooring will make everything look fresh and new, and help prospective buyers imagine all the possibilities.</p>
      <h2>Stage</h2>
      <p>Once your house is clean and updated, it's time to play dress up. Home stagers can add small details and décor touches that will bring out the possibilities in the various spaces in your home: lamps, mirrors, throw rugs and pillows, flowers, decorative soaps and towels, patio furniture. Think of it as a little mascara and rouge—if it's done right, you notice the beauty, not the makeup.</p>
        `
  },
  {
    slug: "proposition-19",
    title: "Proposition 19 Explained",
    excerpt: "Proposition 19 is a new law that was approved by California voters in November 2020. It allows homeowners who are 55 or older, disabled, or victims of natural disasters to transfer their property tax base.",
    date: "March 15, 2024",
    image: "/images/contract.webp",
    category: "Real Estate Advice",
    content: `
      <p>Proposition 19 is a new law that was approved by California voters in November 2020. It allows homeowners who are 55 or older, disabled, or victims of natural disasters to transfer their property tax base to a new home of equal or lesser value anywhere in the state. This can result in significant tax savings for eligible homeowners who want to move to a different location or downsize their living space.</p>
      <h2>How does Proposition 19 work?</h2>
      <p>Proposition 19 replaces the previous rules that allowed homeowners to transfer their property tax base only within the same county or to a participating county, and only once in their lifetime. Under Proposition 19, homeowners can transfer their property tax base up to three times, and to any county in California. The new home must be purchased or newly constructed within two years of selling the original home.</p>
      <p>Proposition 19 also changes the rules for inherited properties. Previously, children or grandchildren who inherited a primary residence from their parents or grandparents could keep the low property tax base of the original owner, regardless of whether they lived in the home or not. Under Proposition 19, inherited properties will be reassessed at market value unless the heirs use them as their primary residence within one year of inheritance.</p>
      <h2>What are the benefits and drawbacks of Proposition 19?</h2>
      <p>The main benefit of Proposition 19 is that it gives more flexibility and affordability to homeowners who want to relocate within California. It can help seniors, disabled people, and disaster victims to find a more suitable home for their needs and preferences, without facing a huge increase in their property taxes.</p>
      <p>The main drawback of Proposition 19 is that it reduces the tax benefits for inherited properties. It can make it more difficult and expensive for heirs to keep their family homes or use them as rental properties.</p>
      <h2>How to apply for Proposition 19?</h2>
      <p>To take advantage of Proposition 19, homeowners must file a claim with the county assessor where their new home is located within three years of purchasing or completing construction of the new home.</p>
        `
  },
  {
    slug: "relocating-to-the-big-city",
    title: "Relocating to the Big City",
    excerpt: "Moving from a small town or suburb to a large city can be an intimidating proposition. Here are a few tips to help make your move as painless as possible.",
    date: "May 20, 2024",
    image: "/images/bg.jpg",
    category: "Real Estate Advice",
    content: `
      <p>Moving from a small town or suburb to a large city can be an intimidating proposition. Here are a few tips to help make your move as painless as possible.</p>
      <h2>Research before you move</h2>
      <p>It's important to understand the culture you're joining. Do research online and find out about school systems, neighborhoods, parking, weather, public transportation, and laws that are native to that area.</p>
      <h2>Have a plan</h2>
      <p>There are a lot of steps to go through before you start packing the moving truck. Find housing before you leave, or at least know where you'll stay while you look for a home. Never sign a lease on an apartment that you haven't seen. If you can't get there, find a friend or an employer to check for you.</p>
      <h2>Get involved</h2>
      <p>Meeting people in a big city can be daunting. Don't expect the neighbors to knock your door down with a casserole when you arrive: city life is often too noisy and hectic. Take the initiative. If there are things you like to do in your town, find ways to do those things in the city. Try new things.</p>
      <h2>Mind your wallet</h2>
      <p>City life is expensive. Everything costs more: food, insurance, clothes, rent. There are also a lot more ways to get ripped off, whether legally or criminally. Be careful how you spend and know where your money is going.</p>
        `
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find(b => b.slug === slug);
}
