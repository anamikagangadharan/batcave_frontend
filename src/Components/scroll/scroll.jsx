// import React, { useState, useEffect, useRef } from 'react';
// import './scroll.css'; // Assuming you have your CSS styles imported

// const ScrollableContent = () => {

//   return (
//     <div className='row'>

//     <div className='col d-block clubBenifits'>
//       <div> <span>CLUB</span> BENEFITS</div>
//       <div>Its not just a club, it’s a consortium of fun & opportunities.</div>
//     </div>

//     <div className='row scrollContainer1'>

//       <div className='col-lg-6'>
//         <div className='Access Monetary'>Access to exclusive events</div>
//         <div className='ScrollHeading1'>Unlock Batcave's Exclusive Perks and Camaraderie Reserved Just for You!</div>
//       </div>

//       <div className='col-lg-6 innerScrollContainer text-right'>
//         <div  className='innerScrollLayout' style={{ height: '200px', overflowY: 'scroll', scrollbarWidth: "none" }}>
//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0'>Car Meet</div>
//               <div className='text-right'>01</div>
//             </div>
//             <div className='pb-2'>Join us! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
//           </div>

//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0 '>Car Shows</div>
//               <div className='text-right'>02</div>
//             </div>
//             <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
//           </div>

//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0 '>Track Experiences</div>
//               <div className='text-right'>03</div>
//             </div>
//             <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
//           </div>

//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0 '>Road Trips</div>
//               <div className='text-right'>04</div>
//             </div>
//             <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
//           </div>
//         </div>
//       </div>


//     </div>

//     <div className='row scrollContainer2'>
//       <div className='col-lg-6'>
//         <div className='Monetary'>Monetary Benefits</div>
//         <div className='ScrollHeading2'>Unlocking the Advantage : Explore the Benefits of Batcave </div>
//       </div>

//       <div className='col-lg-6 innerScrollContainer text-right'>
//         <div  className='innerScrollLayout' style={{ height: '200px', overflowY: 'scroll', scrollbarWidth: "none" }}>
//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0'>Car services</div>
//               <div className='text-right'>01</div>
//             </div>
//             <div className='pb-2'>Enjoy up to a 15% discount on car services! Unlock exclusive savings while benefiting from expert maintenance and care for your car.</div>
//           </div>

//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0 '>new car purchase</div>
//               <div className='text-right'>02</div>
//             </div>
//             <div className='pb-2'>Exclusive 10% discount on new car purchases! save big on your next speeding machine. On Purchase over our virtual garage.</div>
//           </div>

//           <div className='innerScrollContent pb-5'>
//             <div className='d-flex justify-content-between scrollHead'>
//               <div className='m-0 '>events & Products</div>
//               <div className='text-right'>03</div>
//             </div>
//             <div className='pb-2'>Unlock standard discounts on events and products, enriching your experience with exclusive savings. Whether attending thrilling car rallies or purchasing quality merchandise.</div>
//           </div>
//         </div>
//       </div>

//     </div>

//   </div>
//   );
// };

// export default ScrollableContent;



// import React, { useState, useEffect } from 'react';

// const ScrollableContent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollSpeed = 50; // Adjust scroll speed as needed

//   useEffect(() => {
//     if (!isPaused) {
//       const intervalId = setInterval(() => {
//         setScrollPosition(prevPosition => prevPosition + 1);
//       }, scrollSpeed);

//       return () => clearInterval(intervalId);
//     }
//   }, [isPaused]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <div className='row' >
//       <div className='col d-block clubBenifits'>
//         <div> <span>CLUB</span> BENEFITS</div>
//         <div>Its not just a club, it’s a consortium of fun & opportunities.</div>
//       </div>

//       <div className='row scrollContainer1'>
//         <div className='col-lg-6'>
//           <div className='Access Monetary'>Access to exclusive events</div>
//           <div className='ScrollHeading1'>Unlock Batcave's Exclusive Perks and Camaraderie Reserved Just for You!</div>
//         </div>

