import React from 'react';
import { Routes, Route } from "react-router-dom";
import Chatbot from "./features/chatbot/Chatbot";

export default function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path='/' element={<Chatbot />} />
      </Routes>
    </div>
  );
}
