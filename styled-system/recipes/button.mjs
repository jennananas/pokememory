import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonDefaultVariants = {
  "size": "sm"
}
const buttonCompoundVariants = []

const buttonSlotNames = [
  [
    "level",
    "button__level"
  ],
  [
    "score",
    "button__score"
  ],
  [
    "replay",
    "button__replay"
  ]
]
const buttonSlotFns = /* @__PURE__ */ buttonSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, buttonDefaultVariants, getSlotCompoundVariant(buttonCompoundVariants, slotName))])

const buttonFn = (props = {}) => {
  return Object.fromEntries(buttonSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const buttonVariantKeys = [
  "size"
]

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: false,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})