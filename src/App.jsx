// Component ที่แนะนำจะเรียกว่าเป็น Functional Component
//  แบบที่1 : rfc **
// export default function App() {
//   return (
//     <div>
//       App แบบที่1
//     </div>
//   )
// }
// -----------------------------------------
// แบบที่2 :ใช้ rfce
// function App() {
//   return (
//     <div>
//       App แบบที่2
//     </div>
//   )
// }

// export default App
//------------------------------------------
// แบบที่3 :ใช้ rafce
import Hello from './Hello.jsx'
import Hi from './Hi.jsx'
const App = () => {
  return (
    <div>
      App แบบที่3
      <Hello />
      <Hi />
      <Hi/>
      <Hi/>
    </div>
  )
}

export default App



