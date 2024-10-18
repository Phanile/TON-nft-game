import { TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react';

function Header() {
  const connected = useTonAddress();
  const wallet = useTonWallet();

  return (
    <>
    <header>
        <span>Подключите ваш кошелек: </span>
        <TonConnectButton className="ton-connect-button" style={{float: "right"}}/>
    </header>
    <h1>{connected}</h1>
    <div>
      {wallet ? 'вы используете кошелек: ' + wallet.device.appName : 'че то не так с волетом'}
    </div>
    </>
  );
}

export default Header
