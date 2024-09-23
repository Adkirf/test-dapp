import crypto from 'crypto';

export function generateRandomHash(): string {
    return crypto.randomBytes(20).toString('hex');
}