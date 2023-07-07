'use client'

import React, { useState } from "react"
import { FormEvent } from "react"
const { Configuration, OpenAIApi } = require("openai")
require('dotenv').config();

export default function Home() {

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration)
  const [textoBase, setTextoBase] = React.useState("");
  const [resumo, setResumo] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    console.log("Chamando a api")

    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Resuma: ${textoBase}`,
        temperature: 0.5,
        max_tokens: 2048,
      });

      setResumo(result.data.choices[0].text);
    } catch(e) {
      setResumo("Alguma coisa deu errado, por favor tente novamente.")
      console.error(e)
    }
    setCarregando(false);
  }



  return (
    <main className="h-screen items-center justify-center">

      <h1 className="py-12 text-center text-6xl font-bold">Resuma seus textos</h1>
      

    <div className="grid grid-cols-2 h-[512px] mx-16 rounded-xl bg-[#8661C1] border-2 border-[#BE97C6]">

        {/* Esquerda */}
        <div className="flex flex-col p-12 items-start relative">

          <h2 className="text-left leading-relaxed font-semibold">Insira o texto a ser resumido</h2>

          <form className="w-full h-full" onSubmit={handleSubmit}>
            <textarea className="w-full h-[80%] bg-[#8661C1] py-2 text-[#EFBCD5]"
             name="textoBase" id="textoBase" placeholder="Escreva seu texto aqui..." onChange={(e) => setTextoBase(e.target.value)}></textarea>
             
             <button className="flex self-end text-sm items-center py-3 px-5 font-medium text-center text-[#EFBCD5] bg-[#4B5267] rounded-lg mt-8 transition-all hover:bg-slate-700 focus:shadow-inner"
              type="submit">
               Resumir
            </button>
          </form>

      </div>

      {/* Direita */}
      <div className="p-12 text-left leading-relaxed">
        <h2 className="font-semibold">Texto resumido</h2>
        <p>{resumo}</p>
      </div>

    </div>

    </main>
  )
}
