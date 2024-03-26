import Web3 from 'web3'
import { CERTIFY_ABI, CERTIFY_ADDRESS } from '@/app/smart-contracts-abi/omega'

// Create a function to initialize the contract instance
const getContractInstance = (connector: Record<string, any>) => {
  const provider = connector.options.getProvider();
  const web3 = new Web3(provider);
  return new web3.eth.Contract(CERTIFY_ABI, CERTIFY_ADDRESS);
};


// Load all submissions on blockchain
export const loadSubmissions = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const submissionOnchain = await contract.methods.royalties().call();
    console.log(submissionOnchain);
    return submissionOnchain;
  } catch (error) {
    console.error('Error loading user submissions:', error);
    throw error;
  }
};


// Load user submissions
export const loadUserSubmissions = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const submissions = await contract.methods.returnRoyalties().call();
    console.log(submissions);
    return submissions;
  } catch (error) {
    console.error('Error loading user submissions:', error);
    throw error;
  }
};

// Add a submission
export const addSubmission =  async(connector: Record<string, any>, fingerPrint: TimeRanges, contentCreator: String, contentType: String, publicationDate: Date) => {
  try {
    const contract = getContractInstance(connector);
    const submission = await contract.methods.addRoyalty().call();
    return submission;
  } catch (error) {
    console.error('Error adding submission:', error);
    throw error;
  }
};

// Dispute a Submission
export const verifySubmission = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const dispute = await contract.methods.verifyRoyalty().call();
    console.log(dispute);
    return dispute;
  } catch (error) {
    console.error('Error creating dispute:', error);
    throw error;
  }
};

// Dispute a Submission
export const disputeSubmission = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const dispute = await contract.methods.createDispute().call();
    console.log(dispute);
    return dispute;
  } catch (error) {
    console.error('Error creating dispute:', error);
    throw error;
  }
};

// Load user disputes
export const loadUserDisputes = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const disputes = await contract.methods.disputes().call();
    console.log(disputes);
    return disputes;
  } catch (error) {
    console.error('Error loading user submissions:', error);
    throw error;
  }
};


// resolve a dispute
export const resolveDispute = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const dispute = await contract.methods.resolveDispute().call();
    console.log(dispute);
    return dispute;
  } catch (error) {
    console.error('Error loading user submissions:', error);
    throw error;
  }
};

// Load user submitted disputes in the blockchain
export const loadAllDispute = async (connector: Record<string, any>) => {
  try {
    const contract = getContractInstance(connector);
    const disputesOnChain = await contract.methods.returnDisputes().call();
    console.log(disputesOnChain);
    return disputesOnChain;
  } catch (error) {
    console.error('Error loading user submissions:', error);
    throw error;
  }
};

