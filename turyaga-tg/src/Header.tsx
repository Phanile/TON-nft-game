import { TonConnectButton } from '@tonconnect/ui-react';

function Header() {
  return (
    <>
    <header>
        <span>Подключите ваш кошелек: </span>
        <TonConnectButton className="ton-connect-button" style={{float: "right"}}/>
    </header>
    </>
  );
}

export default Header
