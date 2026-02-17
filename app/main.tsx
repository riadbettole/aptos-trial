"use client"

import { WalletSelector } from "@/components/WalletSelector";
import { groupAndSortWallets, useWallet } from "@aptos-labs/wallet-adapter-react";

export function DisplayAllWalletsDemo() { 

  const { wallets = [], notDetectedWallets = [] } = useWallet();

  const { aptosConnectWallets, availableWallets, installableWallets } =
    groupAndSortWallets(
      [...wallets, ...notDetectedWallets]
    );

  return (
    <div>
      {/* Wallets that use social login to create an account on the blockchain */}
      {aptosConnectWallets.map((aptosConnectWallet) => (
        <p key={aptosConnectWallet.name}>{aptosConnectWallet.name}</p>
      ))}
      {/* Wallets that are currently installed or loadable. */}
      {availableWallets.map((availableWallet) => (
        <p key={availableWallet.name}>{availableWallet.name}</p>
      ))}
      {/* Wallets that are NOT currently installed or loadable. */}
      {installableWallets.map((installableWallet) => (
        <p key={installableWallet.name}>{installableWallet.name}</p>
      ))}
    </div>
  )
}

export default function MainPage() {
    const { account, connected, wallet, wallets, changeNetwork } = useWallet();
    console.log(account,connected,wallet, wallets)
  return <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <p className="text-black!"> Test Aptos Wallet</p> 
    <WalletSelector/> 
    {/* <div>
      {wallets.map(wallet => {
        return <p>{wallet.name}</p>
      })}
    </div> */}
    {/* <DisplayAllWalletsDemo/> */}
  </div>;
}

