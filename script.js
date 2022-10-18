// setTimeout( () => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout( () => {
//       document.body.style.backgroundColor = 'orange'
//       setTimeout( () => {
//         document.body.style.backgroundColor = 'blue'
//         setTimeout ( () => {
//           document.body.style.backgroundColor = 'purple'
//           setTimeout( () => {
//             document.body.style.backgroundColor = 'green'
//           },1000)
//         },1000)
//       }, 1000)
//     }, 1000)
// },1000)

function colorSwitch(color, delay) {
  setTimeout( () => {
    document.body.style.backgroundColor = color
  },1000)
}

colorSwitch('blue',1000)
colorSwitch('red',2000)
colorSwitch('green',3000)
colorSwitch('purple',4000)