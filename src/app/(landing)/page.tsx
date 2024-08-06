import Link from "next/link"
import Header from "./_components/Header";
import { Button } from "@/components/atoms/button";

// - What does the product solve ?
//   - How does the product solve it ?





//     - What are customers pain points ?


//       Sales Prep Pain Points






//       SalesPlay is online software that uses AI to streamline account research, identify optimal entry points, and generate personalized sales materials.This ensures that sales reps can focus on high - value activities and have the most relevant
// information at their fingertips. 

// Account research
// We pull in the latest company news, company financials, information on their tech stack and more. 
// ‍
// Custom data
// We pull in custom data for customers all the time.For example, we host all all global stock exchange data and pull in regulatory bank contact details. 
// ‍
// Identify prospective champions and executive stakeholders
// Our platform finds the people and their contact information. 

// AI Point of View
// Our platform creates the first pass at identifying what pressures they are under, why they need you, and how your two companies can work together.






// We envision a sales co - pilot who knows your prospects, company, and calendar.You never have to prompt or chat with the co - pilot because it is always two steps ahead. 

// ●     It watches your top accounts and alerts you when it’s the best time to reach out.

// ●     It knows your calendar and sends you a meeting brief and your slide deck before each meeting.

// ●     It joins your meeting to take notes, update your CRM, and update its messaging.

// ●     It creates the first draft of your proposals.

// ●     It identifies the executive stakeholders that you need to reach and creates custom content that can be shared.

// ●     It creates custom sales materials in your prospect’s brand, that your champion can use.



// Save time


// Considering the nature of the logo - its quite sharp, and the website has a lot of rounded elements; not aligned with the branding


