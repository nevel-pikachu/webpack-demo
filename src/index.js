import './styles/scss/base.scss'
import './styles/scss/header.scss'
import './styles/scss/discovery.scss'
import './styles/scss/reason.scss'
import './styles/scss/trading.scss'
import './styles/scss/footer.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { renderReason } from './js/renderReason'
import { renderTrading } from './js/renderTrading'
import { renderFooter } from './js/renderFooter'

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

renderReason()
renderTrading()
renderFooter()