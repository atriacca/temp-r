// export default function App(props){
//     let phraseJSX
//     switch(props.phrase) {
//       case 'greeting':
//         return phraseJSX = <h1>Hello</h1>
//       case 'question':
//         return phraseJSX = <h1>What's up?</h1>
//       case 'farewell':
//         return phraseJSX = <h1>Good Bye</h1>
//       default:
//         return null
//     }

//     return(
//       <div>
//         {phraseJSX}
//       </div>
//     )
//   }
//   You're also allowing to throw in a self invoking function in there, but you'll have to decide which is most readable.

  export default function App(props){
    return(
        {(() => {
        switch(props.phrase) {
            case 'greeting':
                return <h1>Hello</h1>
            case 'question':
                return <h1>What's up?</h1>
            case 'farewell':
                return <h1>Good Bye</h1>
            default:
                return null
        }
        })()
        }
    )
}