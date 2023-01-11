import './styles/scss/base.scss'

import './styles/scss/desktop/header.scss'
import './styles/scss/desktop/discovery.scss'
import './styles/scss/desktop/reason.scss'
import './styles/scss/desktop/trading.scss'
import './styles/scss/desktop/footer.scss'

import './styles/scss/mobile/header.scss'
import './styles/scss/mobile/discovery.scss'
import './styles/scss/mobile/reason.scss'
import './styles/scss/mobile/trading.scss'
import './styles/scss/mobile/footer.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { mobileOrTabletRender } from './js/mobileOrTabletRender'
import { renderReason } from './js/renderReason'
import { renderTrading } from './js/renderTrading'
import { renderFooter } from './js/renderFooter'

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

mobileOrTabletRender()
renderReason()
renderTrading()
renderFooter()