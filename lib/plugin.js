import MobileDetect from "./mobileDetect"

export default function(ctx, inject) {
  const $mobileDetect = new MobileDetect(ctx)

  inject("mobileDetect", $mobileDetect)
  ctx.$mobileDetect = $mobileDetect
}
