import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Header from './Header';

function App() {
  return (
    <>
    <TonConnectUIProvider manifestUrl="https://phanile.github.io/TON-nft-game/tonconnect-manifest.json">
      <Header />
      <h1>testnet</h1>
      <h2>Ваш урон:</h2>
      <h2>Ваш уровень:</h2>
      <h2>Кол-во монет:</h2>
      <button>
        Перейти к вкладке
      </button>
    </TonConnectUIProvider>
    </>
  )
}

export default App
