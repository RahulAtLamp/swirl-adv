import {
    GaslessOnboarding
  } from "@gelatonetwork/gasless-onboarding";
  
  if (!process.env.NEXT_PUBLIC_RPC) {
    console.error("No app RPC");
  }
  
  if (!process.env.NEXT_PUBLIC_API_KEY) {
    console.error("No API key");
  }
  
  let origin;
  if (typeof window !== "undefined") {
    origin = window.location.origin;
  }
  
  export const loginConfig = {
    domains: [origin],
    chain: {
      id: 80001, // polygon-mumbai
      rpcUrl: process.env.NEXT_PUBLIC_RPC,
    },
    openLogin: {
      redirectUrl: origin,

    },
  };
  
  export const gaslessWalletConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  };
  
  export const gaslessOnboarding = new GaslessOnboarding(
    loginConfig,
    gaslessWalletConfig
  );