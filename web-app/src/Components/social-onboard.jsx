import {
    GaslessOnboarding
  } from "@gelatonetwork/gasless-onboarding";
  
  if (!process.env.RPC) {
    console.error("No app RPC");
  }
  
  if (!process.env.API_KEY) {
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
      rpcUrl: process.env.RPC,
    },
    openLogin: {
      redirectUrl: origin,

    },
  };
  
  export const gaslessWalletConfig = {
    apiKey: process.env.API_KEY,
  };
  
  export const gaslessOnboarding = new GaslessOnboarding(
    loginConfig,
    gaslessWalletConfig
  );