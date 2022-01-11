// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET = 'WALLET';

export const userValue = (value) => ({ type: USER, value });

export const walletValue = (value) => ({ type: WALLET, value });
