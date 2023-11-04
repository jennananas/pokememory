import { cva } from '../../styled-system/css'
 
const button = cva({
  base: {
    display: 'flex', 
    justify:'center', 
    alignItems:'center',
    fontFamily:'Bowlby One',
    fontSize:'1.25rem',
    w:'12rem',
    h:'3.5rem',
    borderRadius:'1rem', 
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    cursor:'pointer'
  },
  variants: {
    visual: {
      level: { 
        bg:'#F5B617',
        color:'#FBFBFB'
    },
      outline: { borderWidth: '1px', borderColor: '#F5B617' },
      score: { bg: '#001A6E', color: '#FBFBFB', w:'max-content', h:'6rem', borderRadius:'1.5rem', fontSize:'1.5rem', p: '1.5rem 2.5rem'}
    },
    size: {
      sm: { padding: '2', fontSize: '1.25rem' },
      lg: { padding: '4', fontSize: '1.25rem' }
    }
  }
})

export default button