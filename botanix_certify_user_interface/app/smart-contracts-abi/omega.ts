export const CERTIFY_ADDRESS = '0x713d3012ac92FeCC132e96860E69555aCB19De6D'
export const CERTIFY_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "addr",
				"type": "string"
			}
		],
		"name": "LogResponse",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fingerPrint",
				"type": "string"
			}
		],
		"name": "_verifyData",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fingerPrint",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contentCreator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "publicationDate",
				"type": "uint256"
			}
		],
		"name": "addRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "contentUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "evidenceUrls",
				"type": "string[]"
			}
		],
		"name": "createDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disputes",
		"outputs": [
			{
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "disputeID",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "contentUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isResolved",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "disputeID",
				"type": "bytes32"
			}
		],
		"name": "resolveDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnDisputes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "creatorAddress",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "disputeID",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "contentUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "evidenceUrls",
						"type": "string[]"
					},
					{
						"internalType": "bool",
						"name": "isResolved",
						"type": "bool"
					}
				],
				"internalType": "struct Udunkulu.Disputes[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnRoyalties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "creatorAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "fingerPrint",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "royaltyID",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "contentCreator",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "contentType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "publicationDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isVerified",
						"type": "bool"
					}
				],
				"internalType": "struct Udunkulu.Royalties[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "royalties",
		"outputs": [
			{
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "fingerPrint",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "royaltyID",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "contentCreator",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "publicationDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isVerified",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fingerPrint",
				"type": "string"
			}
		],
		"name": "verifyRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
