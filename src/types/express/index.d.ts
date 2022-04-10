import express from "express";

declare global {
  namespace Express {
    interface Request {
      data: Record<string,any>
    }
  }
}