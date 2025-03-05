import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("🚀 Action:" , action);
    console.log("📦 Estado antes:" , store.getState());
    
    const result = next(action);

    console.log("✅ Estado depois:" , store.getState());
    return result
    
    
}

export default loggerMiddleware