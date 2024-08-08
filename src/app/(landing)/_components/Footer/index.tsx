import Link from "next/link"

function Footer() {
  return (
    <footer className="relative print:hidden z-20">

      <div className="absolute right-4 -top-8">
        <div className="flex items-center font-hand parent">
          {/* <div className="pb-1" style="display: none;">If do right no can defense</div> */}
          <div>
            <svg className="text-black h-10 ml-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 194 510.84"><path d="M48.01 216.67c-1.15 46.22-11.65 135.35-23.21 165.21h144.4c-13.45-33.87-24.57-122.41-26.13-165.21H48.01zm11.45-83.87h75.08c4.91 0 8.93 4.06 8.93 8.93 0 4.88-4.06 8.94-8.93 8.94H59.46c-4.87 0-8.93-4.02-8.93-8.94 0-4.91 4.02-8.93 8.93-8.93zm-26.24 55.91h127.56c4.91 0 8.93 4.04 8.93 8.94 0 4.89-4.04 8.93-8.93 8.93H33.22c-4.89 0-8.93-4.02-8.93-8.93 0-4.92 4.02-8.94 8.93-8.94zm13.12-27.96h101.32c4.91 0 8.93 4.06 8.93 8.94s-4.05 8.93-8.93 8.93H46.34c-4.88 0-8.93-4.02-8.93-8.93 0-4.92 4.02-8.94 8.93-8.94zM97 59.26c-5.33.07-11.61-3.54-14.39-10.63h-9.8c-2.93 11.83-23.41 17.97-30.6.08l-7.99 5.12c-2.66 1.71-3.25 1.8-3.37 5.32-.05 1.68.23 3.5.9 4.83 14.3 13.97 21 35.19 21.98 58.74h86.54c.98-23.55 7.68-44.77 21.98-58.74.67-1.33.95-3.15.9-4.83-.12-3.52-.71-3.61-3.37-5.32l-7.99-5.12c-7.19 17.89-27.67 11.75-30.6-.08h-9.8c-2.78 7.09-9.06 10.7-14.39 10.63zM97 0c9.64 0 17.46 7.82 17.46 17.46 0 4.99-2.11 9.5-5.47 12.69 14.91 2.67 27.09 10.3 32.9 20.3-.38.31-.77.58-1.17.8-1.66.95-3.53 1.27-5.36 1.09a11.24 11.24 0 0 1-5.38-2.03c-1.71-1.21-2.99-2.84-3.43-4.63a6.058 6.058 0 0 0-5.87-4.6v-.01h-9.8c-2.67 0-4.94 1.74-5.74 4.15-.87 2.07-2.18 3.65-3.65 4.74-1.61 1.19-3.37 1.78-4.92 1.76h-.15c-1.55.02-3.31-.57-4.91-1.76-1.55-1.14-2.91-2.82-3.78-5.04a6.064 6.064 0 0 0-5.62-3.85h-9.8c-2.95 0-5.41 2.11-5.95 4.9-.5 1.68-1.73 3.2-3.35 4.34a11.24 11.24 0 0 1-5.38 2.03c-1.83.18-3.7-.14-5.36-1.09l-.17-.1C57.71 40.88 69.96 33 85.08 30.21c-3.41-3.19-5.54-7.72-5.54-12.75C79.54 7.82 87.36 0 97 0zM31.18 391.97h131.64c6.03 0 10.96 4.95 10.96 10.95 0 6-4.96 10.96-10.96 10.96H31.18c-6 0-10.96-4.93-10.96-10.96 0-6.02 4.93-10.95 10.96-10.95zm-19.85 96.21h171.34c6.23 0 11.33 5.09 11.33 11.33 0 6.23-5.1 11.33-11.33 11.33H11.33C5.1 510.84 0 505.74 0 499.51c0-6.24 5.1-11.33 11.33-11.33zm148.88-64.19c9.17 16.1 24.19 32.39 21.75 54.07H12.01c-2.44-21.68 14.6-37.97 23.77-54.07h124.43z" /></svg>
          </div>
        </div>
      </div>

      <div className="bg-black relative overflow-hidden text-white font-montserrat text-xs antialiased pt-24 lg:pt-32 pb-16 px-8 lg:px-24"><svg viewBox="0 0 186 178" className="absolute -left-20 -bottom-20 h-32 w-32 text-white">
        <defs>
          <path id="a" d="M.23.405H86.4V6H.23z"></path>
          <path id="c" d="M.463.441h80.185v5.454H.463z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path d="M107.425 94H0c.06 1.668.193 3.334.373 5h185.249c.182-1.662.314-3.328.378-5h-78.575zM106.94 159H31a90.501 90.501 0 007.04 5h109.887a92.68 92.68 0 007.073-5h-48.061zM107.44 133H11a81.227 81.227 0 003.243 5H172.805a79.424 79.424 0 003.195-5h-68.561zM107.457 106H2c.339 1.674.757 3.34 1.218 5h180.568a72.225 72.225 0 001.214-5h-77.544zM107.473 146H19a86.33 86.33 0 004.672 5H163.26a84.626 84.626 0 004.741-5h-60.527zM107.516 120H5a75.06 75.06 0 002.16 5h172.704a75.365 75.365 0 002.136-5h-74.484z" fill="currentColor"></path>
          <g transform="translate(50 172)">
            <mask id="b" fill="#fff">
              <use></use>
            </mask>
            <path d="M57.325.405H.231a94.875 94.875 0 0013.582 5.596H72.914A94.233 94.233 0 0086.4.405H57.325z" fill="currentColor" mask="url(#b)"></path>
          </g>
          <path d="M107.52 32H167a86.714 86.714 0 00-4.911-5H24.882A84.01 84.01 0 0020 32h87.519z" fill="currentColor"></path>
          <g transform="translate(53)">
            <mask id="d" fill="#fff">
              <use></use>
            </mask>
            <path d="M54.455 5.895H80.648A95.992 95.992 0 0065.388.439H15.575A94.989 94.989 0 00.463 5.895h53.992z" fill="currentColor" mask="url(#d)"></path>
          </g>
          <path d="M107.435 19H154a91.912 91.912 0 00-7.394-5H40.419c-.3.185-.61.351-.91.536A93.833 93.833 0 0033 19H107.436zM106.966 85H186a71.113 71.113 0 00-.442-5H.446A70.812 70.812 0 000 85h106.966zM106.99 59H181a74.543 74.543 0 00-2.239-5H7.21A75.397 75.397 0 005 59h101.99zM107.471 72H185c-.372-1.674-.8-3.34-1.295-5H3.286A73.91 73.91 0 002 72h105.471zM106.99 45H175a81.26 81.26 0 00-3.345-5H14.368A79.14 79.14 0 0011 45h95.99z" fill="currentColor"></path>
        </g>
      </svg>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-between pb-12 hover-within:underline-grow">
          <div className="w-1/2 lg:w-auto pb-12 pr-4">
            <Link href="/" className="text-3xl font-bebas tracking-wider">
              SalesPlayX
            </Link>
            <h6 className="uppercase text-sm font-bold pb-4 relative font-cabinSketch"><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" className="footer-arrow">
              <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
              Product
            </h6>
            <ul className="space-y-2">
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto pb-12 pr-4">
            <h6 className="uppercase text-sm font-bold pb-4 relative font-cabinSketch"><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" className="footer-arrow">
              <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
              Solutions
            </h6>
            <ul className="space-y-2">
              <li><a href="/marketplace">Document Generation</a></li>
              <li><a href="/addons">Account Planning</a></li>
              <li><a href="/starter-kits">Messaging Engine</a></li>
              <li><a href="/sell">Proposal Automation</a></li>
              <li><a href="/">Data Enrichment</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto pb-12 pr-4">
            <h6 className="uppercase text-sm font-bold pb-4 relative font-cabinSketch">
              <svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" className="footer-arrow">
                <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              Resources
            </h6>
            <ul className="space-y-2">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/support">Support Center</a></li>
              <li><a href="/branding">Brand Kit</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto pb-12 pr-4">
            <h6 className="uppercase text-sm font-bold pb-4 relative font-cabinSketch"><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" className="footer-arrow">
              <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
              Community
            </h6>
            <ul className="space-y-2">
              <li><a href="/stories">Customer Stories</a></li>
              <li><a href="https://twitter.com/statamic">Twitter</a></li>
              <li><a rel="me" href="https://mastodon.social/@statamic">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-auto pb-12 pr-4">
            <h6 className="uppercase text-sm font-bold pb-4 relative font-cabinSketch"><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" className="footer-arrow">
              <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
              Company
            </h6>
            <ul className="space-y-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/license">Investors</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap items-end justify-between">
          <div id="newsletter-signup" className="lg:max-w-md">
            <h3 className="text-2xl font-display font-bold italic font-cabinSketch antialiased mb-6">Sign up for our newsletter</h3>
            <p className="mb-6">We share the top strategies and tactics to automate sales prep and close more deals.</p>
            <div>
              <div className="border p-1 border-white rounded-sm flex focus-within:border-yellow">
                <input type="email" required placeholder="dale.carnegie@example.com" className="bg-transparent outline-none flex-1 pl-1" />
                <button type="submit" name="subscribe" className="p-2 hover:bg-teal rounded-sm"><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.749 1.394l3 3a.857.857 0 010 1.212l-3 3a.857.857 0 01-1.212-1.212l1.17-1.17a.214.214 0 00-.151-.367H1.857a.857.857 0 010-1.714h7.699a.214.214 0 00.152-.366L8.537 2.606a.857.857 0 011.212-1.212z" fill="#FFF" fill-rule="nonzero" stroke="#191A1B" stroke-width=".857" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></button></div>
            </div>
          </div>
          <p className="w-full pt-8 lg:w-auto lg:text-right text-2xs">© Copyright 2024 SalesPlayX, Inc.<br />All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


// function Footer() {
//   return (
//     <footer className="text-white bg-[#1c1d1f] py-8 relative">
//       <div className="px-16">
//         <div className="flex flex-col md:flex-row items-center justify-between">

//           <p className="text-3xl tracking-wider font-bold font-bebas mb-6 lg:mb-0">
//             SalesPlayX
//           </p>

//           <div className="flex flex-col-reverse lg:flex-row md:space-x-8">
//             <div className="md:space-x-6 text-center text-sm flex flex-col md:flex-row pt-6 md:pt-0">
//               <a href="/privacy" className="py-1.5">Terms of Service</a>
//               <a href="/about" className="py-1.5">About</a>
//               <a href="/contact" className="py-1.5">Contact</a>
//             </div>
//             <div className="flex space-x-4">
//               <a href="https://www.linkedin.com/company/copyai/" >
//                 <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bfb2e826ea15790b1b_Frame%20316126176.svg" loading="lazy" alt="" />
//               </a>
//               <a href="https://www.facebook.com/groups/887950931991543/" >
//                 <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/656088bf82cf41a39803d531_Frame%20316126177.svg" loading="lazy" alt="" />
//               </a>
//               <a href="https://www.twitter.com/copy_ai" >
//                 <img src="https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/65822605bd3609a56a231a75_x.svg" loading="lazy" alt="" />
//               </a>
//             </div>
//           </div>

//           <div className="md:hidden text-sm text-center mt-6">
//             &copy; Copyright 2024 SalesPlayX. All rights reserved.
//           </div>

//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
