export {};

declare global {
  namespace Express {
    interface Request {
        decoded: string;
    }
  }
}