/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "@/utils/scaffold-eth/contract";

const deployedContracts = {
  10: {
    YourContract: {
      address: "0x4459F3e17c3a77c031dA99a32Da40a3cA5199Fa6",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155420: {
    TaskRegistry: {
      address: "0x8511950E2924291B6613Cac4a0A7E126aa9837bC",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_opToken",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "solutionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "solver",
              type: "address",
            },
          ],
          name: "RewardClaimed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "solutionId",
              type: "uint256",
            },
          ],
          name: "SolutionSelected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "solutionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "solver",
              type: "address",
            },
          ],
          name: "SolutionSubmitted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "reward",
              type: "uint256",
            },
          ],
          name: "TaskCreated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
          ],
          name: "claimReward",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "reward",
              type: "uint256",
            },
          ],
          name: "createTask",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "opToken",
          outputs: [
            {
              internalType: "contract OPToken",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "solutionId",
              type: "uint256",
            },
          ],
          name: "selectSolution",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "solutionCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "solutions",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "solver",
              type: "address",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
            {
              internalType: "bool",
              name: "rewarded",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "content",
              type: "string",
            },
          ],
          name: "submitSolution",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "taskCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "tasks",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "reward",
              type: "uint256",
            },
            {
              internalType: "enum TaskRegistry.TaskStatus",
              name: "status",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "selectedSolution",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
