"use client"

import { WalletSelector } from "@/components/WalletSelector";
import { groupAndSortWallets, useWallet } from "@aptos-labs/wallet-adapter-react";


export default function MainPage() {
    const { account, connected, wallet, wallets, changeNetwork } = useWallet();
    console.log(account,connected,wallet, wallets)
  return <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <p className="text-black!"> Test Aptos Wallet</p> 
    <WalletSelector/> 

  </div>;
}

