import React from 'react'
import S from "./style.module.scss"
import AnimatedText from 'react-animated-text-content';
import "./../../style/_globals.scss"
function AboutMe() {
let ReturnClassName= (
  i
)=> {
switch(i) {
  case 0:
return `${S.Hello} `  
break
case 1 : 
return `${S.Name}`
break
case 2: 
return `${S.Title}`
break
case 3 : 
return `${S.Paragraph}`
break
}
}
  let one ="Hello welcome to my portfolio . I'm  "


  let two ="Amine Beji."


  let three = "I make websites alive."


  let four = ` I’m a Full Stack web developer, specializing  in building exceptional web applications.
  Currently, I’m focused on building accessible , human-centered projects for my portfolio.`


  let five = (<button className={`${S.button} `}> Get In Touch </button>)


  let ItemsAbout = [one, two, three, four, five]


  return (
    <div id="intro" className={`${S.Container}`} >
      {ItemsAbout.map((item, i) => {
        return <AnimatedText
        type="chars"
        animation={{
            x: '200px',
            y: '-20px',
            scale: 1.5,
            ease: 'ease-in-out',
        }}
        animationType="rifle"
        interval={i === 3 ? 0.01:0.04}
        duration={i === 3 ? 0.1: 0.4}
        tag="p"
        className={ReturnClassName(i)}
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
    >
          {item}
        </AnimatedText>
      })}
       {five}
    </div>
  )
}

export default AboutMe