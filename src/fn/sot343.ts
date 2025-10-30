import type { AnyCircuitElement } from "circuit-json"
import { extendSoicDef, soicWithoutParsing } from "./soic"
import type { z } from "zod"
import { log } from "console"

export const sot343_def = extendSoicDef({})

export const sot343 = (
  raw_params: z.input<typeof sot343_def>,
): { circuitJson: AnyCircuitElement[]; parameters: any } => {
  const parameters = sot343_def.parse({
    fn: "sot343",
    num_pins: 4,
    w: 1.94,
    p: 0.65,
    pw: 0.4,
    pl: 0.65,
    legoutside: true,
  })
  const circuitJson = soicWithoutParsing(parameters)
  return {
    circuitJson,
    parameters,
  }
}
