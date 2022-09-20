import { generateRandomInt } from "@/helpers/generateRandomInt";


export async function incrementRandomInt( ctx ) {
  ctx.commit('setLoading', true)
  try {
    const numberRnt = await generateRandomInt()
    ctx.commit('incrementBy', numberRnt)
  } catch (error) {
    console.log({error});
  } finally {
    ctx.commit('setLoading', false)
  }
}