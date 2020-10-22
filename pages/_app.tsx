import '../styles/globals.css'

const MyApp: React.FunctionComponent<any> = ({ Component, pageProps }: any): React.ReactElement => {
  return <Component {...pageProps} />
}

export default MyApp
