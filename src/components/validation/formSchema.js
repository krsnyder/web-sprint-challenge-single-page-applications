import * as yup from "yup";

export default yup.object().shape({
  size: yup
    .string()
    .required("How hungry are you my dude???")
    .oneOf(['10','12','16','24']),
  sauce: yup
    .string()
    .required("Noone likes a dry pie!"),
  name: yup
  .string()
  .required("Please give us your name for the order")
  .min(2, "Your name is at least 2 letters, right??"),
  wings: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onion: yup.boolean(),
  pineapple: yup.boolean(),
  cheese: yup.boolean(),
  instructions: yup.string() 
});
