import { defineSlotRecipe } from '@pandacss/dev'
 
export const buttonRecipe = defineSlotRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  slots: ['level', 'score'],
  base: {
    level: { bgColor:'#F5B617', color:'#FBFBFB', fontFamily: 'Bowlby One'},
    score: { bgColor:'#001A6E', color:'#FBFBFB', fontFamily: 'Bowlby One'}
  },
  variants: {
    size: {
      sm: {
        level: { fontSize: '1.25rem', padding:'1.5rem 0.5rem', borderRadius:'1.5rem', w:'8rem'},
        score: { fontSize: '1rem', padding:'1rem', borderRadius:'1rem', w:'15rem', textAlign:'center'}
      },
      md: {
        level: { width: '10rem'},
        score: { w:'30rem', fontSize:'1.5rem'}
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})