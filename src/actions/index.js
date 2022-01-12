// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET = 'WALLET';
export const INITIALS = 'INITIALS';
export const DELETE_LINE = 'DELETE_LINE';

export const userValue = (value) => ({ type: USER, value });

export const walletValue = (value) => ({ type: WALLET, value });

export const initialsValue = (value) => ({ type: INITIALS, value });

export const deleteValue = (value) => ({ type: DELETE_LINE, value });
