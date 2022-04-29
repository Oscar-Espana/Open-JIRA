import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooConection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConection.isConnected === 1) {
    console.log("ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConection.isConnected = mongoose.connections[0].readyState;

    if (mongooConection.isConnected === 1) {
      console.log("usando conexion anterior");
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect("mongodb://localhost:27017/next-app");
  mongooConection.isConnected = 1;
  console.log("conectado a mongodb");
};

export const disconnect = async () => {
  if (mongooConection.isConnected !== 0) {
    return;
  }
  await mongoose.disconnect();
  console.log("Desconectadp de MongoDB");
};