function LandingHome() {
  return (
    <div className=" h-full">

      <Header />

      <section id="hero">

        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 right-[-20px] top-[1191px] -rotate-12">
          <rect x="10" y="10" width="80" height="80" rx="12" ry="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"></rect>
          <circle cx="30" cy="30" r="5" fill="#000000"></circle>
          <circle cx="70" cy="30" r="5" fill="#000000"></circle>
          <circle cx="50" cy="50" r="5" fill="#000000"></circle>
          <circle cx="30" cy="70" r="5" fill="#000000"></circle>
          <circle cx="70" cy="70" r="5" fill="#000000"></circle>
        </svg>

        <div className="pt-36 md:pt-24 pb-36 lg:pb-80 mb-[180px] relative">

          <div className="max-w-5xl mx-auto px-4 mb-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl mb-4 max-w-3xl mx-auto font-bold font-heading leading-tight font-roboto">Create Sales Prep<span className="block">in <span className="text-pink-700">Minutes</span>, Not Hours</span></h1>
              <p className="max-w-3xl mx-auto text-secondary text-lg md:text-xl leading-relaxed mb-12"> </p>
              <button className="inline-block py-4 px-6 xs:py-4 xs:px-8 mr-4 bg-pink-700 hover:bg-blue-700 xs:text-lg text-white text-center font-semibold leading-none rounded transition duration-100">Get Started Today</button>
            </div>
          </div>

          <svg className="absolute h-full w-full top-[-106px] left-0 right-0 -z-10" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" style={{ "stroke": "#e0e0e0", "strokeWidth": "1" }}></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)"></rect>
          </svg>

          <div className="absolute w-full z-10">
            <div className="max-w-5xl mx-auto px-4">
              <img src="/assets/images/autosite-new-modal.png" className="rounded mx-auto max-w-full shadow-lg z-10 relative" />
            </div>
            <div className="absolute top-[-170px] left-[90px] w-[380px] -rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2600.000000 2600.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,2600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M17475 22163 c-645 -25 -960 -43 -1965 -113 -1406 -97 -1901 -120 -2655 -120 -1220 -1 -2416 -55 -5035 -230 -575 -38 -1264 -83 -1533 -100 -549 -34 -557 -36 -646 -116 -62 -56 -92 -116 -131 -269 -65 -253 -95 -481 -112 -854 -12 -271 -3 -683 27 -1211 8 -140 26 -556 40 -925 14 -368 34 -897 45 -1175 61 -1565 70 -2004 80 -3940 9 -1615 14 -1946 40 -2570 71 -1706 244 -3048 546 -4255 72 -288 183 -674 244 -850 18 -52 19 -66 9 -108 -32 -135 51 -291 190 -356 l56 -26 475 2 c897 3 1724 38 3705 153 1072 62 1471 84 2165 115 305 14 787 36 1070 50 756 37 909 44 1185 55 425 17 889 29 1385 35 261 4 615 13 785 20 733 34 1065 30 1377 -15 193 -28 315 -62 440 -121 151 -71 248 -80 352 -30 53 26 122 94 149 146 48 95 114 378 144 625 14 115 17 222 17 515 0 388 -4 467 -59 1105 -19 217 -40 463 -47 545 -10 115 -13 522 -12 1730 0 1819 10 2365 64 3590 39 885 44 1104 43 1955 0 1422 -34 2335 -178 4875 -24 429 -54 951 -65 1160 -13 234 -26 399 -35 430 -28 98 -94 174 -191 216 -52 23 -238 41 -621 59 -192 9 -1147 11 -1348 3z m1265 -674 c140 -6 255 -12 256 -13 2 -2 112 -1974 139 -2481 80 -1506 107 -2411 107 -3575 1 -805 -5 -1074 -42 -1910 -56 -1281 -64 -1725 -65 -3600 0 -1272 3 -1681 13 -1805 7 -88 28 -335 47 -550 19 -214 40 -464 46 -555 17 -229 17 -742 0 -907 -7 -73 -14 -133 -15 -133 -1 0 -51 11 -111 25 -370 85 -818 101 -1715 61 -179 -8 -550 -17 -825 -20 -693 -9 -1201 -26 -2325 -81 -278 -14 -847 -41 -1265 -60 -808 -37 -1090 -52 -2200 -115 -1714 -97 -2454 -130 -3346 -146 l-375 -7 -67 219 c-417 1368 -640 2962 -707 5039 -5 176 -12 374 -15 440 -3 66 -10 914 -15 1885 -5 971 -14 1923 -19 2115 -19 653 -32 1009 -66 1915 -19 498 -42 1085 -50 1305 -9 220 -22 515 -30 655 -29 527 -38 893 -26 1142 16 344 48 588 77 588 27 0 652 41 1699 110 2661 177 3405 211 5035 230 1064 13 1257 22 2745 125 935 65 1361 89 1895 108 225 8 1000 6 1220 -4z"></path>
                  <path d="M7569 20266 c-74 -30 -103 -54 -160 -129 -358 -476 -668 -1590 -628 -2257 12 -192 65 -287 197 -352 170 -84 368 -9 450 170 25 56 26 62 23 241 -1 101 1 208 5 238 l6 53 99 0 c104 0 389 15 549 30 52 4 97 6 98 5 9 -8 23 -90 32 -189 13 -144 30 -194 91 -261 172 -187 472 -131 560 104 54 146 2 464 -151 921 -157 467 -366 885 -565 1130 -118 145 -271 268 -378 304 -69 23 -160 20 -228 -8z m308 -1096 c56 -113 104 -215 108 -226 5 -21 2 -22 -102 -28 -59 -4 -149 -9 -200 -12 l-92 -6 20 70 c50 178 139 413 154 409 6 -2 56 -95 112 -207z"></path>
                  <path d="M14485 16414 c-565 -77 -1099 -441 -1489 -1017 l-60 -87 -60 67 c-419 475 -981 729 -1566 710 -186 -7 -302 -27 -463 -81 -242 -81 -446 -211 -621 -398 -255 -270 -418 -652 -465 -1090 -24 -219 -9 -575 34 -822 123 -701 501 -1467 1064 -2156 180 -220 472 -500 719 -688 325 -248 587 -377 837 -412 44 -7 92 -22 129 -41 96 -52 218 -50 496 7 826 170 1774 801 2503 1668 521 621 838 1257 934 1876 26 165 25 604 0 780 -86 589 -352 1077 -747 1369 -346 257 -811 374 -1245 315z"></path>
                  <path d="M18181 9245 c-69 -20 -108 -44 -160 -100 -61 -66 -76 -112 -106 -317 -32 -221 -32 -225 -53 -234 -10 -4 -90 -9 -180 -12 -164 -4 -293 6 -456 35 l-88 15 -20 47 c-105 247 -166 334 -265 383 -61 30 -76 33 -153 33 -72 0 -93 -4 -141 -28 -66 -32 -132 -99 -162 -165 -17 -37 -22 -66 -22 -137 l0 -90 67 -135 c81 -166 131 -300 238 -635 216 -682 358 -959 621 -1209 122 -116 173 -141 289 -141 153 0 225 55 379 285 134 200 263 483 366 800 126 392 256 1026 259 1265 1 89 -2 106 -26 157 -68 146 -236 225 -387 183z m-563 -1337 c62 -2 92 -6 92 -14 0 -19 -75 -230 -116 -329 l-38 -90 -42 90 c-39 84 -134 334 -134 353 0 4 33 5 73 0 39 -4 114 -9 165 -10z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="logos">
        <div className="max-w-6xl mx-auto text-center pt-0 pb-16 md:py-16 px-4 relative -mt-52 md:mt-0 ">
          <h2 className="mb-4">Trusted by many delighted brands, savvy companies, & smart people</h2>
          <div>
            <img src="https://statamic.com/img/logos/logos-wide-2022.svg" />
          </div>
        </div>
      </section>




      {/* What does it solve? */}
          {/* <h3>On average, it takes 5 hours per week to prepare sales prep manually</h3>
          <p>SalesPlayX.ai automates this process, freeing up valuable time for your sales team to focus on closing deals and engaging with prospects.</p> */}
      {/* <section id="key-benefits">


        <header className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Save 5 Hours per Week on Sales Prep</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Save 5 Hours per Week on Sales Prep
            On average, it takes 5hours hour per week to prepare sales prep manually</p>
        </header>

        <div>
          <h3>Automated Account Research</h3>
          <p>Save time with instant access to company news, financials, and tech stack details.</p>
        </div>

        <div>
          <h3>Personalized Sales Materials</h3>
          <p>Generate custom proposals and presentations tailored to each prospect.</p>
        </div>

        <div>
          <h3>Proactive Engagement Alerts</h3>
          <p>Receive notifications about the best times to reach out to top accounts.</p>
        </div>

        <div>
          <h3>Effortless Meeting Preparation</h3>
          <p>Get meeting briefs and slide decks delivered right before your meetings.</p>
        </div>
      </section> */}

      {/* How does it work, the proess */}
   

      {/* <section id="how-it-works">
        <div>
          <h3>Connect Your Accounts</h3>
          <p>Integrate your CRM and calendar with SalesPlay for seamless data synchronization.</p>
        </div>
        <div>
          <h3>Automate Research & Outreach</h3>
          <p>Our AI handles research and identifies key stakeholders, finding optimal engagement opportunities.</p>
        </div>
        <div>
          <h3>Close Deals Faster</h3>
          <p>Utilize AI insights, personalized materials, and alerts to accelerate your sales process.</p>
        </div>
      </section> */}


      {/* Click to show differnt images maybe or something */}

      {/* <section>
        Testimonials
      </section> */}

      {/* Quantify in minutes how long it can save - save 50minutes on research per company  */}
      {/* <section id="cta">
        <h2>Get started for free</h2>
        <p>Leverage AI to automate account planning and sales prep, saving you 5 hours per account. Get personalized insights, custom sales materials, and detailed account plans automatically</p>
        <button>Book a demo with Meg</button>
      </section> */}


      {/* <section id="cta" className="py-24 relative isolate bg-pink-900">
        <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
        </svg>
        <div className="container">
          <div>
            <div className="text-center">
              <h2 className="text-4xl mb-4 font-bold tracking-tight text-white">Join us on this AI journey</h2>
              <p className="mx-auto max-w-xl text-lg leading-8 text-gray-100">Simplify, amplify, and revolutionise your online endeavours. Let's shape the future of web automation together.</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a href="/app/auth/login" className="button button-primary button-solid button-lg">Join Now</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog educate the client on this in a more in deth article - should also have CTA */}
      <section id="blog">
        <h2>Learn more about SalesPlayAI</h2>
      </section>


      <section className="bg-[#8f4764]">
        <div className="overflow-hidden h-auto py-24 bg-no-repeat" style={{ backgroundImage: "url(https://cdn.prod.website-files.com/60893c95d5c9871201e719d5/637211aa4eac4369b0eb5d2e_cate-blob.webp)", backgroundSize: "55%", backgroundPosition: "125% 55%" }}>
          <div className="container px-16 mx-auto">

            <div className="flex gap-32">

              <div>
                <div className="mb-4">
                  <h3 className="text-4xl mb-2 max-w-sm font-bold text-white">See SalesPlay.ai platform in action</h3>
                  <p className="text-white max-w-[430px]">Get a demo to see how top teams use SalesPlay.ai to automate research and supercharge prospecting efficiency.</p>
                </div>
                <button className="inline-block py-4 px-6 xs:py-4 xs:px-8 mr-4 bg-white text-black hover:bg-blue-700 xs:text-lg text-center font-semibold leading-none rounded transition duration-100">
                  Book a demo with Meg
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>



      <footer className="text-white bg-[#1c1d1f] py-8">
        <div className="px-16">
          <div className="flex flex-col md:flex-row items-center justify-between">

            <p className="text-2xl font-bold">
              SalesPlayX
            </p>


            <div className="flex space-x-8">
              <div className="md:space-x-6 text-center text-sm flex flex-col md:flex-row pt-6 md:pt-0">
                <a href="/privacy" className="py-1.5">Terms of Service</a>
                <a href="/about" className="py-1.5">About</a>
                <a href="/contact" className="py-1.5">Contact</a>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/copyai/" >
                  <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bfb2e826ea15790b1b_Frame%20316126176.svg" loading="lazy" alt="" />
                </a>
                <a href="https://www.facebook.com/groups/887950931991543/" >
                  <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bf82cf41a39803d531_Frame%20316126177.svg" loading="lazy" alt="" />
                </a>
                <a href="https://www.twitter.com/copy_ai" >
                  <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/65822605bd3609a56a231a75_x.svg" loading="lazy" alt="" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default LandingHome