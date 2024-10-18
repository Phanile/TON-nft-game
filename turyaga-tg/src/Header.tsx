import { TonConnectButton } from '@tonconnect/ui-react';

function Header() {
  return (
    <>
    <header>
        <span>Подключите ваш кошелек: </span>
        <TonConnectButton />
    </header>
    </>
  );
}

export default Header