//         <div className='col-lg-6 innerScrollContainer text-right' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <div className='innerScrollLayout innerScrollLayout1' style={{ overflowY: 'hidden', height: '200px' }}>
//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0'>Car Meet</div>
//                 <div className='text-right'>01</div>
//               </div>
//               <div className='pb-2'>Join us! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Car Shows</div>
//                 <div className='text-right'>02</div>
//               </div>
//               <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Track Experiences</div>
//                 <div className='text-right'>03</div>
//               </div>
//               <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Road Trips</div>
//                 <div className='text-right'>04</div>
//               </div>
//               <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollableContent;


import React, { useState, useEffect } from 'react';

const ScrollableContent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 50; // Adjust scroll speed as needed

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setScrollPosition(prevPosition => prevPosition + 1);
      }, scrollSpeed);

      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const maxScrollTop = scrollHeight - clientHeight;
    const newPosition = Math.min(maxScrollTop, scrollTop);
    setScrollPosition(newPosition);
  };

  return (
    <div className='row' >
      <div className='col d-block clubBenifits'>
        <div> <span>CLUB</span> BENEFITS</div>
        <div>Its not just a club, it’s a consortium of fun & opportunities.</div>
      </div>

      <div className='row scrollContainer1'>
        <div className='col-lg-6'>
          <div className='Access Monetary'>Access to exclusive events</div>
          <div className='ScrollHeading1'>Unlock Batcave's Exclusive Perks and Camaraderie Reserved Just for You!</div>
        </div>

        <div className='col-lg-6 innerScrollContainer text-right' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='innerScrollLayout innerScrollLayout1' style={{ overflowY: 'hidden', height: '200px' }} onScroll={handleScroll}>
            <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
              <div className='d-flex justify-content-between scrollHead'>
                <div className='m-0'>Car Meet</div>
                <div className='text-right'>01</div>
              </div>
              <div className='pb-2'>Join us! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
            </div>

            <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
              <div className='d-flex justify-content-between scrollHead'>
                <div className='m-0 '>Car Shows</div>
                <div className='text-right'>02</div>
              </div>
              <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
            </div>

            <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
              <div className='d-flex justify-content-between scrollHead'>
                <div className='m-0 '>Track Experiences</div>
                <div className='text-right'>03</div>
              </div>
              <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
            </div>

            <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
              <div className='d-flex justify-content-between scrollHead'>
                <div className='m-0 '>Road Trips</div>
                <div className='text-right'>04</div>
              </div>
              <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ScrollableContent;


// import React, { useState, useEffect } from 'react';

// const ScrollableContent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollSpeed = 70; // Adjust scroll speed as needed

//   useEffect(() => {
//     if (!isPaused) {
//       const intervalId = setInterval(() => {
//         setScrollPosition(prevPosition => prevPosition + 1);
//       }, scrollSpeed);

//       return () => clearInterval(intervalId);
//     }
//   }, [isPaused]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   const handleScroll = (e) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.target;
//     const maxScrollTop = scrollHeight - clientHeight;
//     const newPosition = Math.min(maxScrollTop, scrollTop);
//     setScrollPosition(newPosition);
//   };

//   return (
//     <div className='row'>
//       <div className='col d-block clubBenifits'>
//         <div> <span>CLUB</span> BENEFITS</div>
//         <div>Its not just a club, it’s a consortium of fun & opportunities.</div>
//       </div>

//       <div className='row'>
//         <div className='col-lg-6'>
//           <div className='Access Monetary'>Access to exclusive events</div>
//           <div className='ScrollHeading1'>Unlock Batcave's Exclusive Perks and Camaraderie Reserved Just for You!</div>
//         </div>

//         <div className='col-lg-6 innerScrollContainer text-right' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <div className='innerScrollLayout innerScrollLayout1' style={{ overflowY: 'auto', height: '200px' }} onScroll={handleScroll}>
//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0'>Car Meet</div>
//                 <div className='text-right'>01</div>
//               </div>
//               <div className='pb-2'>Join us! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Car Shows</div>
//                 <div className='text-right'>02</div>
//               </div>
//               <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Track Experiences</div>
//                 <div className='text-right'>03</div>
//               </div>
//               <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
//             </div>

//             <div className='innerScrollContent pb-5' style={{ transform: `translateY(-${scrollPosition}px)` }}>
//               <div className='d-flex justify-content-between scrollHead'>
//                 <div className='m-0 '>Road Trips</div>
//                 <div className='text-right'>04</div>
//               </div>
//               <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollableContent;
