import '../styles/foundation.min.css'
import '../styles/global.css'
import '../styles/gruvbox-dark.css'

export default function App({ Component, pageProps }) {
	return <Component {... pageProps} />
}
