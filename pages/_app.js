import '../styles/global.css'
import '../styles/foundation.min.css'

export default function App({ Component, pageProps }) {
	return <Component {... pageProps} />
}
