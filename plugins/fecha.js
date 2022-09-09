import { format, parse } from 'fecha'

export default (ctx, inject) => {
  inject('format', format)
  inject('parse', parse)
}
