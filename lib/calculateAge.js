export function calculateAge (birthDate) { 
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthDate).getFullYear();
    return currentYear - birthYear;
 }