import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Define the module to deploy the Ludo contract
const LudoModule = buildModule("LudoModule", (m) => {
  // Add any parameters or arguments you want to pass to the contract constructor (if needed)
  const ludo = m.contract("Ludo", []);

  // Return the deployed contract instance
  return { ludo };
});

export default LudoModule;
