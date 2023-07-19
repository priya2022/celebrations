// //  {/* <div style={addingChallenges}>
// //       <div style={imageStyle}>
// //         {
// //           challenge.flatMap((src,index)=>{
// //             return  <img src={src} alt="" key={index}  style={images}/>
           
// //           })
// //         }
      
// //       </div>*/}
// //       {/* <input type="file" onChange={handleInputChange}/> */}
// //     {/* </div>  */}


// //     //Masonry


// <Masonry columns={3} spacing={2}>
//   {challenge.flatMap((item, index) => (
//     <div key={index}>
//       {/* <Label>{index + 1}</Label> */}
//       <img
//         src={`${item.img}?w=162&auto=format`}
//         srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
//         alt={item.title}
//         loading="lazy"
//         style={{
//           borderBottomLeftRadius: 4,
//           borderBottomRightRadius: 4,
//           display: 'block',
//           width: '100%',
//         }}
//       />
//     </div>
//   ))}
// </Masonry>


// // saveChallenges:(state,action)=>{
// //   const challenges = action.payload
// //   state.challenges.push(...challenges)
// //   return state;
// // }

// // // {/* <img
// // //             src={`${item.img}?w=162&auto=format`}
// // //             srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
// // //             alt={item.title}
// // //             loading="lazy"
// // //             style={{
// // //               borderBottomLeftRadius: 4,
// // //               borderBottomRightRadius: 4,
// // //               display: 'block',
// // //               width: '100%',
// // //             }}
// // //           /> */}