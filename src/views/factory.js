export function page (name) {
  return {
    name,

    data () {
      return {
        name,
        id: 1,
      }
    },

    activated () {
      console.log(Date.now())
      this.id++
    }
  }
}
